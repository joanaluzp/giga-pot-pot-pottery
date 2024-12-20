<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { useFormatPrice } from "~/composables/usePriceFormat";

const { formatPrice } = useFormatPrice();

const containerRef = ref(null);
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
      image: {
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
    <!--MOBILE/TABLET-->

    <div class="card-grid-swiper d-xl-none">
      <swiper-container
        ref="containerRef"
        :loop="true"
        :speed="1000"
        :slides-per-view="1"
        :breakpoints="{ 576: { slidesPerView: 2 } }"
      >
        <swiper-slide v-for="card in products" :key="card.product.id">
          <div class="card-grid-product">
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
        </swiper-slide>
      </swiper-container>
    </div>

    <!--DESKTOP -->

    <div class="card-grid-wrapper card-grid-small d-none d-xl-grid">
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
    <template v-for="item in slice.primary.button_link">
      <div class="container scale-hover-btn-wrapper">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <PrismicLink
              :field="item.link"
              v-if="item.link"
              class="scale-hover-btn-link"
            >
              <p class="description-text text-center d-inline">
                {{ item.title }}
              </p>
            </PrismicLink>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>
