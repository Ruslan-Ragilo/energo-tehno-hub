/* eslint-disable prefer-const */
export const useModalStore = defineStore('modal-store', () => {
  const commentPlaceholder = ref('');

  const isModalOpen = ref(false);
  const nameField = ref('');
  const phoneField = ref('');
  const emailField = ref('');
  const linksField = ref('');
  const commentField = ref('');

  const isPolicyChecked = ref(false);

  const isSubmitActive = computed(() => {
    return (
      nameField.value.length > 0 &&
      phoneField.value.length > 0 &&
      commentField.value.length > 0 &&
      isPolicyChecked
    );
  });

  function openModal(comment: string) {
    commentPlaceholder.value = comment;
    isModalOpen.value = true;
  }

  function closeModal() {
    nameField.value = '';
    phoneField.value = '';
    emailField.value = '';
    linksField.value = '';
    commentField.value = '';
    isPolicyChecked.value = false;

    isModalOpen.value = false;
  }

  function submitModal() {
    const obj = {
      name: nameField.value,
      phone: phoneField.value,
      email: emailField.value,
      links: linksField.value,
      comment: commentField.value,
    };

    console.log(obj);
    const mail = useMail()

    mail.send(
      {
        from: 'dev@sloy.design',
        subject: 'Contact form message',
        text: `name: ${obj.name} phone: ${obj.phone} email: ${obj.email} comment: ${obj.comment} links: ${obj.links}`,
      },
    )

    closeModal();

    return obj;
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
    isSubmitActive,
    openModal,
    closeModal,
    submitModal,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot));
}
