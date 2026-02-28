import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Norhill'
const BASE_URL = 'https://norhill.se'
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/norhill_logo_blue_120x42.png`

interface SeoProps {
  title: string
  description: string
  ogImage?: string
  ogType?: string
  noIndex?: boolean
  jsonLd?: Record<string, unknown>
}

function setMetaTag(property: string, content: string, isName = false) {
  const attr = isName ? 'name' : 'property'
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, property)
    document.head.appendChild(el)
  }
  el.content = content
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

const JSON_LD_ID = 'seo-jsonld'

export default function Seo({ title, description, ogImage, ogType = 'website', noIndex, jsonLd }: SeoProps) {
  const { pathname } = useLocation()
  const canonicalUrl = `${BASE_URL}${pathname}`
  const fullTitle = pathname === '/' ? `${SITE_NAME} – ${title}` : `${title} | ${SITE_NAME}`

  useEffect(() => {
    document.title = fullTitle

    setMetaTag('description', description, true)
    setMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow', true)

    setMetaTag('og:title', fullTitle)
    setMetaTag('og:description', description)
    setMetaTag('og:url', canonicalUrl)
    setMetaTag('og:type', ogType)
    setMetaTag('og:image', ogImage ?? DEFAULT_OG_IMAGE)
    setMetaTag('og:site_name', SITE_NAME)
    setMetaTag('og:locale', 'sv_SE')

    setMetaTag('twitter:card', 'summary_large_image', true)
    setMetaTag('twitter:title', fullTitle, true)
    setMetaTag('twitter:description', description, true)
    setMetaTag('twitter:image', ogImage ?? DEFAULT_OG_IMAGE, true)

    setLinkTag('canonical', canonicalUrl)

    let scriptEl = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script')
        scriptEl.id = JSON_LD_ID
        scriptEl.type = 'application/ld+json'
        document.head.appendChild(scriptEl)
      }
      scriptEl.textContent = JSON.stringify(jsonLd)
    } else {
      scriptEl?.remove()
    }

    return () => {
      document.getElementById(JSON_LD_ID)?.remove()
    }
  }, [fullTitle, description, canonicalUrl, ogType, ogImage, noIndex, jsonLd])

  return null
}

export { SITE_NAME, BASE_URL }
