<template>
    <div class="slice-zone single-product">
      <SliceZone :slices="page?.data.slices ?? []" :components="components" />
    </div>
</template>

<script setup lang="ts">
import { components } from "~/slices";
import { fetchLinks } from "~/utils/prismicFetchLinks";
import { ref, watch } from "vue";
import { useSeoMeta } from "@unhead/vue";

const settings = useSettings();
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(route.params.uid as string, () =>
  prismic.client.getByUID("product", route.params.uid as string, {
    fetchLinks,
  })
);

definePageMeta({
  middleware: ['transition'],
});

/*****WATCH SEO ROUTE*****/
watch(
  () => page.value,
  () => {
    if (page.value) {
      const metaTitle = page.value?.data.meta_title;
      const metaDescription = page.value?.data.meta_description;
      const metaImage = prismic.asImageSrc(page.value?.data.meta_image);

      useSeoMeta({
        title: metaTitle
          ? `${metaTitle} | ${settings.value?.data.site_title}`
          : settings.value?.data.site_title,
        description: metaDescription ?? settings.value?.data.meta_description,
        ogImage: metaImage ?? undefined,
      });
    }
  },
  { immediate: true }
);
</script>
