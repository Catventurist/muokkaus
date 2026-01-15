<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('blog', () => queryCollection('blog').first())
const { data: posts } = await useAsyncData(route.path, () => queryCollection('posts').all())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImageComponent('Docs')
</script>

<template>
  <UContainer v-if="page">
    <UPageHero :ui="{ container: 'relative py-10 sm:py-16 lg:py-24' }">
      <LazyStarsBg />
      <div aria-hidden="true" class="absolute z-[-1] border-x border-default inset-0 mx-4 sm:mx-6 lg:mx-8" />
      <template #title>
        <MDC :value="page.hero.title" unwrap="p" cache-key="blog-hero-title" />
      </template>
      <template #description>
        <MDC :value="page.hero.description" unwrap="p" cache-key="blog-hero-description" />
      </template>
    </UPageHero>
    <UPageBody>
      <UBlogPosts>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
          :authors="post.authors"
          :badge="post.badge"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          variant="naked"
          :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UBlogPosts>
    </UPageBody>
  </UContainer>
</template>
