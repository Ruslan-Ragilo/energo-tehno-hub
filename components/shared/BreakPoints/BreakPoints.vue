<script setup lang="ts">
interface Points {
  title: string;
  info: string;
}

interface Props {
  points: Points[];
  isLarge?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="breakpoints-container">
    <div class="breakpoint" v-for="(br, index) in points" :key="index">
      <div class="breakpoint__title">
        <div v-if="!isLarge" class="title-index">
          {{ String(index + 1).padStart(2, "0") }}
        </div>
        <div class="title-heading" v-html="br.title"></div>
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
