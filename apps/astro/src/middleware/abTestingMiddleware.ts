import { defineMiddleware } from 'astro:middleware'
import { fetchPage } from 'react-bricks/astro/server'
import { reactBricksAstroStore } from 'react-bricks/astro'
import { locales } from '@/i18n/conf'
import {
  getAbTestingCookie,
  removeAbTestingCookie,
  selectVariant,
  setAbTestingCookie,
} from '@/lib/abTesting'

function getLocaleFromPath(pathname: string): string | null {
  const parts = pathname.split('/').filter(Boolean)
  return locales.includes(parts[0]) ? parts[0] : null
}

function getSlugFromPath(pathname: string, locale: string): string {
  const localePrefix = `/${locale}`
  if (pathname === localePrefix || pathname === `${localePrefix}/`) {
    return '/'
  }
  if (pathname.startsWith(`${localePrefix}/`)) {
    // Strip locale prefix and leading slash to match Astro param slugs (e.g. "about-us")
    return pathname.slice(localePrefix.length + 1)
  }
  return pathname || '/'
}

export const abTestingMiddleware = defineMiddleware(async (context, next) => {
  const { pathname } = context.url
  const lang = getLocaleFromPath(pathname)

  if (!lang) {
    return next()
  }

  const slug = getSlugFromPath(pathname, lang)
  const config = reactBricksAstroStore.getConfig()

  const page = await fetchPage({
    slug,
    language: lang,
    config,
  }).catch(() => null)

  // No page or no variants (or single variant) — clean up stale cookie
  if (!page || !page.variants || page.variants.length <= 1) {
    removeAbTestingCookie({ slug, locale: lang, cookies: context.cookies })
    return next()
  }

  // Check for existing variant cookie
  const existingVariantName = getAbTestingCookie({
    slug,
    locale: lang,
    cookies: context.cookies,
  })

  const existingVariant = page.variants.find(
    (v) => v.name === existingVariantName
  )

  if (existingVariant) {
    context.locals.abTestVariant = existingVariant.name
    return next()
  }

  // Select a new variant
  const selectedVariant = selectVariant(page.variants)

  if (!selectedVariant) {
    return next()
  }

  setAbTestingCookie({
    slug,
    locale: lang,
    variantName: selectedVariant.name,
    cookies: context.cookies,
    variantUnpublishingDate: selectedVariant.scheduledForUnpublishingOn,
  })

  context.locals.abTestVariant = selectedVariant.name

  return next()
})
