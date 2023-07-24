<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'link',
    validator (value) {
      return ['link', 'button'].includes(value)
    }
  },
  href: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  onClick: {
    type: Function,
    default: null
  }
})
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
