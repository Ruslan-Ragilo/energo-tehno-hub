<template>
  <div class="challenges-card">
    <div class="challenges-card__top">
      <CommonText
        :text="props.title"
        size="ml"
        theme="dark"
        weight="regular"
        className="card-title"
      />
      <CommonText
        :text="props.text"
        size="m"
        theme="gray"
        weight="regular"
        className="card-text"
      />
      <div class="card-label">{{ props.label }}</div>
    </div>
    <div class="card-link" role="button" @click="props.onClick">
      Узнать больше
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  text: string;
  label: string;
  onClick: () => void;
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "./Card.scss";
</style>
