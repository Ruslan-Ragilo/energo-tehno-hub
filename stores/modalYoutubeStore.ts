/* eslint-disable no-undef */

export const useModalYoutubeStore = defineStore("modal-youtube-store", () => {
  const isModalOpen = ref<boolean>(false);

  function openModal() {
    isModalOpen.value = true;
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    isModalOpen.value = false;
    document.body.classList.remove("modal-open");
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useModalYoutubeStore, import.meta.hot),
  );
}
