<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="w-fit rounded-xl border border-muted bg-accented shadow-md overflow-hidden px-2 pb-2">
    <div class="flex justify-between items-center px-2 py-2 bg-accented border-accented border-b">
      <div class="flex items-center gap-2">
        <span class="size-3 bg-error rounded-full" />
        <span class="size-3 bg-warning rounded-full" />
        <span class="size-3 bg-success rounded-full" />
      </div>
      <div class="text-muted">
        {{ title }}
      </div>
    </div>
    <slot mdc-unwrap="p" />
  </div>
</template>
