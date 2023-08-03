<script setup lang="ts">
interface Props {
  onClick: () => void;
  text: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button class="ellipsys-button" @click="props.onClick">
    <p>{{ props.text }}</p>
    <CommonLinkArrow />
  </button>
</template>

<style scoped lang="scss">
@import 'EllipsisButton.scss';
</style>
