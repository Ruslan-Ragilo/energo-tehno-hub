/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */

export const useFormPageStore = defineStore("form-page-store", () => {
  const commentPlaceholder = ref<string>("");
  const { $mail } = useNuxtApp()

  const startValidation = ref<boolean>(false);

  const nameField = ref<string>("");
  const phoneField = ref<string>("");
  const emailField = ref<string>("");
  const linksField = ref<string>("");
  const commentField = ref<string>("");
  const isPolicyChecked = ref<boolean>(false);

  const hiddenInputField = ref<string>("");

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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

  function submitModal() {
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
      mail.send({
        from: "dev@sloy.design",
        subject: "Form page message",
        text: `name: ${formData.name} phone: ${formData.phone} email: ${formData.email} comment: ${formData.comment} links: ${formData.links}`,
      });
      resetForm();
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
  }

  return {
    commentPlaceholder,
    nameField,
    phoneField,
    emailField,
    commentField,
    linksField,
    isPolicyChecked,
    hiddenInputField,
    isSubmitActive,
    submitModal,
    isEmailVaild,
    isPhoneValid,
    isNameValid,
    isCommentValid,
    commentFieldMax,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFormPageStore, import.meta.hot));
}
