<template>
  <SliceZone :slices="page?.data.slices ?? []" :components="components" />
</template>

<script setup lang="ts">
import { components } from "~/slices";
import { fetchLinks } from "~/utils/prismicFetchLinks";

const prismic = usePrismic();
const { data: page } = useAsyncData("index", () =>
  prismic.client.getByUID("page", "home", {
    fetchLinks,
  })
);

useSeoMeta({
  title: page.value?.data.meta_title ?? undefined,
  description: page.value?.data.meta_description ?? undefined,
  ogImage: prismic.asImageSrc(page.value?.data.meta_image) ?? undefined,
});
</script>
