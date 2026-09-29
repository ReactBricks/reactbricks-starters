'use client'

import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import {
  createContext,
  useCallback,
  useContext,
  useId,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react'
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3'

interface CaptchaContextValue {
  executeCaptcha?: (action: string) => Promise<string>
}

const CaptchaContext = createContext<CaptchaContextValue>({})

export const useCaptcha = () => useContext(CaptchaContext)

interface CaptchaProviderProps extends PropsWithChildren {
  reCaptchaKey: string
  turnstileSiteKey: string
}

const GoogleCaptchaProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  return (
    <CaptchaContext.Provider value={{ executeCaptcha: executeRecaptcha }}>
      {children}
    </CaptchaContext.Provider>
  )
}

const TurnstileCaptchaProvider: React.FC<
  PropsWithChildren<{ siteKey: string }>
> = ({ siteKey, children }) => {
  const id = useId()
  const turnstileRef = useRef<TurnstileInstance>(null)
  const [isReady, setIsReady] = useState(false)

  const executeCaptcha = useCallback(async () => {
    if (!isReady || !turnstileRef.current) {
      throw new Error('Cloudflare Turnstile is not available')
    }

    turnstileRef.current.reset()
    turnstileRef.current.execute()

    return turnstileRef.current.getResponsePromise()
  }, [isReady])

  return (
    <CaptchaContext.Provider value={{ executeCaptcha }}>
      {children}
      <Turnstile
        ref={turnstileRef}
        id={id}
        siteKey={siteKey}
        onWidgetLoad={() => setIsReady(true)}
        options={{
          action: 'form_submit',
          appearance: 'interaction-only',
          execution: 'execute',
          responseField: false,
        }}
      />
    </CaptchaContext.Provider>
  )
}

const CaptchaProvider: React.FC<CaptchaProviderProps> = ({
  reCaptchaKey,
  turnstileSiteKey,
  children,
}) => {
  if (turnstileSiteKey) {
    return (
      <TurnstileCaptchaProvider siteKey={turnstileSiteKey}>
        {children}
      </TurnstileCaptchaProvider>
    )
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <GoogleCaptchaProvider>{children}</GoogleCaptchaProvider>
    </GoogleReCaptchaProvider>
  )
}

export default CaptchaProvider
