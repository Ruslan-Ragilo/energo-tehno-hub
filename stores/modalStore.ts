export const useModalStore = defineStore('modal-store', () => {
  const commentPlaceholder = ref('');

  const isModalOpen = ref(false);
  const nameField = ref('');
  const phoneField = ref('');
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
    commentField.value = '';
    isPolicyChecked.value = false;

    isModalOpen.value = false;
  }

  function submitModal() {
    const obj = {
      name: nameField.value,
      phone: phoneField.value,
      comment: commentField.value,
    };

    console.log(obj);

    closeModal();

    return obj;
  }

  return {
    commentPlaceholder,
    isModalOpen,
    nameField,
    phoneField,
    commentField,
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
