import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react'
import {
  PageViewer,
  cleanPage,
  fetchPage,
  getAbTestingCookie,
  renderJsonLd,
  renderMeta,
  types,
  useReactBricksContext,
} from 'react-bricks/frontend'

import ErrorNoFooter from '../../../components/errorNoFooter'
import ErrorNoHeader from '../../../components/errorNoHeader'
import ErrorNoKeys from '../../../components/errorNoKeys'
import GAExperimentTracker from '../../../components/GAExperimentTracker'
import Layout from '../../../components/layout'
import config from '../../../react-bricks/config'
import { BLOG_SLUG_PREFIX } from '../../../react-bricks/pageTypes'

interface PageProps {
  page: types.Page
  header: types.Page
  footer: types.Page
  errorPage: string
  errorNoKeys: string
  errorHeader: string
  errorFooter: string
  variantName?: string
  testName?: string
}

const Page: React.FC<PageProps> = ({
  page,
  header,
  footer,
  errorNoKeys,
  errorPage,
  errorHeader,
  errorFooter,
  variantName,
  testName,
}) => {
  // Clean the received content
  // Removes unknown or not allowed bricks
  const { pageTypes, bricks } = useReactBricksContext()
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null
  const headerOk = header ? cleanPage(header, pageTypes, bricks) : null
  const footerOk = footer ? cleanPage(footer, pageTypes, bricks) : null

  return (
    <Layout>
      {variantName && testName && (
        <GAExperimentTracker testName={testName} variantName={variantName} />
      )}
      {pageOk && !errorPage && !errorNoKeys && (
        <>
          <Head>
            {renderMeta(pageOk) as ReactNode}
            {renderJsonLd(pageOk) as ReactNode}
          </Head>
          {headerOk && !errorHeader ? (
            <>
              <style>{`
h2 + p {
  margin-top: 0!important;
}
h3 + p {
  margin-top: 0!important;
}
              `}</style>
              <PageViewer page={headerOk} />
            </>
          ) : (
            <ErrorNoHeader />
          )}
          <PageViewer page={pageOk} main />
          {footerOk && !errorFooter ? (
            <PageViewer page={footerOk} />
          ) : (
            <ErrorNoFooter />
          )}
        </>
      )}
      {errorNoKeys && <ErrorNoKeys />}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let errorNoKeys: boolean = false
  let errorPage: boolean = false
  let errorHeader: boolean = false
  let errorFooter: boolean = false

  if (!config.apiKey) {
    errorNoKeys = true
    return { props: { errorNoKeys } }
  }

  const slug = (context.params as { slug?: string | string[] })?.slug

  let cleanSlug = ''

  if (!slug) {
    cleanSlug = '/'
  } else if (typeof slug === 'string') {
    cleanSlug = slug
  } else {
    cleanSlug = slug.join('/')
  }

  const locale = context.locale || 'en'

  const variantNameFromCookie = getAbTestingCookie({
    slug: `${BLOG_SLUG_PREFIX}${cleanSlug}`,
    locale,
    cookies: context.req.cookies,
  })

  const [page, header, footer] = await Promise.all([
    fetchPage({
      slug: `${BLOG_SLUG_PREFIX}${cleanSlug}`,
      language: locale,
      variantName: variantNameFromCookie,
      config,
    }).catch(() => {
      errorPage = true
      return {}
    }),
    fetchPage({ slug: 'header', language: locale, config })
      .then(({ author, ...page }) => page)
      .catch(() => {
        errorHeader = true
        return {}
      }),
    fetchPage({ slug: 'footer', language: locale, config })
      .then(({ author, ...page }) => page)
      .catch(() => {
        errorFooter = true
        return {}
      }),
  ])

  // When no A/B variant is active, allow CDN caching (SSG-like behavior)
  if (!variantNameFromCookie) {
    context.res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=60'
    )
  }

  return {
    props: {
      page,
      header,
      footer,
      errorNoKeys,
      errorPage,
      errorHeader,
      errorFooter,
      ...(variantNameFromCookie
        ? {
            variantName: variantNameFromCookie,
            testName: `${cleanSlug}_${locale}`,
          }
        : {}),
    },
  }
}

export default Page
