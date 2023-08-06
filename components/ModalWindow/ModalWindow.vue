<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore';

const store = useModalStore();

const handleEscapePress = (e) => {
  if (e.key === 'Escape' && store.isModalOpen) {
    store.closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscapePress);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscapePress);
});
</script>

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

        <div class="modal-body">
          <div class="modal-inputs">
            <CommonInput type="text" label="Имя" v-model="store.nameField" />
            <CommonInput
              type="text"
              label="Номер  или Email"
              v-model="store.phoneField"
            />
          </div>
          <CommonInput
            tagType="textarea"
            label="Комментарий"
            :placeholder="store.commentPlaceholder"
            v-model="store.commentField"
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
        </div>

        <div class="modal-footer">
          <CommonEllipsisButton
            :disabled="!store.isSubmitActive"
            text="Отправить заявку"
            :onClick="store.submitModal"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import 'ModalWindow.scss';
</style>
stores/modalStore
