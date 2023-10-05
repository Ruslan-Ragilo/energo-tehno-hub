<script setup lang="ts">
export interface Founder {
  id: string | number;
  name: string;
  img: string;
  link: string;
  position: string;
  title: string;
  text: string;
  experts: string[];
}

interface Founders {
  founders: Founder[];
}

defineProps<Founders>();
</script>

<template>
  <div class="slider-wrapper">
    <Swiper class="swiper" :slides-per-view="'auto'" :space-between="20">
      <FoundersSliderControls />
      <SwiperSlide
        v-for="founder in founders"
        :key="founder.id"
        class="swiper-slide"
      >
        <FoundersSliderCard :founder="founder" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss">
@import "./Slider.scss";
</style>
