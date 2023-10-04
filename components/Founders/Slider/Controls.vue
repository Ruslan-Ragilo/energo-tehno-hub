<script setup>
const swiper = useSwiper();
</script>

<template>
  <div class="wrapper-btn">
    <button class="swiper-button-prev" @click="swiper.slidePrev()">
      <CommonChevron class="chevron" />
    </button>
    <button class="swiper-button-next" @click="swiper.slideNext()">
      <CommonChevron class="chevron" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "./Controls.scss";
</style>
