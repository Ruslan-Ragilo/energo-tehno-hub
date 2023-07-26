<template>
  <div
    class="card"
    :style="backgroundStyle"
  >
    <CommonText
      :text="props.title"
      theme="white"
      size="xl"
    />
    <div class="description">
      <CommonText
        class-name="descriptionText"
        :text="props.description"
        theme="white"
      />
      <div class="descriptionLink">
        <img
          src="assets/images/icons/linkArrow.svg"
          alt="link"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  description: string
  background: {
    type: 'image' | 'color',
    payload: string
  }
}

const props = defineProps<Props>()

const backgroundStyle = computed(() => props.background.type === 'image'
    ? { background: 'url(' + props.background.payload + ') no-repeat' }
    : { background: props.background.payload })
</script>

<style scoped>
@import "Card.scss";
</style>
