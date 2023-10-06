<script setup lang="ts">
const router = useRouter();
const mobMenuStore = useMobMenu();

const textForDropdown = ref("");

const handleDropdown = (text) => {
  textForDropdown.value = text;
};

const handleBurgerJoinButton = () => {
  mobMenuStore.closeMenu();
  openStartupModal();
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
              v-for="link in getRoutes().ecosystem"
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
              v-for="link in getRoutes().technology"
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
              v-for="link in getRoutes().more"
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

      <teleport to="body">
        <div :class="['mob-nav', { ['active']: mobMenuStore.isMobMenuOpen }]">
          <div class="nav-wrapper">
            <FooterColumn heading="Экосистема" :links="getRoutes().ecosystem" />
            <FooterColumn
              heading="Сервисы"
              :links="[]"
              @click="() => router.push('/services')"
            />
            <FooterColumn
              heading="Технологии"
              :links="getRoutes().technology"
            />
            <FooterColumn heading="Еще" :links="getRoutes().more" />
          </div>
          <CommonEllipsisButton
            text="Присоединиться"
            :on-click="handleBurgerJoinButton"
          />
        </div>
      </teleport>

      <div class="header-right">
        <!-- <CommonLangSwitcher /> -->
        <CommonEllipsisButton
          text="Присоединиться"
          :on-click="openStartupModal"
          style="@media screen and (max-width: 1100px) {display: none}"
        />
      </div>

      <CommonBurgerButton @click="mobMenuStore.toggleMobMenu" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "Header.scss";
</style>
