<template>
  <div class="container">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <CommonText text="Стань участником " size="xl" />
        <CommonText text="«Энерготехнохаба Петербург»" size="xl" />
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
            Нажимая на кнопку «Отправить заявку», я подтверждаю свое согласие на
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
</template>

<script setup>
import { useFormPageStore } from "@/stores/formPage";

const store = useFormPageStore();

const sendData = () => {
  store.submitModal();
};

useHead({
  title: "Энерготехнохаб Петербург",
  meta: [
    {
      name: "description",
      content:
        "Энерготехнохаб Петербург. Мы — точка притяжения для инженеров и предпринимателей готовых запустить deep-tech стартап в энергетической отрасли.",
    },
  ],
});
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>
