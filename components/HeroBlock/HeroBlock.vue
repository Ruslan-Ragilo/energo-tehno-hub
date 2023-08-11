<script setup>
import { useModalYoutubeStore } from "@/stores/modalYoutubeStore";

const store = useModalYoutubeStore();

// const handlePlayerClick = () => {
//   isPlaying.value = !isPlaying.value;
// };
</script>

<template>
  <div class="hero-wrapper">
    <div class="hero-left">
      <div class="hero-left-top">
        <h1 data-aos="fade-up" class="hero-title">
          Создай свой<br />
          бизнес в <br />энергетике
        </h1>
        <CommonButtonCircle
          data-aos="fade-up"
          data-aos-duration="1000"
          type="button"
          :onClick="openExperienceModal"
          text="Рассказать о себе"
        />
      </div>
      <div class="hero-left-bottom">
        <div class="card card-left">
          <nuxt-link to="/" class="card-link">
            <CommonLinkArrow color="#ffffff" />
          </nuxt-link>
        </div>
        <div class="card card-right">
          <div data-aos="fade-up" class="card-right-text">
            <p class="large-text">50+</p>
            <p class="small-text">
              менторов <br />
              и экспертов
            </p>
          </div>
          <CommonButtonCircle
            data-aos-duration="1000"
            data-aos="fade-up"
            type="link"
            to="/services"
            text="узнать больше"
            color="#fafafa"
          />
        </div>
      </div>
    </div>
    <div class="hero-right">
      <div class="description">
        <p class="text">
          «Место, где верят в твои идеи» с резидентами «Энерготехнохаба
          Петербург»
        </p>
        <div class="play-button" @click="store.openModal">
          <CommonPlayButton :isPlaying="store.isModalOpen" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "HeroBlock.scss";
</style>
