

<template>
  <section class="section">
    <CommonSectionHeader
      heading-text="Экосистема возможностей"
      title-text="Станьте участником «Энерготехнохаба Петербург» и получи доступ к сервисам поддержки своего стартапа"
    >
      <div class="circle-button">
        <CommonButtonCircle
          type="link"
          to="/"
          text="Присоединиться"
        />
      </div>
    </CommonSectionHeader>
    <div class="wrapper-slider">
      <swiper
        :direction="'vertical'"
        :mousewheel="{
          forceToAxis: true,
          sensitivity: 4,
          thresholdDelta: 4,
          releaseOnEdges: true,
        }"
        :slides-per-view="1"
        :modules="modules"
        :on-scrollbar-drag-end="true"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(_, index) in 3"
          :key="index"
        >
          <div
            :class="['wrapper-card-desctop', `wrapper-card-desctop${index}`]"
          >
            <div class="card">
              <p class="top-index">
                {{ `(0${index +=1})` }}
              </p>
              <CommonText text="Открывайте бизнес при поддержке юристов, маркетологов и бизнес-аналитиков" />
            </div>
            <div class="card">
              <p class="top-index">
                {{ `(0${index +=1})` }}
              </p>
              <CommonText text="Открывайте бизнес при поддержке юристов, маркетологов и бизнес-аналитиков" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  // import required modules
  import { Mousewheel, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Mousewheel],
      };
    },
  };
</script>

<style lang="scss" scoped>
@import 'EcoSystem.scss';
</style>
