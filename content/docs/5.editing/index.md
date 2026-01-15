---
title: Editing
description: Edit your Content.
seo:
  title: Nuxt Studio - Edit your Content
  description: Self-hosted, open-source CMS for Nuxt Content websites.
---

::u-page-hero
---
orientation: vertical
---
#title
Edit [Content]{.text-primary}.

#description
Visually adjust, manage media, and publish changes.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /docs/getting-started/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: i-simple-icons-github
  size: xl
  target: _blank
  to: https://github.com/Catventurist/muokkaus
  variant: outline
  ---
  Star on GitHub
  :::
::

::u-page-section
#title
Self-hosted CMS for your Content.

#features
  :::u-page-feature
  ---
  icon: i-lucide-pen-tool
  to: /docs/editing/content
  ---
  #title
  [Visual Editor]{.text-primary}

  #description
  **Notion-like** editing experience with MDC component support. Insert Vue components, edit props visually, and drag-and-drop content blocks.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-form-input
  to: /docs/editing/content#form-editor
  ---
  #title
  [Schema-based Forms]{.text-primary}

  #description
  **Auto-generated** forms for Frontmatter and YAML/JSON files based on your collection schema.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-image
  to: /docs/editing/medias
  ---
  #title
  [Media Library]{.text-primary}

  #description
  Centralized media management for your public directory. Browse folders, upload files, and insert images directly into your content.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-git-branch
  to: /docs/editing/git-providers
  ---
  #title
  [Git Integration]{.text-primary}

  #description
  Commit changes directly to GitHub or GitLab from your production site. Your CI/CD pipeline handles the rest automatically.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  to: /docs/editing/auth-providers
  ---
  #title
  [Flexible Authentication]{.text-primary}

  #description
  Secure access with GitHub, GitLab, or Google OAuth. Or implement your own auth flow with custom authentication utilities.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-eye
  to: /docs/editing/advanced
  ---
  #title
  [Real-time Preview]{.text-primary}

  #description
  See your changes instantly on your production website. Draft changes are stored locally in your browser until you're ready to publish.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-languages
  to: /docs/editing/setup#internationalization
  ---
  #title
  [Multi languages]{.text-primary}

  #description
  Full i18n support for the Studio interface. Available in English, French, German, Spanish, Japanese, Chinese, and tons of other languages.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-server
  to: /docs/getting-started/introduction
  ---
  #title
  [Self-hosted & Open Source]{.text-primary}

  #description
  Deploy on your own infrastructure with no external dependencies. Free forever under the MIT license.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-file-code
  to: /docs/editing/content#code-editor
  ---
  #title
  [Monaco Code Editor]{.text-primary}

  #description
  Full-featured code editor for Markdown, MDC syntax, YAML, and JSON files. Switch between visual and code modes anytime.
  :::
::
