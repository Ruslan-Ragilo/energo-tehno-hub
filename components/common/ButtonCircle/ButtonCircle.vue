<script lang="ts" setup>
interface Props {
  type: 'link' | 'button';
  color?: string;
  to?: string;
  text: string;
  onClick?: () => void;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="button-container"
    :style="props.color ? { color: props.color } : {}"
  >
    {{ props.text }}
    <nuxt-link v-if="props.type === 'link'" :to="props.to">
      <div
        class="arrow-container"
        :style="props.color ? { border: `1px solid ${props.color}` } : {}"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_674_735)">
            <path
              d="M4.16699 10H15.8337"
              :stroke="props.color ?? '#111111'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 13.3333L15.8333 10"
              :stroke="props.color ?? '#111111'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 6.6665L15.8333 9.99984"
              :stroke="props.color ?? '#111111'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_674_735">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </nuxt-link>

    <button v-else class="button-container" @click="props.onClick">
      <div
        class="arrow-container"
        :style="props.color ? { border: `1px solid ${props.color}` } : {}"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_674_735)">
            <path
              d="M4.16699 10H15.8337"
              :stroke="props.color || '#111111'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 13.3333L15.8333 10"
              :stroke="props.color || '#111111'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 6.6665L15.8333 9.99984"
              :stroke="props.color || '#111111'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_674_735">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import 'ButtonCircle.scss';
</style>
