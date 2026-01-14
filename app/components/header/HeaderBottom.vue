<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { mapContentNavigation } from '@nuxt/ui/utils/content'

const route = useRoute()

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const items = computed(() => mapContentNavigation(navigation?.value.map(item => ({ ...item, children: undefined })) ?? [])?.map(item => ({
  ...item,
  active: route.path.startsWith(item.to as string)
})))
</script>

<template>
  <USeparator class="hidden lg:flex" />
  <UContainer class="hidden lg:flex w-3/5 items-center justify-center">
    <UNavigationMenu :items="items" variant="pill" highlight class="-mb-p mx-2 rounded-full bg-default/90 backdrop-blur-md" />
  </UContainer>
</template>
