<!-- eslint-disable no-undef -->
<script lang="ts" setup>
  const isOpenMobMenu = ref<boolean>(false);
</script>

<template>
  <header>
    <div class="header-wrapper">
      <nuxt-link to="/">
        <div class="header-logo">
          <img
            src="/images/logo.svg"
            alt="logo"
          >
        </div>
      </nuxt-link>

      <nav :class="{['header-nav']: true, ['active']: isOpenMobMenu}">
        <div
          class="close"
          @click="isOpenMobMenu = false"
        >
          X
        </div>
        <nuxt-link
          class="nav-link"
          active-class="nav-link-active"
          to="/ecosystem"
        >
          Экосистема
        </nuxt-link>
        <nuxt-link
          class="nav-link"
          active-class="nav-link-active"
          to="/services"
        >
          Сервисы
        </nuxt-link>
        <nuxt-link
          class="nav-link"
          active-class="nav-link-active"
          to="/technologies"
        >
          Технологии
        </nuxt-link>
        <nuxt-link
          class="nav-link"
          active-class="nav-link-active"
          to="/more"
        >
          Еще
        </nuxt-link>
      </nav>

      <div class="header-right">
        <!-- <CommonLangSwitcher /> -->
        <button class="header-right-button">
          Присоединиться
          <img
            src="/images/icons/linkArrow.svg"
            alt="link"
            class="arrow"
            width="20"
            height="20"
          >
        </button>
      </div>

      <button
        class="burger"
        @click="isOpenMobMenu = true"
      >
        <svg
          width="66"
          height="46"
          viewBox="0 0 66 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 16H45M21 23H45M21 30H45"
            stroke="#333333"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <rect
            x="0.5"
            y="0.5"
            width="65"
            height="45"
            rx="9.5"
            stroke="#333333"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import 'Header.scss';
</style>
