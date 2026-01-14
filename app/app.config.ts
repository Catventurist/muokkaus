export default defineAppConfig({
  ui: {
    colors: {
      primary: 'purple',
      neutral: 'neutral'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    },
    icons: {
      arrowDown: 'i-lucide-arrow-down',
      arrowLeft: 'i-lucide-arrow-left',
      arrowRight: 'i-lucide-arrow-right',
      arrowUp: 'i-lucide-arrow-up',
      caution: 'i-lucide-circle-alert',
      check: 'i-lucide-check',
      chevronDoubleLeft: 'i-lucide-chevrons-left',
      chevronDoubleRight: 'i-lucide-chevrons-right',
      chevronDown: 'i-lucide-chevron-down',
      chevronLeft: 'i-lucide-chevron-left',
      chevronRight: 'i-lucide-chevron-right',
      chevronUp: 'i-lucide-chevron-up',
      close: 'i-lucide-x',
      copy: 'i-lucide-copy',
      copyCheck: 'i-lucide-copy-check',
      dark: 'i-lucide-moon',
      drag: 'i-lucide-grip-vertical',
      ellipsis: 'i-lucide-ellipsis',
      error: 'i-lucide-circle-x',
      external: 'i-lucide-arrow-up-right',
      eye: 'i-lucide-eye',
      eyeOff: 'i-lucide-eye-off',
      file: 'i-lucide-file',
      folder: 'i-lucide-folder',
      folderOpen: 'i-lucide-folder-open',
      hash: 'i-lucide-hash',
      info: 'i-lucide-info',
      light: 'i-lucide-sun',
      loading: 'i-lucide-loader-circle',
      menu: 'i-lucide-menu',
      minus: 'i-lucide-minus',
      panelClose: 'i-lucide-panel-left-close',
      panelOpen: 'i-lucide-panel-left-open',
      plus: 'i-lucide-plus',
      reload: 'i-lucide-rotate-ccw',
      search: 'i-lucide-search',
      stop: 'i-lucide-square',
      success: 'i-lucide-circle-check',
      system: 'i-lucide-monitor',
      tip: 'i-lucide-lightbulb',
      upload: 'i-lucide-upload',
      warning: 'i-lucide-triangle-alert',
      logs: 'i-lucide-logs',
      book: 'i-lucide-book',
      help: 'i-lucide-circle-question-mark',
      map: 'i-lucide-map',
      notebook: 'i-lucide-notebook',
      bitcoin: 'i-lucide-bitcoin',
      about: 'i-lucide-badge-info',
      users: 'i-lucide-users',
      send: 'i-lucide-send',
      wrench: 'i-lucide-wrench',
      pages: 'i-lucide-book-open',
      login: 'i-lucide-log-in',
      signup: 'i-lucide-signature',
      swatch: 'i-lucide-swatch-book',
      helpcircle: 'i-lucide-help-circle',
      font: 'i-lucide-type',
      link: 'i-lucide-link',
      rocket: 'i-lucide-rocket'
    },
    prose: {
      codeIcon: {
        terminal: 'i-lucide-terminal',
        config: 'i-lucide-settings',
        package: 'i-lucide-package'
      }
    }
  },
  theme: {
    radius: 0.25,
    blackAsPrimary: false,
    icons: 'lucide',
    font: 'Finlandica'
  },
  header: {
    title: 'Syntytieto',
    to: '/',
    logo: {
      alt: 'Synty',
      light: '/logo-light.webp',
      dark: '/logo-dark.webp'
    },
    search: true,
    colorMode: true,
    theme: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Catventurist',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Catventurist • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Catventurist',
      'target': '_blank',
      'aria-label': 'Github'
    }, {
      'icon': 'i-custom-ecency',
      'to': 'https://ecency.com/@catventurist',
      'target': '_blank',
      'aria-label': 'Ecency'
    }, {
      'icon': 'i-simple-icons-gitlab',
      'to': 'https://gitlab.com/Catventurist',
      'target': '_blank',
      'aria-label': 'GitLab'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-templates/docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Nuxt UI',
        to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
        target: '_blank'
      }]
    }
  }
})
