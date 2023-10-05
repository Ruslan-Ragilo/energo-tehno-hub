<script setup lang="ts">
interface Slide {
  id: string | number;
  img: string;
  title: string;
  link: string;
}

defineProps<{ slides: Slide[] }>();

const activeID = ref<number | string>(1);
</script>

<template>
  <Swiper class="swiper-video" :slides-per-view="'auto'">
    <SwiperSlide
      v-for="slide in slides"
      :key="slide.id"
      :class="[
        'swiper-slide-video',
        {
          active: String(slide.id) === String(activeID),
        },
      ]"
      @mouseover="activeID = slide.id"
      @click="activeID = slide.id"
    >
      <FoundersVideoSliderCard
        :slide="slide"
        :class="{
          active: String(slide.id) === String(activeID),
        }"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
@import "./VideoSlider.scss";
</style>
