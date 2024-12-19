<script setup lang="ts">
import { type Content } from "@prismicio/client";
const containerRef = ref(null);
const swiper = useSwiper(containerRef);

defineProps(
  getSliceComponentProps<Content.HeroBannerSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="hero-banner-wrapper"
  >
    <swiper-container
      ref="containerRef"
      class="hero-banner-swiper"
      :loop="true"
      :autoplay="true"
      :speed="1000"
    >
      <swiper-slide>
        <div class="hero-banner-slide">
          <PrismicImage
            :field="slice.primary.hero_image_1"
            class="hero-banner-img"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="hero-banner-slide">
          <PrismicImage
            :field="slice.primary.hero_image_2"
            class="hero-banner-img"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="hero-banner-slide">
          <PrismicImage
            :field="slice.primary.hero_image_3"
            class="hero-banner-img"
          />
        </div>
      </swiper-slide>
    </swiper-container>
    <div class="hero-banner-swiper-btn d-flex justify-content-between align-items-center">
      <div class="btn-swiper btn-prev" @click="swiper.prev()">
        <p class="description-text font-italic">Prev</p>
      </div>
      <div class="btn-swiper btn-next" @click="swiper.next()">
        <p class="description-text font-italic">Next</p>
      </div>
    </div>
  </section>
</template>
