<script setup lang="ts">
interface Props {
  title1: string;
  title2?: string;
}

defineProps<Props>();

// eslint-disable-next-line no-undef
const store = useFormPageStore();

const sendData = () => {
  store.submitModal();
};
</script>

<template>
  <div class="modal-container" @click.stop>
    <template v-if="!store.showConfirmation">
      <div class="modal-header">
        <CommonText :text="title1" size="xl" />
        <CommonText v-if="title2" :text="title2" size="xl" />
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
          <div class="policy-block">
            <CommonCheckBox v-model="store.isPolicyChecked" />
            <p class="modal-policy-text">
              Нажимая на кнопку «Отправить заявку», я подтверждаю свое согласие
              на
              <nuxt-link to="/" class="link"
                >обработку персональных данных</nuxt-link
              >
            </p>
          </div>
          <div class="modal-footer">
            <CommonEllipsisButton
              :disabled="!store.isSubmitActive"
              text="Отправить заявку"
              :onClick="sendData"
            />
          </div>
        </div>
      </form>
    </template>
    <template v-if="store.showConfirmation">
      <RequestConfirmation
        :isError="store.isError"
        :isSuccess="store.isSuccess"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "./SubmitForm.scss";
</style>
