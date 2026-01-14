import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  async scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 64
      }
    }
    if (to === from) {
      return {
        left: 0,
        top: 0,
        behavior: 'smooth'
      }
    }
    return savedPosition || { top: 0, behavior: 'smooth' }
  }
}
