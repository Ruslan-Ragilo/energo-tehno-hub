/* eslint-disable no-undef */

export const useModalYoutubeStore = defineStore("modal-youtube-store", () => {
  const isModalOpen = ref<boolean>(false);

  const link = ref("");

  function openModal(videoLink) {
    link.value = videoLink;
    isModalOpen.value = true;
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    isModalOpen.value = false;
    link.value = "";
    document.body.classList.remove("modal-open");
  }

  return {
    link,
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
