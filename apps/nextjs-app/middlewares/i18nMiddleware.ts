import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { i18n } from '@/i18n-config'
import { CustomMiddleware } from './chain'

export function withI18nMiddleware(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname

    // Check if the default locale is in the pathname
    if (
      pathname.startsWith(`/${i18n.defaultLocale}/`) ||
      pathname === `/${i18n.defaultLocale}`
    ) {
      // e.g. incoming request is /en/about
      // The new URL is now /about
      return NextResponse.redirect(
        new URL(
          pathname.replace(
            `/${i18n.defaultLocale}`,
            pathname === `/${i18n.defaultLocale}` ? '/' : ''
          ),
          request.url
        )
      )
    }

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
      // We are on the default locale
      // Rewrite so Next.js understands

      // e.g. incoming request is /about
      // Tell Next.js it should pretend it's /en/about
      return NextResponse.rewrite(
        new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
      )
    }

    return middleware(request, event, response)
  }
}
