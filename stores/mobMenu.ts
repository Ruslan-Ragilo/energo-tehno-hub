/* eslint-disable no-undef */

export const useMobMenu = defineStore("mobile-menu", () => {
  const isMobMenuOpen = ref<boolean>(false);

  function openMenu() {
    isMobMenuOpen.value = true;
    document?.body?.classList?.add("modal-open");
  }

  function closeMenu() {
    isMobMenuOpen.value = false;
    document?.body?.classList?.remove("modal-open");
  }

  function toggleMobMenu() {
    isMobMenuOpen.value ? closeMenu() : openMenu();
  }

  return {
    isMobMenuOpen,
    openMenu,
    closeMenu,
    toggleMobMenu,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMobMenu, import.meta.hot));
}
