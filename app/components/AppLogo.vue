<script setup lang="ts">
const { header } = useAppConfig()
</script>

<template>
  <UColorModeAvatar
    :dark="header.logo.dark"
    :light="header.logo.light"
    :alt="header.logo.alt"
  />
</template>
