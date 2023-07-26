<script lang="ts" setup>
interface Props {
  type: 'link' | 'button';
  to?: string;
  text: string;
  onClick?: () => void;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="button-container">
    {{ props.text }}
    <nuxt-link v-if="props.type === 'link'" :to="props.to">
      <div class="arrow-container">
        <img src="/_nuxt/assets/images/icons/linkButton.svg" alt="" />
      </div>
    </nuxt-link>

    <button v-else class="button-container" @click="props.onClick">
      <div class="arrow-container">
        <img src="/_nuxt/assets/images/icons/linkButton.svg" alt="" />
      </div>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import 'ButtonCircle.scss';
</style>
