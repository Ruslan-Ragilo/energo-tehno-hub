<script lang="ts" setup>
interface Link {
  to: string;
  text: string;
}

interface Props {
  heading: string;
  links: Link[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="links-footer">
    <p>{{ props.heading }}</p>
    <div class="wrapper-bottom-links">
      <div v-for="(link, linkIndex) in props.links" :key="link.to + linkIndex">
        <nuxt-link class="footer-link" :to="link.to">{{ link.text }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./Column.scss";
</style>
