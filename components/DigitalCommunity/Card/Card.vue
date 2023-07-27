<template>
  <div
    class="card"
    :style="
      props.background.type === 'image'
        ? {
            backgroundImage: `url(${props.background.payload})`,
          }
        : { backgroundColor: props.background.payload }
    "
  >
    <CommonText :text="props.title" theme="white" size="xl" />
    <div class="description">
      <CommonText
        class-name="descriptionText"
        :text="props.description"
        theme="white"
      />
      <div class="descriptionLink">
        <img src="assets/images/icons/linkArrow.svg" alt="link" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  background: {
    type: 'image' | 'color';
    payload: string;
  };
}

const props = defineProps<Props>();
</script>

<style scoped>
@import 'Card.scss';
</style>
