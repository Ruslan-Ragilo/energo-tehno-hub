<script setup>
import { ref } from 'vue'

const dataTogler = ref(
  [
    { locales: 'ru', text: 'Ru', isSymbol: false, isActive: true },
    { symbolText: '/', isSymbol: true },
    { locales: 'en', text: 'En', isSymbol: false, isActive: false }
  ]
)

const switchLang = (e) => {
  if (e.target.classList.contains('btn')) {
    if (e.target.classList.contains('active')) {
      return null
    } else {
      dataTogler.value.forEach((el, i) => {
        el.isActive ? el.isActive = false : el.isActive = true
      })
    }
  }
}
</script>

<template>
  <div class="wrapper-toggler">
    <p
      v-for="(item, index) in dataTogler"
      :key="index"
      :class="{'symbol': item.isSymbol, 'btn': !item.isSymbol, 'active': item.isActive }"
      @click="switchLang($event)"
    >
      {{ item.text || item.symbolText }}
    </p>
  </div>
</template>

<style scoped lang="scss">
  .wrapper-toggler {
    display: flex;
    gap: 5px;
    align-items: center;
    font-family: Onest;
    font-size: 14px;

    .symbol {
      font-size: 20px;
    }

    .btn {
      cursor: pointer;

      &.active {
        color: #C2C2C2;
      }
    }
  }
</style>
