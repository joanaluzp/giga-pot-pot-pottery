<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { useFormatPrice } from "~/composables/usePriceFormat";
const { formatPrice } = useFormatPrice();

const props = defineProps(
  getSliceComponentProps<Content.SingleProductSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const product = props.slice.primary.product as unknown as {
  data: {
    title: string;
    price: number;
    uid: string;
    image: {
      url: string;
      alt?: string;
    };
  };
};
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="section-single-product"
  >
    <div class="scale-hover-btn-wrapper single-product-btn">
      <NuxtLink to="javascript:history.back()" class="scale-hover-btn-link"
        ><p class="description-text">Close</p></NuxtLink
      >
    </div>
    <div class="single-product-img-wrapper">
      <img
        class="single-product-img"
        :src="product.data.image.url"
        :alt="product.data.image.alt || 'Product Image'"
        v-if="product.data.image"
      />
    </div>
    <div
      class="single-product-info-wrapper d-flex justify-content-between align-items-end"
    >
      <h2 class="description-text" v-if="product.data.title">
        {{ product.data.title }}
      </h2>
      <p class="description-text text-right" v-if="product.data.price">
        € {{ formatPrice(product.data.price) }}
      </p>
    </div>
  </section>
</template>
