import { isLabeledStatement } from 'typescript';

<script setup lang="ts">
interface Props {
  text: string;
  index: number;
  isFirst?: boolean;
  isLast?: boolean;
}
defineProps<Props>();
</script>

<template>
  <div :class="['card-container', { last: isLast, first: isFirst }]">
    <div :class="['card-wrapper', { last: isLast, first: isFirst }]">
      <span class="card-number">{{
        `( ${String(index + 1).padStart(2, "0")} )`
      }}</span>
      <CommonText
        :text="text"
        theme="dark"
        weight="regular"
        class="card-text"
      />
    </div>
    <div
      v-if="isFirst || isLast"
      :class="['blob', { last: isLast, first: isFirst }]"
    ></div>
  </div>
</template>

<style scoped lang="scss">
@import "./Card.scss";
</style>
