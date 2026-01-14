import { themeIcons } from '../utils/theme'

export function useTheme() {
  const appConfig = useAppConfig()
  const colorMode = useColorMode()
  const neutral = computed({
    get() {
      return appConfig.ui.colors.neutral
    },
    set(option) {
      appConfig.ui.colors.neutral = option
      window.localStorage.setItem('nuxt-ui-neutral', appConfig.ui.colors.neutral)
    }
  })

  const primary = computed({
    get() {
      return appConfig.ui.colors.primary
    },
    set(option) {
      appConfig.ui.colors.primary = option
      window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.colors.primary)
      setBlackAsPrimary(false)
    }
  })

  const radiuses = [0, 0.125, 0.25, 0.375, 0.5]
  const radius = computed({
    get() {
      return appConfig.theme.radius
    },
    set(option) {
      appConfig.theme.radius = option
      window.localStorage.setItem('nuxt-ui-radius', String(appConfig.theme.radius))
    }
  })

  const fonts = ['Finlandica', 'Arima Madurai', 'Chivo Mono', 'Caveat']
  const font = computed({
    get() {
      return appConfig.theme.font
    },
    set(option) {
      appConfig.theme.font = option
      window.localStorage.setItem('nuxt-ui-font', appConfig.theme.font)
    }
  })

  const icons = [{
    label: 'Lucide',
    icon: 'i-lucide-feather',
    value: 'lucide'
  }, {
    label: 'Tabler',
    icon: 'i-tabler-brand-tabler',
    value: 'tabler'
  }]
  const icon = computed({
    get() {
      return appConfig.theme.icons
    },
    set(option) {
      appConfig.theme.icons = option
      appConfig.ui.icons = themeIcons[option as keyof typeof themeIcons] as never
      window.localStorage.setItem('nuxt-ui-icons', appConfig.theme.icons)
    }
  })

  const mode = computed({
    get() {
      return colorMode.value
    },
    set(option) {
      colorMode.preference = option
    }
  })

  function setBlackAsPrimary(value: boolean) {
    appConfig.theme.blackAsPrimary = value
    window.localStorage.setItem('nuxt-ui-black-as-primary', String(value))
  }

  const hasCSSChanges = computed(() => {
    return appConfig.theme.radius !== 0.25
      || appConfig.theme.blackAsPrimary
      || appConfig.theme.font !== 'Finlandica'
  })

  const hasAppConfigChanges = computed(() => {
    return appConfig.ui.colors.primary !== 'purple'
      || appConfig.ui.colors.neutral !== 'neutral'
      || appConfig.theme.icons !== 'lucide'
  })

  function exportCSS(): string {
    const lines = [
      '@import "tailwindcss";',
      '@import "@nuxt/ui";'
    ]

    if (appConfig.theme.font !== 'Finlandica') {
      lines.push('', '@theme {', `  --font-sans: '${appConfig.theme.font}', sans-serif;`, '}')
    }

    const rootLines: string[] = []
    if (appConfig.theme.radius !== 0.25) {
      rootLines.push(`  --ui-radius: ${appConfig.theme.radius}rem;`)
    }
    if (appConfig.theme.blackAsPrimary) {
      rootLines.push('  --ui-primary: black;')
    }

    if (rootLines.length) {
      lines.push('', ':root {', ...rootLines, '}')
    }

    if (appConfig.theme.blackAsPrimary) {
      lines.push('', '.dark {', '  --ui-primary: white;', '}')
    }

    return lines.join('\n')
  }

  function exportAppConfig(): string {
    const config: Record<string, any> = {}

    if (appConfig.ui.colors.primary !== 'purple' || appConfig.ui.colors.neutral !== 'neutral') {
      config.ui = { colors: {} }
      if (appConfig.ui.colors.primary !== 'purple') {
        config.ui.colors.primary = appConfig.ui.colors.primary
      }
      if (appConfig.ui.colors.neutral !== 'neutral') {
        config.ui.colors.neutral = appConfig.ui.colors.neutral
      }
    }

    if (appConfig.theme.icons !== 'lucide') {
      const iconSet = appConfig.theme.icons
      const icons = themeIcons[iconSet as keyof typeof themeIcons]
      config.ui = config.ui || {}
      config.ui.icons = icons
    }

    const configString = JSON.stringify(config, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/"/g, '\'')

    return `export default defineAppConfig(${configString})`
  }

  function resetTheme() {
    appConfig.ui.colors.primary = 'purple'
    window.localStorage.removeItem('nuxt-ui-primary')

    appConfig.ui.colors.neutral = 'neutral'
    window.localStorage.removeItem('nuxt-ui-neutral')

    appConfig.theme.radius = 0.25
    window.localStorage.removeItem('nuxt-ui-radius')

    appConfig.theme.font = 'Finlandica'
    window.localStorage.removeItem('nuxt-ui-font')

    appConfig.theme.icons = 'lucide'
    appConfig.ui.icons = themeIcons.lucide as never
    window.localStorage.removeItem('nuxt-ui-icons')

    appConfig.theme.blackAsPrimary = false
    window.localStorage.removeItem('nuxt-ui-black-as-primary')
  }

  return {
    neutral,
    primary,
    setBlackAsPrimary,
    radiuses,
    radius,
    fonts,
    font,
    icon,
    icons,
    mode,
    hasCSSChanges,
    hasAppConfigChanges,
    exportCSS,
    exportAppConfig,
    resetTheme
  }
}
