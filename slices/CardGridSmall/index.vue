<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { useFormatPrice } from "~/composables/usePriceFormat";

const { formatPrice } = useFormatPrice();

const props = defineProps(
  getSliceComponentProps<Content.CardGridSmallSlice>([
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

const products = [
  ...(props.slice.primary.card_1 as Product[]),
  ...(props.slice.primary.card_2 as Product[]),
  ...(props.slice.primary.card_3 as Product[]),
];
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="section-card-grid"
  >
    <div class="card-grid-wrapper card-grid-small">
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
              :src="card.product.data.image_1.url"
              :alt="card.product.data.image_1.alt || 'Product Image'"
              v-if="card.product.data.image_1"
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
    <template v-for="item in slice.primary.button_link">
      <PrismicLink :field="item.link" v-if="item.link">
        <p class="description-text">{{ item.title }}</p>
      </PrismicLink>
    </template>
  </section>
</template>
