<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage transition="{
        name: 'bounce',
        mode: 'out-in'
      }" />
    </NuxtLayout>
    <NotificationContainer />
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>

<script setup>
const route = useRoute()

const title = ref('Nuxt 3 Blog')
useHead({
  meta: [{ name: 'og:title', content: `${route.meta.title} | Nuxt 3 Blog` }],
  title,
  titleTemplate: (title) => {
    return title ? `${title} - 首頁` : '首頁'
  }
})
</script>
