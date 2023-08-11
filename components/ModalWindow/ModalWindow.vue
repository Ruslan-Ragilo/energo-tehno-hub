<template>
  <transition name="modal">
    <div
      v-if="store.isModalOpen"
      class="modal-mask"
      @click="store.closeModal"
      @keydown="handleEscapePress"
    >
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <CommonXCross class="modal-xcross" @click="store.closeModal" />
          <CommonText
            text="Добро пожаловать в Энерготехнохаб Петербург"
            size="xl"
          />
        </div>

        <form class="modal-body" @submit.prevent>
          <div class="modal-inputs">
            <CommonInput
              type="text"
              label="Имя *"
              tag-type="input"
              v-model="store.nameField"
              :error-message="store.isNameValid ? '' : 'Минимум 2 символа'"
            />
            <CommonInput
              type="tel"
              class="tel"
              label="Телефон *"
              v-model="store.phoneField"
              :error-message="store.isPhoneValid ? '' : 'Неверный формат'"
            />
            <CommonInput
              type="email"
              label="Email *"
              tag-type="input"
              v-model="store.emailField"
              :error-message="store.isEmailVaild ? '' : 'Неверный формат'"
            />
            <CommonInput
              type="text"
              tag-type="input"
              label="Возможные ссылки"
              v-model="store.linksField"
            />
          </div>
          <CommonInput
            tagType="textarea"
            label="Комментарий"
            :placeholder="store.commentPlaceholder"
            v-model="store.commentField"
            :error-message="store.isCommentValid ? '' : 'Максимум 350 символов'"
          />
          <input
            type="text"
            disabled
            v-model="store.hiddenInputField"
            :style="{ display: 'none' }"
          />
          <div class="modal-policy">
            <CommonCheckBox v-model="store.isPolicyChecked" />
            <p class="modal-policy-text">
              Нажимая на кнопку «Отправить заявку», я подтверждаю свое согласие
              на
              <nuxt-link to="/" class="link"
                >обработку персональных данных</nuxt-link
              >
            </p>
          </div>
        </form>

        <div class="modal-footer">
          <CommonEllipsisButton
            :disabled="!store.isSubmitActive"
            text="Отправить заявку"
            :onClick="sendData"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useModalStore } from "@/stores/modalStore";

const store = useModalStore();

const handleEscapePress = (e) => {
  if (e.key === "Escape" && store.isModalOpen) {
    store.closeModal();
  }
};

const sendData = () => {
  store.submitModal();
};

onMounted(() => {
  window.addEventListener("keydown", handleEscapePress);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEscapePress);
});
</script>

<style lang="scss" scoped>
@import "ModalWindow.scss";
</style>
