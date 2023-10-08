<script setup lang="ts">
const breakpoints = [
  {
    title: ["Подайте", "заявку"],
    info: "Заполните регистрационную форму",
  },
  {
    title: ["Пройдите", "интервью"],
    info: "Дождитесь личного собеседования со специалистом «Энерготехнохаба Петербург» и расскажите о своем опыте",
  },
  {
    title: ["Защитите", "проект"],
    info: "Проработайте идею вместе со специалистами экосистемы и проведите питч перед экспертной комиссией",
  },
  {
    title: ["Подпишите", "соглашение"],
    info: "В случае успешной защиты подпишите соглашение о сотрудничестве с «Энерготехнохаб Петербург»",
  },
];
</script>

<template>
  <div class="breakpoints-container">
    <div class="breakpoint" v-for="(br, index) in breakpoints" :key="index">
      <div class="breakpoint__title">
        <div class="title-index">{{ String(index + 1).padStart(2, "0") }}</div>
        <h4 class="title-heading" v-for="title in br.title" :key="title">
          {{ title }}
        </h4>
      </div>
      <div class="breakpoint__info">
        <p class="info-text">{{ br.info }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./BreakPoints.scss";
</style>
