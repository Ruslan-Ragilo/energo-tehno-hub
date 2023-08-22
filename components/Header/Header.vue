<script setup lang="ts">
const isOpenMobMenu = ref(false);
const textForDropdown = ref("");

const toggleIsOpenMobMenu = () => {
  isOpenMobMenu.value = !isOpenMobMenu.value;
};

const handleDropdown = (text) => {
  textForDropdown.value = text;
};

// const store = useModalStore();

const dataLinkDropdown = {
  ecosystem: [
    { text: "Фаундеры", to: "/ecosystem" },
    { text: "Экспертное сообщество", to: "/ecosystem" },
    { text: "Клуб бизнес-ангелов", to: "/ecosystem" },
  ],
  technology: [
    { text: "Технологические вызовы", to: "/technology" },
    { text: "Технологические компании ", to: "/technology" },
  ],
  more: [
    { text: "Новости", to: "/more" },
    { text: "Мероприятия", to: "/more" },
    { text: "Контакты", to: "/more" },
  ],
};
</script>

<template>
  <header>
    <div class="header-wrapper">
      <nuxt-link to="/">
        <div class="header-logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
      </nuxt-link>
      <nav :class="{ ['header-nav']: true }">
        <div
          class="link-dropdown"
          @mouseover="handleDropdown('Экосистема')"
          @mouseleave="handleDropdown('')"
        >
          <span>Экосистема</span>
          <div
            :class="{
              'wrapper-dropdown': true,
              active: textForDropdown === 'Экосистема',
            }"
          >
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
          <div
            :class="{
              'wrapper-dropdown': true,
              active: textForDropdown === 'Технологии',
            }"
          >
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
          <div
            :class="{
              'wrapper-dropdown': true,
              active: textForDropdown === 'Еще',
            }"
          >
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

      <div :class="['mob-nav', { ['active']: isOpenMobMenu }]">
        <FooterColumn
          heading="Экосистема"
          :links="[
            { text: 'Фаундеры', href: '/ecosystem' },
            { text: 'Экспертное сообщество', href: '/ecosystem' },
            { text: 'Клуб бизнес-ангелов', href: '/ecosystem' },
          ]"
        />
        <FooterColumn heading="Сервисы" :links="[]" />
        <FooterColumn
          heading="Технологии"
          :links="[
            { text: 'Технологические вызовы', href: '/technologies' },
            { text: 'Технологические компании ', href: '/technologies' },
          ]"
        />
        <FooterColumn
          heading="Еще"
          :links="[
            { text: 'Новости', href: 'more' },
            { text: 'Мероприятия', href: 'more' },
            { text: 'Контакты', href: 'more' },
          ]"
        />
      </div>

      <div class="header-right">
        <!-- <CommonLangSwitcher /> -->
        <CommonEllipsisButton
          text="Присоединиться"
          :on-click="openStartupModal"
          style="@media screen and (max-width: 1100px) {display: none}"
        />
      </div>

      <button class="burger" @click="toggleIsOpenMobMenu">
        <svg
          class="hb"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          stroke="#333"
          stroke-width=".6"
          fill="rgba(0,0,0,0)"
          stroke-linecap="round"
          style="cursor: pointer"
        >
          <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
            <animate
              dur="0.2s"
              attributeName="d"
              values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
              fill="freeze"
              begin="start.begin"
            />
            <animate
              dur="0.2s"
              attributeName="d"
              values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
              fill="freeze"
              begin="reverse.begin"
            />
          </path>
          <rect width="8" height="8" stroke="none">
            <animate
              dur="2s"
              id="reverse"
              attributeName="width"
              begin="click"
            />
          </rect>
          <rect width="8" height="8" stroke="none">
            <animate
              dur="0.001s"
              id="start"
              attributeName="width"
              values="10;0"
              fill="freeze"
              begin="click"
            />
            <animate
              dur="0.001s"
              attributeName="width"
              values="0;10"
              fill="freeze"
              begin="reverse.begin"
            />
          </rect>
        </svg>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "Header.scss";
</style>
