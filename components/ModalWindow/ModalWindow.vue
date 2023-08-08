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
              label="Телефон"
              v-model="store.phoneField"
            />
            <CommonInput
              type="text"
              label="Email"
              v-model="store.emailField"
            />
            <CommonInput
              type="text"
              label="Возможные ссылки"
              v-model="store.linksField"
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
            :onClick="sendData"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { useModalStore } from '@/stores/modalStore';
  export default {
    setup() {
      

      const store = useModalStore();
      const mail = useMail()

      const handleEscapePress = (e) => {
        if (e.key === 'Escape' && store.isModalOpen) {
          store.closeModal();
        }
      };

      const sendData = () => {
        console.log(store.submitModal());
        mail.send(
          {
            from: 'ETX',
            subject: 'Incredible',
            text: JSON.stringify(store.submitModal()),
          },
        )
      }

      onMounted(() => {
        window.addEventListener('keydown', handleEscapePress);
      });

      onBeforeUnmount(() => {
        window.removeEventListener('keydown', handleEscapePress);
      });

      return {
        store,
        handleEscapePress,
        sendData,
      }
    },
  }
</script>

<style lang="scss" scoped>
@import 'ModalWindow.scss';
</style>
