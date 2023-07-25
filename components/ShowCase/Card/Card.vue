<script lang="ts" setup>
interface Props {
  urlImage: string;
  heading: string;
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="wrapper">
    <img
      :src="props.urlImage"
      alt="image"
    >
    <div class="wrapper-text">
      <CommonText
        size="sm"
        :text="props.heading"
        theme="white"
      />
      <CommonText
        size="m"
        :text="props.text"
        theme="light"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "Card.scss";
</style>
