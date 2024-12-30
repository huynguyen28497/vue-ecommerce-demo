<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const { persistFromLocalStorage } = useMainStore()
definePageMeta({
  middleware: 'auth'
})
watch(persistFromLocalStorage, () => {
  persistFromLocalStorage()
})
</script>