<script setup lang="ts">
interface Props {
  color?: string;
  width?: number;
  height?: number;
}

const props = defineProps<Props>();
</script>

<template>
  <svg
    :width="props.width ?? 24"
    :height="props.height ?? 24"
    :viewBox="`0 0 ${props.width ?? 24} ${props.height ?? 24}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      :stroke="props.color ?? '#333333'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6L18 18"
      :stroke="props.color ?? '#333333'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
