interface ImportMetaEnv {
  readonly API_KEY: string
  readonly PUBLIC_APP_ID: string
  readonly PUBLIC_ENVIRONMENT: string
  readonly PUBLIC_RECAPTCHA_KEY: string
  readonly PUBLIC_TURNSTILE_SITE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
