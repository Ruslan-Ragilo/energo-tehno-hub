<!-- eslint-disable no-undef -->
<!-- eslint-disable vue/no-use-v-if-with-v-for -->


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
          v-if="widthSceen >= 600"
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
        <swiper-slide
          v-for="(_, i) in 6"
          v-else
          :key="i"
        >
          <div class="card">
            <p class="top-index">
              {{ `(0${i +=1})` }}
            </p>
            <CommonText text="Открывайте бизнес при поддержке юристов, маркетологов и бизнес-аналитиков" />
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
      // eslint-disable-next-line no-undef
      const widthSceen = ref(0);

      // eslint-disable-next-line no-undef
      onMounted(() => {
        widthSceen.value = window.innerWidth
      })

      return {
        modules: [Pagination, Mousewheel],
        widthSceen,
      };
    },
  };
</script>

<style lang="scss" scoped>
@import 'EcoSystem.scss';
</style>
