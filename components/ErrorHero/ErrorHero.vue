<template>
  <div class="hero-wrapper">
    <div class="hero-left">
      <h1 class="hero-title">
        Совсем скоро эта <br />
        страница появится <br />в доступе
      </h1>
      <CommonButtonCircle
        text="Перейти на главную"
        type="button"
        :onClick="() => clearError({ redirect: '/' })"
      />
    </div>
    <div class="hero-right"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "ErrorHero.scss";
</style>
