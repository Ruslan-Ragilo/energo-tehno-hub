<script setup lang="ts">
interface Slide {
  img: string;
  title: string;
  link: string;
}

defineProps<{ slide: Slide }>();

const store = useModalYoutubeStore();
</script>

<template>
  <div
    class="video-card"
    :style="{
      backgroundImage: `url(${slide.img})`,
    }"
  >
    <div class="description">
      <CommonText
        size="ml"
        theme="white"
        :text="slide.title"
        className="desciption-text"
      />
      <div class="play-button" @click="store.openModal(slide.link)">
        <CommonPlayButton :isPlaying="store.isModalOpen" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./Card.scss";
</style>
