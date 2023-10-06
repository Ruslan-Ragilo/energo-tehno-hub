/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */

export const useModalStore = defineStore("modal-store", () => {
  const commentPlaceholder = ref<string>("");

  const startValidation = ref<boolean>(false);
  const isModalOpen = ref<boolean>(false);
  const nameField = ref<string>("");
  const phoneField = ref<string>("");
  const emailField = ref<string>("");
  const linksField = ref<string>("");
  const commentField = ref<string>("");
  const isPolicyChecked = ref<boolean>(false);

  const hiddenInputField = ref<string>("");

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const isError = ref<boolean>(false);
  const isSuccess = ref<boolean>(false);

  // isValid computeds
  const isNameValid = computed(() => {
    if (startValidation.value) {
      return nameField.value.length > 1;
    }
    return true;
  });
  const isPhoneValid = computed(() => {
    if (startValidation.value) {
      return phoneField.value.substring(0, 16).length === 16;
    }
    return true;
  });
  const isEmailVaild = computed(() => {
    if (startValidation.value) {
      return emailRegex.test(emailField.value);
    }
    return true;
  });

  const isCommentValid = computed(() => {
    if (startValidation.value) {
      return commentField.value.length < 350;
    }
    return true;
  });

  const commentFieldMax = computed(() => commentField.value.length);

  const isSubmitActive = computed(() => {
    return (
      isPolicyChecked.value &&
      nameField.value.length > 0 &&
      phoneField.value.length > 0 &&
      emailField.value.length > 0
    );
  });

  const showConfirmation = computed(() => {
    return isError.value || isSuccess.value;
  });

  function openModal(comment: string) {
    resetForm();
    commentPlaceholder.value = comment;
    isModalOpen.value = true;
    document?.body?.classList?.add("modal-open");
  }

  function closeModal() {
    resetForm();

    isModalOpen.value = false;
    document?.body?.classList?.remove("modal-open");
  }

  async function submitModal() {
    startValidation.value = true;
    hiddenInputField.value = "555";

    if (
      isEmailVaild.value &&
      isNameValid.value &&
      isPhoneValid.value &&
      isPolicyChecked.value &&
      hiddenInputField.value === "555"
    ) {
      const formData = {
        name: nameField.value,
        phone: phoneField.value.substring(0, 16),
        email: emailField.value,
        links: linksField.value,
        comment: commentField.value,
      };

      const mail = useMail();

      try {
        await mail.send({
          from: "dev@sloy.design",
          subject: "Form page message",
          text: `name: ${formData.name} phone: ${formData.phone} email: ${formData.email} comment: ${formData.comment} links: ${formData.links}`,
        });

        resetForm();
        isSuccess.value = true;
      } catch (error) {
        console.log(error);
        isError.value = true;
      } finally {
        setTimeout(() => {
          closeModal();
        }, 5000);
      }

      return formData;
    }
  }

  function resetForm() {
    nameField.value = "";
    phoneField.value = "";
    emailField.value = "";
    linksField.value = "";
    commentField.value = "";
    isPolicyChecked.value = false;
    startValidation.value = false;
    hiddenInputField.value = "";
    isError.value = false;
    isSuccess.value = false;
  }

  return {
    commentPlaceholder,
    isModalOpen,
    nameField,
    phoneField,
    emailField,
    commentField,
    linksField,
    isPolicyChecked,
    hiddenInputField,
    isSubmitActive,
    openModal,
    closeModal,
    submitModal,
    isEmailVaild,
    isPhoneValid,
    isNameValid,
    isCommentValid,
    commentFieldMax,
    isError,
    isSuccess,
    showConfirmation,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot));
}
