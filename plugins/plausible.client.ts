// TypeScript declaration for Plausible
interface PlausibleFunction {
  (event: string, options?: Record<string, any>): void
  q?: Array<any[]>
  o?: Record<string, any>
  init?: (options?: Record<string, any>) => void
}

// Extend Window interface
declare global {
  interface Window {
    plausible?: PlausibleFunction
  }
}

export default defineNuxtPlugin(() => {
  // Initialize Plausible
  if (typeof window !== 'undefined') {
    // Ensure TypeScript knows plausible exists on window
    if (!('plausible' in window)) {
      window.plausible = function () {
        (window.plausible!.q = window.plausible!.q || []).push(Array.from(arguments))
      } as PlausibleFunction
    }

    const plausible = window.plausible
    if (plausible && !plausible.init) {
      plausible.init = function (i?: Record<string, any>) {
        if (plausible) {
          plausible.o = i || {}
        }
      }
    }

    if (plausible && plausible.init) {
      plausible.init()
    }
  }
})

