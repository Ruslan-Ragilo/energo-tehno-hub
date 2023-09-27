<script setup lang="ts">
interface Props {
  title: string;
  text: string;
}

defineProps<Props>();
</script>

<template>
  <div class="challenges-wrapper">
    <h1 class="challenges-title">{{ title }}</h1>
    <p class="challenges-description">
      <CommonText
        :text="text"
        size="m"
        theme="gray"
        weight="regular"
        className="right-text"
      ></CommonText>
    </p>
  </div>
</template>

<style lang="scss">
@import "./Hero.scss";
</style>
