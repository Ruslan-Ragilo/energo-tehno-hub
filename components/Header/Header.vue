<script setup lang="ts">
const isOpenMobMenu = ref(false);
const isModalOpen = ref(false);

const name = ref('');
const phone = ref('');
const comment = ref('');

const checked = ref(false);

const sendPersonalData = () => {
  const obj = {
    name: name.value,
    phone: phone.value,
    comment: comment.value,
  };

  console.log(obj);

  name.value = '';
  phone.value = '';
  comment.value = '';
  checked.value = false;
  isModalOpen.value = false;
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

      <nav :class="{ ['header-nav']: true, ['active']: isOpenMobMenu }">
        <div class="close" @click="isOpenMobMenu = false">X</div>
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
        <nuxt-link class="nav-link" active-class="nav-link-active" to="/more">
          Еще
        </nuxt-link>
      </nav>

      <div class="header-right">
        <!-- <CommonLangSwitcher /> -->
        <CommonEllipsisButton
          text="Присоедениться"
          :onClick="
            () => {
              isModalOpen = true;
            }
          "
          style="@media screen and (max-width: 1100px) {display: none}"
        />
      </div>

      <button class="burger" @click="isOpenMobMenu = true">
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
    <Teleport to="body"
      ><ModalWindow :show="isModalOpen" @close="isModalOpen = false">
        <template #header>
          <CommonText
            text="Добро пожаловать в Энерготехнохаб Петербург"
            size="xl"
          />
        </template>
        <template #body>
          <div class="modal-inputs">
            <CommonInput type="text" placeholder="Имя" v-model="name" />
            <CommonInput
              type="text"
              placeholder="Номер  или Email"
              v-model="phone"
            />
          </div>
          <CommonInput
            type="text-area"
            placeholder="Комментарий"
            v-model="comment"
          />
          <div class="modal-policy">
            <CommonCheckBox v-model="checked" />
            <p class="modal-policy-textx">
              Нажимая на кнопку «Отправить заявку», я подтверждаю свое согласие
              на обработку персональных данных
            </p>
          </div>
        </template>
        <template #footer>
          <CommonEllipsisButton
            text="Отправить заявку"
            :onClick="sendPersonalData"
          />
        </template> </ModalWindow
    ></Teleport>
  </header>
</template>

<style lang="scss" scoped>
@import 'Header.scss';
</style>
