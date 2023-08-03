<script setup lang="ts">
interface Props {
  type?: 'link' | 'button';
  onClick?: () => void;
  text: string;
  href?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <nuxt-link
    v-if="props.type === 'link'"
    class="ellipsis-button"
    :to="props.href"
    ><p>{{ props.text }}</p>
    <CommonLinkArrow
  /></nuxt-link>
  <button v-else class="ellipsis-button" @click="props.onClick">
    <p>{{ props.text }}</p>
    <CommonLinkArrow />
  </button>
</template>

<style scoped lang="scss">
@import 'EllipsisButton.scss';
</style>
