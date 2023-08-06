<script setup lang="ts">
const isOpenMobMenu = ref(false);
const textForDropdown = ref('')

const handleDropdown = (text) => {
  textForDropdown.value = text
}

const store = useModalStore();

const dataLinkDropdown = {
  ecosystem: [
    { text: 'Фаундеры', to: '/ecosystem' },
    { text: 'Экспертное сообщество', to: '/ecosystem' },
    { text: 'Клуб бизнес-ангелов', to: '/ecosystem' },
  ],
  technology: [
    { text: 'Технологические вызовы', to: '/technology' },
    { text: 'Технологические компании ', to: '/technology' },
  ],
  more: [
    { text: 'Новости', to: '/more' },
    { text: 'Мероприятия', to: '/more' },
    { text: 'Контакты', to: '/more' },
  ],
}
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
      <nav :class="{ ['header-nav']: true, ['active']: isOpenMobMenu }">
        <div
          class="close"
          @click="isOpenMobMenu = false"
        >
          X
        </div>
        <div
          class="link-dropdown"
          @mouseover="handleDropdown('Экосистема')"
          @mouseleave="handleDropdown('')"
        >
          <span>Экосистема</span>
          <div :class="{'wrapper-dropdown': true, 'active': textForDropdown === 'Экосистема'}">
            <nuxt-link
              v-for="link in dataLinkDropdown.ecosystem"
              :key="link.text"
              :to="link.to"
              class="nav-link"
              active-class="nav-link-active"
            >
              {{ link.text }}
            </nuxt-link>
          </div>
        </div>
        <nuxt-link
          class="nav-link"
          active-class="nav-link-active"
          to="/services"
        >
          Сервисы
        </nuxt-link>
        <div
          class="link-dropdown"
          @mouseover="handleDropdown('Технологии')"
          @mouseleave="handleDropdown('')"
        >
          <span>Технологии</span>
          <div :class="{'wrapper-dropdown': true, active: textForDropdown === 'Технологии'}">
            <nuxt-link
              v-for="link in dataLinkDropdown.technology"
              :key="link.text"
              :to="link.to"
              class="nav-link"
              active-class="nav-link-active"
            >
              {{ link.text }}
            </nuxt-link>
          </div>
        </div>
        <div
          class="link-dropdown"
          @mouseover="handleDropdown('Еще')"
          @mouseleave="handleDropdown('')"
        >
          <span>Еще</span>
          <div :class="{'wrapper-dropdown': true, active: textForDropdown === 'Еще'}">
            <nuxt-link
              v-for="link in dataLinkDropdown.more"
              :key="link.text"
              :to="link.to"
              class="nav-link"
              active-class="nav-link-active"
            >
              {{ link.text }}
            </nuxt-link>
          </div>
        </div>
      </nav>

      <div class="header-right">
        <!-- <CommonLangSwitcher /> -->
        <CommonEllipsisButton
          text="Присоедениться"
          :on-click="openStartupModal"
          style="@media screen and (max-width: 1100px) {display: none}"
        />
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
