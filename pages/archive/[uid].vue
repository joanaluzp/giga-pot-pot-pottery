<template>
  <SliceZone :slices="page?.data.slices ?? []" :components="components" />
</template>

<script setup lang="ts">
import { components } from "~/slices";
import { fetchLinks } from "~/utils/prismicFetchLinks";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(route.params.uid as string, () =>
  prismic.client.getByUID("product", route.params.uid as string, {
    fetchLinks,
  })
);

useSeoMeta({
  title: page.value?.data.meta_title ?? undefined,
  description: page.value?.data.meta_description ?? undefined,
  ogImage: prismic.asImageSrc(page.value?.data.meta_image) ?? undefined,
});
</script>
