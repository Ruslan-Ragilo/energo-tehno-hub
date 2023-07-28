<script lang="ts" setup>
interface Props {
  leftText: string;
  rightText: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <CommonText size="xxls" :text="props.leftText" theme="dark" />
    <CommonText
      :text="props.rightText"
      size="sm"
      theme="gray"
      :style="{ maxWidth: '170px' }"
    />
  </div>
</template>

<style lang="scss" scoped>
@import 'TextCard.scss';
</style>
