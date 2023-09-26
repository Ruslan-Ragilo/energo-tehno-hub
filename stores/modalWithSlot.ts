/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */

export const useModalWithSlotStore = defineStore(
  "modal-with-slot-store",
  () => {
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
  },
);

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useModalWithSlotStore, import.meta.hot),
  );
}
