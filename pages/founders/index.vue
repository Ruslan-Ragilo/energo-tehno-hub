<script setup lang="ts">
const mockCards = [
  {
    text: "Имеют прямой выход на бизнес-заказчиков в нефтегазовой отрасли",
  },
  {
    text: "Работают с трекерами, менторами и экспертами отрасли",
  },
  {
    text: "Пилотируют технологии на реальных промышленных объектах энергетического сектора",
  },
  {
    text: "Привлекают государственные и частные инвестиции на первых стадиях развития стартапа",
  },
];
</script>

<template>
  <div class="container">
    <section class="hero-wrapper">
      <FoundersHero />
      <!-- <FoundersVideoSlider /> -->
    </section>
    <section class="section-border section-margin">
      <CommonSectionHeader headingText="Фаундеры «Энерготехнохаба Петербург»" />
      <div class="cards-wrapper">
        <FoundersCard
          v-for="(card, index) in mockCards"
          :key="card.text"
          :text="card.text"
          :index="index"
          :isFirst="index === 0"
          :isLast="index + 1 === mockCards.length && (index + 1) % 2 === 0"
        />
      </div>
    </section>
    <section class="section-margin">
      <FoundersBanner />
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
