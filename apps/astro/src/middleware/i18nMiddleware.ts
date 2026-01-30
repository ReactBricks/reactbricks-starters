import { defineMiddleware } from 'astro:middleware'
import { defaultLocale, locales } from '@/i18n/conf'

const SKIP_PATHS = ['/admin', '/preview', '/api', '/favicon.ico', '/logo.svg']

function shouldSkip(pathname: string): boolean {
  return SKIP_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  )
}

function getLocaleFromPath(pathname: string): string | null {
  const parts = pathname.split('/').filter(Boolean)
  return locales.includes(parts[0]) ? parts[0] : null
}

export const i18nMiddleware = defineMiddleware((context, next) => {
  const { pathname } = context.url

  if (shouldSkip(pathname)) {
    return next()
  }

  const lang = getLocaleFromPath(pathname)

  if (!lang) {
    context.locals.isRewrite = true
    return context.rewrite(`/${defaultLocale}${pathname}`)
  }

  if (!context.locals.isRewrite && lang === defaultLocale) {
    return context.redirect(pathname.replace(`/${defaultLocale}`, '') || '/')
  }

  return next()
})
