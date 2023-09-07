<!-- eslint-disable no-undef -->
<script setup>
import "aos/dist/aos.css";
import AOS from "aos";
import { useFormPageStore } from "@/stores/formPage";
import { useModalStore } from "@/stores/modalStore";

onMounted(() => {
  AOS.init();
});

const formPageStore = useFormPageStore();
const modalStore = useModalStore();

const route = useRoute();

watch(
  () => route.path,
  () => {
    formPageStore.resetForm();
    modalStore.resetForm();
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
