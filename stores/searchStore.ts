/* eslint-disable no-undef */

export const useSearchStore = defineStore("search-store", () => {
  const iMenuOpen = ref<boolean>(false);
  const searchInput = ref<string>("");
  const checkedFilters = ref<string[]>([]);

  function openMenu() {
    iMenuOpen.value = true;
  }

  function closeMenu() {
    iMenuOpen.value = false;
  }

  function toggleMenu() {
    iMenuOpen.value ? closeMenu() : openMenu();
  }

  function emptyFilters() {
    console.log(searchInput.value);
    console.log(checkedFilters.value);
    checkedFilters.value = [];
  }

  return {
    searchInput,
    iMenuOpen,
    checkedFilters,
    openMenu,
    closeMenu,
    toggleMenu,
    emptyFilters,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot));
}
