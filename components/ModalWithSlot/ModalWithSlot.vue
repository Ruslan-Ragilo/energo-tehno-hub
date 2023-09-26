<template>
  <transition name="modal">
    <div v-if="store.isModalOpen" class="modal-mask" @click="store.closeModal">
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
const store = useModalWithSlotStore();

const handleEscapePress = (e) => {
  if (e.key === "Escape" && store.isModalOpen) {
    store.closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscapePress);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEscapePress);
});
</script>

<style lang="scss">
@import "./ModalWithSlot.scss";
</style>
