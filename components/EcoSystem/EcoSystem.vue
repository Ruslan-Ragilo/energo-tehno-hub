<!-- eslint-disable no-undef -->
<script setup>
const dataCard = [
  "Привлекайте инвестиции от финансовых партнеров «Энерготехнохаба Петербург»",
  "Получайте экспертизу от ведущих технических специалистов отрасли",
  "Советуйтесь с руководством крупнейших энергетических корпораций России",
  "Запускайте бизнес вместе с профессиональными трекерами",
  "Выходите на опытно-промышленные испытания с отраслевыми корпорациями",
  "Открывайте бизнес при поддержке юристов, маркетологов и бизнес-аналитиков",
];
</script>

<template>
  <section class="section">
    <CommonSectionHeader
      heading-text="Экосистема возможностей"
      title-text="Станьте участником «Энерготехнохаба Петербург» и получите доступ к сервисам поддержки своего стартапа"
    >
      <div class="circle-button">
        <CommonButtonCircle
          type="button"
          :onClick="openStartupModal"
          text="Присоединиться"
        />
      </div>
    </CommonSectionHeader>
    <div class="slider-box">
      <div class="empty"></div>
      <div class="wrapper-slider">
        <div
          v-for="(item, index) in dataCard"
          :key="index"
          :class="`card-eco card-eco${item}`"
        >
          <p class="top-index">
            {{ `(0${index + 1}` }}
          </p>
          <CommonText :text="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "EcoSystem.scss";
</style>
