<script lang="ts" setup>
import { ref } from 'vue'

const checkedValue = ref<string>('ru')

const switchLang = (e: MouseEvent) => {
  checkedValue.value = (e.target as HTMLInputElement).value
}
</script>

<template>
  <div class="wrapper-toggler">
    <label :class="{'active': checkedValue === 'ru'}" for="radio-ru">
      <input
        id="radio-ru"
        type="radio"
        name="switch-lang"
        value="ru"
        @click="switchLang($event)"
      >
      Ru
    </label>
    <p class="symbol">
      /
    </p>
    <label :class="{'active': checkedValue === 'en'}" for="radio-en">
      <input
        id="radio-en"
        type="radio"
        name="switch-lang"
        value="en"
        @click="switchLang($event)"
      >
      En
    </label>
  </div>
</template>

<style scoped lang="scss">
  @import './LangSwitcher.scss';
</style>
