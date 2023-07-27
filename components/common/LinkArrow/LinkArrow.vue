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
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width ?? 20"
    :height="props.height ?? 20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <g clip-path="url(#clip0_808_226)">
      <path
        d="M5.83301 14.1665L14.1663 5.83317"
        :stroke="props.color ?? '#111111'"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.167 13.3335V5.8335H6.66699"
        :stroke="props.color ?? '#111111'"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_808_226">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="matrix(1 0 0 -1 0 20)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
