<script setup>
import { useMobMenu } from "@/stores/mobMenu";
const mobMenuStore = useMobMenu();
</script>

<template>
  <button
    :class="['burger burger-button', { open: mobMenuStore.isMobMenuOpen }]"
  >
    <span class="burger-button__line"></span>
    <span class="burger-button__line"></span>
    <span class="burger-button__line"></span>
  </button>
</template>

<style lang="scss" scoped>
@import "./BurgerButton.scss";
</style>
