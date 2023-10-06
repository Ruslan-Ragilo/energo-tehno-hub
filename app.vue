<!-- eslint-disable no-undef -->
<script setup>
import "aos/dist/aos.css";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});

const menuStore = useMobMenu();
const formPageStore = useFormPageStore();
const modalStore = useModalStore();

const route = useRoute();

watch(
  () => route.path,
  () => {
    formPageStore.resetForm();
    modalStore.closeModal();
    menuStore.closeMenu();
  },
);
</script>

<template>
  <Header />
  <main>
    <NuxtPage />
  </main>
  <Footer />
  <Teleport to="body"><ModalWindow /></Teleport>
</template>

<style lang="scss">
@import "app.scss";
</style>
