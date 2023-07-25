<script lang="ts" setup>

interface Props {
  type: 'link' | 'button',
  href?: string,
  text: string,
  onClick: () => void
}


const props = defineProps<Props>()

</script>

<template>
  <a v-if="props.type === 'link'" class="wrpapper-btn" :href="props.href">{{ props.text }}</a>
  <div v-else class="wrpapper-btn" @click="onClick">
    {{ props.text }}
  </div>
</template>

<style scoped lang="scss">
  .wrpapper-btn {
    padding: 11px 20px;
    display: block;
    border-radius: 1000px;
    border: 1px solid #DCDCDC;
    position: relative;
    font-size: 12px;
    text-decoration: none;
    color: #111;

    &::after {
      content: '';
      background: url('@/assets/images/icons/linkArrow.svg') no-repeat;
      position: absolute;
      width: 20px;
      height: 20px;
      right: 10px;
      top: 9px;
    }
  }
</style>
