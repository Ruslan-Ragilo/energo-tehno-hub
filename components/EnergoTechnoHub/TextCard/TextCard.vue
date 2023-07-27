<script lang="ts" setup>
interface Props {
  leftText: string;
  rightText: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <CommonText
      :text="props.leftText"
      theme="dark"
      :style="{ fontSize: '80px', lineHeight: '80px' }"
    />
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
