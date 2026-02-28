import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'

interface ComponentConfig {
  id: string
  name: string
  url: string
  description?: string
}

interface ExternalComponentLoaderProps {
  configUrl?: string
}

/**
 * ExternalComponentLoader - Loads and renders external React components seamlessly
 * 
 * This component supports loading external React components from remote URLs
 * without using iframes. Components are loaded as ES modules and rendered natively.
 * 
 * Usage:
 * 1. Place component files in a public CDN or server
 * 2. Components must be exported as default React components
 * 3. Components should be bundled as ES modules
 * 4. Configure component URLs in the config
 */
export default function ExternalComponentLoader({ 
  configUrl = '/external-components.json' 
}: ExternalComponentLoaderProps) {
  const [components, setComponents] = useState<ComponentConfig[]>([])
  const [loadedComponents, setLoadedComponents] = useState<Map<string, React.ComponentType>>(new Map())
  const [loadingStates, setLoadingStates] = useState<Map<string, boolean>>(new Map())
  const [errorStates, setErrorStates] = useState<Map<string, string>>(new Map())
  const [activeComponent, setActiveComponent] = useState<string | null>(null)

  // Load component configuration
  useEffect(() => {
    const loadConfig = async () => {
      try {
        // Try to load from config file, fallback to empty array
        const response = await fetch(configUrl)
        if (response.ok) {
          const config = await response.json()
          setComponents(config.components || [])
        } else {
          // Default example components for demonstration
          setComponents([
            {
              id: 'capability-dashboard',
              name: 'Förmågedashboard',
              url: '/components/capability-dashboard.js',
              description: 'Interaktiv dashboard för att visualisera affärsmässiga förmågor',
            },
            {
              id: 'maturity-assessment',
              name: 'Mognadsbedömning',
              url: '/components/maturity-assessment.js',
              description: 'Verktyg för att bedöma mognadsnivåer av affärsmässiga förmågor',
            },
          ])
        }
      } catch (error) {
        console.warn('Could not load component config, using defaults:', error)
        // Use default components
        setComponents([
          {
            id: 'capability-dashboard',
            name: 'Förmågedashboard',
            url: '/components/capability-dashboard.js',
            description: 'Interaktiv dashboard för att visualisera affärsmässiga förmågor',
          },
        ])
      }
    }

    loadConfig()
  }, [configUrl])

  // Load component via script tag and global registry
  const loadComponentViaScript = async (component: ComponentConfig) => {
    if (loadedComponents.has(component.id)) {
      setActiveComponent(component.id)
      return
    }

    setLoadingStates(prev => new Map(prev).set(component.id, true))
    setErrorStates(prev => new Map(prev).set(component.id, ''))

    return new Promise<void>((resolve, reject) => {
      // Check if script already loaded
      const existingScript = document.querySelector(`script[data-component="${component.id}"]`)
      if (existingScript) {
        // Component already loaded, get from global registry
        const globalRegistry = (window as any).__EXTERNAL_COMPONENTS__ || {}
        const Component = globalRegistry[component.id]
        if (Component) {
          setLoadedComponents(prev => new Map(prev).set(component.id, Component))
          setActiveComponent(component.id)
          setLoadingStates(prev => new Map(prev).set(component.id, false))
          resolve()
          return
        }
      }

      // Create script tag
      const script = document.createElement('script')
      script.type = 'module'
      script.src = component.url
      script.setAttribute('data-component', component.id)
      
      script.onload = () => {
        // Component should register itself in global registry
        const globalRegistry = (window as any).__EXTERNAL_COMPONENTS__ || {}
        const Component = globalRegistry[component.id]
        
        if (Component) {
          setLoadedComponents(prev => new Map(prev).set(component.id, Component))
          setActiveComponent(component.id)
          setLoadingStates(prev => new Map(prev).set(component.id, false))
          resolve()
        } else {
          const error = 'Component not found in global registry after loading'
          setErrorStates(prev => new Map(prev).set(component.id, error))
          setLoadingStates(prev => new Map(prev).set(component.id, false))
          reject(new Error(error))
        }
      }

      script.onerror = () => {
        const error = 'Failed to load component script'
        setErrorStates(prev => new Map(prev).set(component.id, error))
        setLoadingStates(prev => new Map(prev).set(component.id, false))
        reject(new Error(error))
      }

      document.head.appendChild(script)
    })
  }

  if (components.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-dark-gray">
          Inga externa komponenter konfigurerade ännu.
        </p>
        <p className="text-sm text-dark-gray mt-2">
          Lägg till komponenter i <code className="bg-light-gray px-2 py-1 rounded">/public/external-components.json</code>
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Component Selector */}
      <div className="flex flex-wrap gap-4 justify-center">
        {components.map((component) => (
          <motion.button
            key={component.id}
            onClick={() => loadComponentViaScript(component)}
            disabled={loadingStates.get(component.id) || false}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-heading font-medium transition-all duration-300 ${
              activeComponent === component.id
                ? 'bg-nordic-blue text-white shadow-lg'
                : 'bg-white text-nordic-blue border-2 border-nordic-blue hover:bg-nordic-blue hover:text-white'
            } ${loadingStates.get(component.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loadingStates.get(component.id) ? 'Laddar...' : component.name}
          </motion.button>
        ))}
      </div>

      {/* Component Render Area */}
      <div className="min-h-[400px]">
        {components.map((component) => {
          const isLoading = loadingStates.get(component.id)
          const error = errorStates.get(component.id)
          const LoadedComponent = loadedComponents.get(component.id)
          const isActive = activeComponent === component.id

          if (!isActive && !isLoading && !error) return null

          return (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="card bg-white"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-heading font-bold text-nordic-blue mb-2">
                  {component.name}
                </h3>
                {component.description && (
                  <p className="text-dark-gray">{component.description}</p>
                )}
              </div>

              {isLoading && (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nordic-blue"></div>
                  <span className="ml-4 text-dark-gray">Laddar komponent...</span>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-medium">Fel vid laddning</p>
                  <p className="text-red-600 text-sm mt-1">{error}</p>
                  <p className="text-sm text-dark-gray mt-4">
                    För att lägga till en extern komponent:
                  </p>
                  <ol className="list-decimal list-inside text-sm text-dark-gray mt-2 space-y-1">
                    <li>Skapa en React-komponent och exportera den som default</li>
                    <li>Bundla komponenten som ES-modul</li>
                    <li>Placera filen på en tillgänglig URL</li>
                    <li>Registrera komponenten i global registry: <code className="bg-light-gray px-1 rounded">window.__EXTERNAL_COMPONENTS__[id] = Component</code></li>
                    <li>Lägg till konfiguration i <code className="bg-light-gray px-1 rounded">external-components.json</code></li>
                  </ol>
                </div>
              )}

              {LoadedComponent && !isLoading && !error && (
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center py-12">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nordic-blue"></div>
                    </div>
                  }
                >
                  <div className="border-2 border-light-gray rounded-lg p-6">
                    <LoadedComponent />
                  </div>
                </Suspense>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Instructions */}
      <div className="bg-light-gray rounded-lg p-6">
        <h4 className="font-heading font-semibold text-nordic-blue mb-3">
          Så här lägger du till externa komponenter:
        </h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-gray">
          <li>Skapa en React-komponent och exportera den som default export</li>
          <li>Bundla komponenten som ES-modul (t.ex. med Vite, Webpack eller Rollup)</li>
          <li>Placera den bundlade filen på en tillgänglig URL (CDN, server, etc.)</li>
          <li>Registrera komponenten i global registry när den laddas:
            <pre className="bg-white p-2 rounded mt-2 text-sm overflow-x-auto">
{`window.__EXTERNAL_COMPONENTS__ = window.__EXTERNAL_COMPONENTS__ || {};
window.__EXTERNAL_COMPONENTS__['component-id'] = YourComponent;`}
            </pre>
          </li>
          <li>Lägg till konfiguration i <code className="bg-white px-1 rounded">/public/external-components.json</code></li>
        </ol>
      </div>
    </div>
  )
}

