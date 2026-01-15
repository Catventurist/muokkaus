import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { z } from 'zod/v4'

const Avatar = z.object({
  src: property(z.string()).editor({ input: 'media' }),
  alt: z.string().optional()
})

const Button = z.object({
  label: z.string(),
  icon: property(z.string()).editor({ input: 'icon' }),
  avatar: Avatar.optional(),
  leadingIcon: z.string().optional(),
  trailingIcon: z.string().optional(),
  to: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  id: z.string().optional(),
  class: z.string().optional()
})

const PageHero = z.object({
  title: z.string(),
  description: z.string(),
  links: z.array(Button).optional()
})

const Page = z.object({
  title: z.string(),
  description: z.string(),
  hero: PageHero
})

const Authors = z.object({
  name: z.string(),
  avatar: Avatar,
  to: z.string(),
  username: z.string(),
  description: property(z.string()).editor({ input: 'textarea' }),
  role: z.enum(['creator', 'maintainer', 'contributor']).default('contributor'),
  order: z.number().default(0),
  birthDate: z.date(),
  lastCommitAt: z.date(),
  icon: property(z.string()).editor({ input: 'icon', iconLibraries: ['lucide'] }),
  isOpenSourceLover: z.boolean().default(true),
  modules: z.array(z.string())
})

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    docs: defineCollection({
      type: 'page',
      source: 'docs/**/*',
      schema: z.object({
        category: z.enum(['layout', 'form', 'element', 'navigation', 'data', 'overlay', 'dashboard', 'page', 'chat', 'editor', 'color-mode', 'i18n']).optional(),
        navigation: z.object({
          title: z.string().optional()
        }),
        links: z.array(Button)
      })
    }),
    guide: defineCollection({
      type: 'page',
      source: 'guides.yml',
      schema: Page
    }),
    guides: defineCollection({
      type: 'page',
      source: [{
        include: 'guides/**/*'
      }],
      schema: z.object({
        image: property(z.string()).editor({ input: 'media' }),
        date: z.date(),
        authors: z.array(z.object({
          name: z.string(),
          avatar: Avatar.optional(),
          to: z.string().optional()
        })).optional()
      })
    }),
    blog: defineCollection({
      source: 'blog.yml',
      type: 'page',
      schema: Page
    }),
    posts: defineCollection({
      source: 'blog/**/*',
      type: 'page',
      schema: z.object({
        image: z.object({ src: property(z.string()).editor({ input: 'media' }) }),
        authors: z.array(
          z.object({
            name: z.string().nonempty(),
            to: z.string().nonempty(),
            avatar: z.object({ src: property(z.string()).editor({ input: 'media' }) })
          })
        ),
        date: z.date(),
        badge: z.object({ label: z.string().nonempty() })
      })
    }),
    changelog: defineCollection({
      source: 'changelog.yml',
      type: 'page',
      schema: Page
    }),
    versions: defineCollection({
      source: 'changelog/**/*',
      type: 'page',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string(),
        date: z.date(),
        image: property(z.string()).editor({ input: 'media' })
      })
    }),
    aut: defineCollection({
      source: {
        include: 'authors.yml'
      },
      type: 'page',
      schema: Page
    }),
    authors: defineCollection({
      type: 'data',
      source: {
        include: 'authors/**/*'
      },
      schema: Authors
    })
  }
})
