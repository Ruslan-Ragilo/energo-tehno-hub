<script lang="ts" setup>
interface Props {
  type: 'link' | 'button';
  href?: string;
  text: string;
  onClick: () => void;
}

const props = defineProps<Props>();
</script>

<template>
  <nuxt-link
    v-if="props.type === 'link'"
    class="wrapper-btn"
    :to="props.href"
    >{{ props.text }}</nuxt-link
  >
  <div v-else class="wrapper-btn" @click="onClick">
    {{ props.text }}
  </div>
</template>

<style scoped lang="scss">
.wrapper-btn {
  padding: 10px 20px;
  display: block;
  border-radius: 1000px;
  border: 1px solid #dcdcdc;
  position: relative;
  font-size: 12px;
  text-decoration: none;
  color: #111;

  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid $black;
  }

  &:hover::after {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    background: url('/images/icons/linkArrow.svg') no-repeat;
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 9px;

    transition: transform 0.2s ease-in-out;
  }
}
</style>
