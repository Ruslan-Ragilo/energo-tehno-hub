<template>
  <div :class="['text', props.theme, props.size, props.weight]">
    {{ props.text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: ''
  },
  family: {
    type: String,
    default: 'onest',
    validator (value) {
      return ['onest', 'gilroy'].includes(value)
    }
  },
  theme: {
    type: String,
    default: 'dark',
    validator (value) {
      return ['dark', 'black', 'gray', 'white', 'light', 'red'].includes(value)
    }
  },
  size: {
    type: String,
    default: 'm',
    validator (value) {
      return ['xs', 's', 'm', 'l', 'xl'].includes(value)
    }
  },
  weight: {
    type: String,
    default: 'regular',
    validator (value) {
      return ['thin', 'regular', 'semi-bold', 'bold'].includes(value)
    }
  }
})
</script>

<style scoped lang="scss">
@import "Text.scss";
</style>
