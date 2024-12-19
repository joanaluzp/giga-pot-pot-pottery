<script setup lang="ts">
import { type Content, type ContentRelationshipField } from "@prismicio/client";
import { getSliceComponentProps } from "@prismicio/vue";

const props = defineProps(
  getSliceComponentProps<Content.CardGridBigSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

/* interface Product {
    product: {
      id: string;
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
  }

  const products = props.slice.primary.card as unknown as Product[]; */
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
<!--     <div
      v-for="product in products"
      :key="product.product.id"
      class="product-item"
    >
      <img
        :src="product.product.data.image.url"
        :alt="product.product.data.image.alt || 'Product Image'"
      />

      <h2 class="product-title">{{ product.product.data.title }}</h2>

      <p class="product-price">Price: ${{ product.product.data.price }}</p>

      <NuxtLink :to="`/${product.product.data.uid}`" class="product-link">
        View Product
      </NuxtLink>
    </div> -->
  </section>
</template>
