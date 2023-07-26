<template>
  <header>
    <div class="header-wrapper">
      <nuxt-link to="/">
        <div class="header-logo">
          <img src="/_nuxt/assets/images/logo.svg" alt="logo" />
        </div>
      </nuxt-link>

      <nav class="header-nav">
        <nuxt-link
          class="nav-link"
          active-class="nav-link-active"
          to="/ecosystem"
          >Экосистема</nuxt-link
        >
        <nuxt-link
          class="nav-link"
          active-class="nav-link-active"
          to="/services"
          >Сервисы</nuxt-link
        >
        <nuxt-link
          class="nav-link"
          active-class="nav-link-active"
          to="/technologies"
          >Технологии</nuxt-link
        >
        <nuxt-link class="nav-link" active-class="nav-link-active" to="/more"
          >Еще</nuxt-link
        >
      </nav>

      <div class="header-right">
        <CommonLangSwitcher />
        <button class="header-right-button">
          Присоедениться
          <img
            src="/_nuxt/assets/images/icons/linkArrow.svg"
            alt="link"
            class="arrow"
            width="20"
            height="20"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import 'Header.scss';
</style>
