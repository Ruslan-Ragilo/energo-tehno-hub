<script setup lang="ts">
interface Slide {
  img: string;
  title: string;
  link: string;
}

defineProps<{ slide: Slide }>();
</script>

<template>
  <div
    class="video-card"
    :style="{
      backgroundImage: `url(${slide.img})`,
    }"
  ></div>
</template>

<style lang="scss" scoped>
@import "./Card.scss";
</style>
