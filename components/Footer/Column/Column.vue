<script setup>
const props = defineProps({
  heading: {
    type: String,
    default: null
  },
  links: {
    type: Array,
    default: null
  }
})
</script>

<template>
  <div class="links-footer">
    <p>{{ props.heading }}</p>
    <div class="wrapper-bottom-links">
      <a v-for="(link, linkIndex) in props.links" :key="linkIndex" :href="link.href">{{ link.text }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './Column.scss';
</style>
