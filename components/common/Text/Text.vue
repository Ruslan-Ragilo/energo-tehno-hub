<script lang="ts" setup>
interface Props {
  text: string;
  size?: 'xs' | 's' | 'm' | 'sm' | 'l' | 'xl' | 'xxl' | 'xxxl';
  weight?: 'thin' | 'regular' | 'semi-bold' | 'bold';
  theme?: 'dark' | 'black' | 'gray' | 'white' | 'light';
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  size: 'm',
  weight: 'regular',
  theme: 'black',
  className: undefined,
});
</script>

<template>
  <div :class="[props.theme, props.size, props.weight, props.className]">
    {{ props.text }}
  </div>
</template>

<style scoped lang="scss">
@import './Text.scss';
</style>
