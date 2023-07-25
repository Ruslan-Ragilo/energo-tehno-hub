<template>
  <div :class="['text', props.theme, props.size, props.weight]">
    {{ props.text }}
  </div>
</template>

<script lang="ts" setup>

interface Props {
  text: string,
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl',
  weight?: 'thin' | 'regular' | 'semi-bold' | 'bold',
  theme: 'dark' | 'black' | 'gray' | 'white' | 'light'
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
@import "./Text.scss";
</style>
