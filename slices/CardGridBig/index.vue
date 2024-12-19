<script setup lang="ts">
import { type Content, type ContentRelationshipField } from "@prismicio/client";
import { getSliceComponentProps } from "@prismicio/vue";
import { useFormatPrice } from "~/composables/usePriceFormat";

const { formatPrice } = useFormatPrice();

const props = defineProps(
  getSliceComponentProps<Content.CardGridBigSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

interface Product {
  product: {
    id: string;
    data: {
      title: string;
      price: number;
      uid: string;
      image_1: {
        url: string;
        alt?: string;
      };
      image_2: {
        url: string;
        alt?: string;
      };
      image_3: {
        url: string;
        alt?: string;
      };
    };
  };
}

const products = props.slice.primary.card as unknown as Product[];
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="card-grid-wrapper card-grid-big"
  >
    <div
      v-for="product in products"
      :key="product.product.id"
      class="card-grid-product"
    >
      <NuxtLink
        :to="{ path: '/archive/' + product.product.data.uid }"
        class="card-product-link"
      >
        <div class="card-product-img-wrapper">
          <img
            class="card-product-img"
            :src="product.product.data.image_1.url"
            :alt="product.product.data.image_1.alt || 'Product Image'"
            v-if="product.product.data.image_1"
          />
        </div>
        <div class="card-product-info-wrapper">
          <h2
            class="description-text card-product-title"
            v-if="product.product.data.title"
          >
            {{ product.product.data.title }}
          </h2>
          <p
            class="description-text card-product-price"
            v-if="product.product.data.price"
          >
            € {{ formatPrice(product.product.data.price) }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
