<template>
  <div class="app-content">
    <main class="main">
      <NuxtPage />
    </main>
    <LazyFooter />
  </div>
</template>
<script setup>
const settings = useSettings();
const { asImageSrc } = usePrismic();

useSeoMeta({
  title: settings.value?.data.site_title,
  description: settings.value?.data.meta_description,
  ogImage: asImageSrc(settings.value?.data.og_image),
});
</script>
