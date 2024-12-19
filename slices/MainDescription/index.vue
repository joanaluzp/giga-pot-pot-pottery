<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.MainDescriptionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="main-description-wrapper d-flex flex-column"
  >
    <div class="container">
      <div class="col-12">
        <h1 class="description-text text-center">
          {{ slice.primary.title }}
        </h1>
        <h2 class="description-text text-center grey">
          {{ slice.primary.description }}
        </h2>
      </div>
    </div>
  </div>
</template>
