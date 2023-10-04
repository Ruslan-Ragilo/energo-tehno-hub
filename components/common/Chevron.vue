<script lang="ts" setup>
interface Props {
  color?: string;
  width?: number;
  height?: number;
}
const props = defineProps<Props>();
</script>

<template>
  <svg
    :width="props.width ?? 8"
    :height="props.height ?? 12"
    :viewBox="`0 0 ${props.width ?? 8} ${props.height ?? 12}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 11L1.5 6L6.5 1"
      :stroke="props.color ?? '#111111'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
