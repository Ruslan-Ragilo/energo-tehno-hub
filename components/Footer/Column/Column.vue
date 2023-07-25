<script lang="ts" setup>

interface Link {
  href: string;
  text: string
}

interface Props {
  heading: string;
  links: Link[]
}

const props = defineProps<Props>()
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
