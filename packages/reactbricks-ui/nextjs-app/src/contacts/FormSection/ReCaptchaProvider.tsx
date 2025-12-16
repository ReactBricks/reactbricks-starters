'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export interface ReCaptchaProviderProps {
  reCaptchaKey: string
  children: any
}

const ReCaptchaProvider: React.FC<ReCaptchaProviderProps> = ({
  reCaptchaKey,
  children,
}) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      {children}
    </GoogleReCaptchaProvider>
  )
}

export default ReCaptchaProvider
