import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { fetchPage } from 'react-bricks/rsc'

import { i18n } from '@/i18n-config'
import {
  getAbTestingCookie,
  removeAbTestingCookie,
  selectVariant,
  setAbTestingCookie,
} from '@/lib/abTesting'
import config from '@/react-bricks/config'
import { CustomMiddleware } from './chain'

export function withAbTestingMiddleware(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    // Next.js calls middleware with only (request, event); ensure we always have a response.
    const resolvedResponse = response ?? NextResponse.next()

    const { pathname } = request.nextUrl

    // GET locale
    let currentLocale = i18n.locales.find(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
    const locale = currentLocale || i18n.defaultLocale

    // GET slug
    let slug = ''
    if (currentLocale && pathname.startsWith(`/${currentLocale}/`)) {
      const localePrefix = `/${currentLocale}/`
      slug = pathname.slice(localePrefix.length - 1)
    } else if (
      (currentLocale && pathname === `/${currentLocale}`) ||
      pathname === '' ||
      pathname === '/'
    ) {
      slug = '/'
    } else {
      slug = pathname.slice(1)
    }

    // fetch page
    const page = await fetchPage({
      slug,
      language: locale,
      config,
      fetchOptions: { next: { revalidate: 3 } },
    }).catch((err) => {
      return null
    })

    if (!page || !page.variants || page.variants.length === 1) {
      const finalResponse = await middleware(request, event, resolvedResponse)
      const responseWithCookie = (finalResponse ??
        resolvedResponse) as NextResponse

      removeAbTestingCookie({
        slug,
        locale,
        cookieStore: responseWithCookie.cookies,
      })

      return responseWithCookie
    }

    const existingVariantName = getAbTestingCookie({
      slug,
      locale,
      cookieStore: request.cookies,
    })

    let selectedVariant =
      page.variants.find((v) => v.name === existingVariantName) ?? null

    if (selectedVariant) {
      return middleware(request, event, resolvedResponse)
    }

    selectedVariant = selectVariant(page.variants)
    if (!selectedVariant) {
      return middleware(request, event, resolvedResponse)
    }

    // Set cookie if missing
    const finalResponse = await middleware(request, event, resolvedResponse)
    const responseWithCookie = (finalResponse ??
      resolvedResponse) as NextResponse

    setAbTestingCookie({
      slug,
      locale,
      variantName: selectedVariant.name,
      cookieStore: responseWithCookie.cookies,
      variantUnpublishingDate: selectedVariant.scheduledForUnpublishingOn,
    })

    return responseWithCookie
  }
}
