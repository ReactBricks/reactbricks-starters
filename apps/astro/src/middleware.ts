import { defaultLocale, locales } from '@/i18n/conf'
import { defineMiddleware, sequence } from 'astro:middleware'
import {
  createAbTestingMiddleware,
  createI18nMiddleware,
} from 'react-bricks/astro/server'

const abTestingMiddleware = defineMiddleware(
  createAbTestingMiddleware({ locales })
)

const i18nMiddleware = defineMiddleware(
  createI18nMiddleware({ locales, defaultLocale })
)

export const onRequest = sequence(abTestingMiddleware, i18nMiddleware)
