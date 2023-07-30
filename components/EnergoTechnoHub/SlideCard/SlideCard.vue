<script lang="ts" setup>
interface Props {
  image: string;
  titles?: string[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <img :src="props.image" class="card-image" />
    <div class="card-title" v-if="!!props.titles && props.titles.length > 0">
      <CommonText
        v-for="title in props.titles"
        :key="title"
        :text="title"
        size="l"
        theme="white"
      />
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import 'SlideCard.scss';
</style>
