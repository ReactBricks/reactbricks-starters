import type { AstroCookies } from 'astro'

const COOKIE_NAME_PREFIX = 'rb_ab_test'
const DEFAULT_AB_TESTING_COOKIE_TTL = 60 * 60 * 24 * 2 // 2 days (matches Next.js)

type Variant = {
  name: string
  weight: number
  scheduledForUnpublishingOn?: string
}

function getCookieName(slug: string, locale: string): string {
  return `${COOKIE_NAME_PREFIX}_${slug}_${locale}`
}

export function getAbTestingCookie({
  slug,
  locale,
  cookies,
}: {
  slug: string
  locale: string
  cookies: AstroCookies
}): string | undefined {
  return cookies.get(getCookieName(slug, locale))?.value
}

export function setAbTestingCookie({
  slug,
  locale,
  variantName,
  cookies,
  variantUnpublishingDate,
}: {
  slug: string
  locale: string
  variantName: string
  cookies: AstroCookies
  variantUnpublishingDate?: string
}) {
  const maxAge = variantUnpublishingDate
    ? Math.max(
        Math.floor(
          (Date.parse(variantUnpublishingDate) - Date.now()) / 1000
        ),
        0
      )
    : DEFAULT_AB_TESTING_COOKIE_TTL

  cookies.set(getCookieName(slug, locale), variantName, {
    path: '/',
    httpOnly: true,
    maxAge,
    sameSite: 'lax',
    secure: true,
  })
}

export function removeAbTestingCookie({
  slug,
  locale,
  cookies,
}: {
  slug: string
  locale: string
  cookies: AstroCookies
}) {
  cookies.delete(getCookieName(slug, locale))
}

export function selectVariant<T extends Variant>(variants: T[]): T | null {
  const totalWeight = variants.reduce((sum, v) => sum + v.weight, 0)
  const rand = Math.random() * totalWeight

  let cumulative = 0
  for (const variant of variants) {
    cumulative += variant.weight
    if (rand < cumulative) return variant
  }

  return null
}
