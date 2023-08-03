<script setup lang="ts">
interface Props {
  width?: number;
  height?: number;
  isPlaying?: boolean;
  color?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <!-- pause -->
  <svg
    v-if="!!props.isPlaying"
    class="player-button"
    :width="props.width ?? 50"
    :height="props.height ?? 50"
    :viewBox="`0 0 ${props.width ?? 50} ${props.height ?? 50}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      opacity="0.5"
      cx="25"
      cy="25"
      r="24"
      :stroke="props.color ?? '#FAFAFA'"
      stroke-width="2"
    />
    <path
      d="M22 17H20C19.4477 17 19 17.4477 19 18V32C19 32.5523 19.4477 33 20 33H22C22.5523 33 23 32.5523 23 32V18C23 17.4477 22.5523 17 22 17Z"
      :fill="props.color ?? '#FAFAFA'"
    />
    <path
      d="M30 17H28C27.4477 17 27 17.4477 27 18V32C27 32.5523 27.4477 33 28 33H30C30.5523 33 31 32.5523 31 32V18C31 17.4477 30.5523 17 30 17Z"
      :fill="props.color ?? '#FAFAFA'"
    />
  </svg>

  <!-- play -->
  <svg
    v-else
    class="player-button"
    :width="props.width ?? 50"
    :height="props.height ?? 50"
    :viewBox="`0 0 ${props.width ?? 50} ${props.height ?? 50}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="25"
      cy="25"
      r="24"
      :stroke="props.color ?? '#FAFAFA'"
      stroke-width="2"
    />
    <path
      d="M33.5 24.134C34.1667 24.5189 34.1667 25.4811 33.5 25.866L21.5 32.7942C20.8333 33.1791 20 32.698 20 31.9282L20 18.0718C20 17.302 20.8333 16.8209 21.5 17.2058L33.5 24.134Z"
      :fill="props.color ?? '#FAFAFA'"
    />
  </svg>
</template>

<style lang="scss" scoped>
@import 'PlayButton.scss';
</style>
