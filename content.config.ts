import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { z } from 'zod/v4'

const Avatar = z.object({
  src: property(z.string()).editor({ input: 'media' }),
  alt: z.string().optional()
})

const Button = z.object({
  label: z.string(),
  icon: z.string().optional(),
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
    blog: defineCollection({
      type: 'page',
      source: 'blog.yml',
      schema: Page
    }),
    posts: defineCollection({
      type: 'page',
      source: [{
        include: 'blog/**/*'
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
    changelog: defineCollection({
      source: {
        include: 'changelog.yml'
      },
      type: 'page'
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
    })
  }
})
