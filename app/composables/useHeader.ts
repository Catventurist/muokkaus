export function useHeader() {
  const route = useRoute()

  const desktopLinks = computed(() => [{
    label: 'Docs',
    icon: 'i-lucide-book-a',
    to: '/docs/getting-started',
    active: route.path.startsWith('/docs/')
  }, {
    label: 'Guides',
    icon: 'i-lucide-book-open',
    to: '/guides',
    active: route.path.startsWith('/guides')
  }, {
    label: 'Blog',
    icon: 'i-lucide-newspaper',
    to: '/blog',
    active: route.path.startsWith('/blog')
  }, {
    label: 'Authors',
    icon: 'i-lucide-users',
    to: '/authors',
    active: route.path.startsWith('/authors')
  }, {
    label: 'Changelog',
    icon: 'i-lucide-list',
    to: '/changelog',
    active: route.path.startsWith('/changelog/')
  }])

  const mobileLinks = computed(() => [{
    label: 'Get Started',
    icon: 'i-lucide-square-play',
    to: '/docs/getting-started',
    active: route.path.startsWith('/docs/getting-started')
  }, {
    label: 'Guides',
    icon: 'i-lucide-newspaper',
    to: '/guides',
    active: route.path.startsWith('/guides')
  }, {
    label: 'Blog',
    icon: 'i-lucide-newspaper',
    to: '/blog',
    active: route.path.startsWith('/blog')
  }, {
    label: 'Components',
    icon: 'i-lucide-square-code',
    to: '/docs/components',
    active: route.path.startsWith('/docs/components')
  }, {
    label: 'Authors',
    icon: 'i-lucide-users',
    to: '/authors',
    active: route.path.startsWith('/authors')
  }, {
    label: 'Changelog',
    icon: 'i-lucide-rocket',
    to: '/changelog',
    active: route.path.startsWith('/changelog/')
  }, {
    label: 'GitHub',
    to: 'https://github.com/Catventurist/muokkaus',
    icon: 'i-simple-icons-github',
    target: '_blank'
  }])

  return {
    desktopLinks,
    mobileLinks
  }
}
