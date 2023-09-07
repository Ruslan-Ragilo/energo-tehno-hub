<script setup lang="ts">
interface Props {
  isError: boolean;
  isSuccess: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="text-container">
    <div v-if="isSuccess" class="success">
      <div class="text-container__logo">
        <img src="/images/icons/logo-icon.svg" alt="logo" />
      </div>
      <h2 class="text-container__heading">Спасибо!</h2>
      <p class="text-container__text">Мы свяжемся с вами в течение 24 часов.</p>
    </div>
    <div v-if="isError" class="error">
      <div class="text-container__logo">
        <img src="/images/icons/logo-icon.svg" alt="logo" />
      </div>
      <h2 class="text-container__heading">Упс!</h2>
      <p class="text-container__text">Ошибка сервера...</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "RequestConfirmation.scss";
</style>
