export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    'nuxt-studio',
    'nuxt-og-image'
  ],
  devtools: { enabled: false },
  telemetry: false,
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-01-14',
  mdc: {
    highlight: {
      noApiRoute: false
    }
  },
  fonts: {
    families: [
      { name: 'Finlandica', provider: 'bunny' },
      { name: 'Arima Madurai', provider: 'bunny' },
      { name: 'Chivo Mono', provider: 'bunny' },
      { name: 'Caveat', provider: 'bunny' }
    ]
  },
  icon: {
    provider: 'iconify',
    customCollections: [{
      prefix: 'custom',
      dir: './app/assets/custom'
    }],
    clientBundle: {
      scan: true,
      includeCustomCollections: true
    }
  }
})