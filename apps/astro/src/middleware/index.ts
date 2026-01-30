import { sequence } from 'astro:middleware'
import { abTestingMiddleware } from './abTestingMiddleware'
import { i18nMiddleware } from './i18nMiddleware'

export const onRequest = sequence(abTestingMiddleware, i18nMiddleware)
