<script setup lang="ts">
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
        <!-- <CommonLangSwitcher /> -->
        <button class="header-right-button" @click="isModalOpen = true">
          Присоедениться
          <img
            src="/images/icons/linkArrow.svg"
            alt="link"
            class="arrow"
            width="20"
            height="20"
          />
        </button>
      </div>
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
          <button class="submit-button" @click="sendPersonalData">
            Отправить заявку
            <img
              src="/images/icons/linkArrow.svg"
              alt="link"
              class="arrow"
              width="20"
              height="20"
            />
          </button>
        </template> </ModalWindow
    ></Teleport>
  </header>
</template>

<style lang="scss" scoped>
@import 'Header.scss';
</style>
