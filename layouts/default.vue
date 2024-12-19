<template>
  <div class="app-content">
    <main class="main">
      <NuxtPage />
    </main>
    <LazyFooter v-if="!isProductPage" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const settings = useSettings();
const { asImageSrc } = usePrismic();
const route = useRoute();
const isProductPage = /^\/archive\/[^/]+$/.test(route.path);

useSeoMeta({
  title: settings.value?.data.site_title,
  description: settings.value?.data.meta_description,
  ogImage: asImageSrc(settings.value?.data.meta_image),
});
</script>
