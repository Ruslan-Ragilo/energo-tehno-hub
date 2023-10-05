<script setup lang="ts">
interface Slide {
  id: string | number;
  img: string;
  title: string;
  link: string;
}

defineProps<{ slides: Slide[] }>();

const hoverId = ref<number | string>(1);
</script>

<template>
  <Swiper class="swiper-video" :slides-per-view="'auto'" :space-between="20">
    <SwiperSlide
      v-for="slide in slides"
      :key="slide.id"
      :class="[
        'swiper-slide-video',
        {
          active: String(slide.id) === String(hoverId),
        },
      ]"
      @mouseover="hoverId = slide.id"
      @mouseleave="hoverId = 1"
    >
      <FoundersVideoSliderCard :slide="slide" />
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
@import "./VideoSlider.scss";
</style>
