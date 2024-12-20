<script setup lang="ts">
import { type Content } from "@prismicio/client";
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
      image: {
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
    class="section-card-grid"
  >
    <div class="card-grid-wrapper card-grid-big">
      <div
        v-for="card in products"
        :key="card.product.id"
        class="card-grid-product"
      >
        <NuxtLink
          :to="{ path: '/archive/' + card.product.data.uid }"
          class="card-product-link"
        >
          <div class="card-product-img-wrapper">
            <img
              class="card-product-img"
              :src="card.product.data.image.url"
              :alt="card.product.data.image.alt || 'Product Image'"
              v-if="card.product.data.image"
            />
          </div>
          <div class="card-product-info-wrapper">
            <h2
              class="description-text card-product-title"
              v-if="card.product.data.title"
            >
              {{ card.product.data.title }}
            </h2>
            <p
              class="description-text card-product-price"
              v-if="card.product.data.price"
            >
              € {{ formatPrice(card.product.data.price) }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
