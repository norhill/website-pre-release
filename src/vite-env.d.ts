/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY?: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'react-google-recaptcha' {
  interface ReCAPTCHAProps {
    sitekey: string
    theme?: 'light' | 'dark'
    size?: 'compact' | 'normal' | 'invisible'
  }
  const ReCAPTCHA: React.ComponentType<ReCAPTCHAProps>
  export default ReCAPTCHA
}

interface Window {
  __EXTERNAL_COMPONENTS__?: Record<string, React.ComponentType | (() => HTMLElement)>
  gtag?: (...args: unknown[]) => void
}

