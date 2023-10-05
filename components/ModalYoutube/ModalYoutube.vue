<template>
  <transition name="modal">
    <div v-if="store.isModalOpen" class="modal-mask" @click="store.closeModal">
      <div class="modal-container" @click.stop>
        <iframe
          :src="store.link"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useModalYoutubeStore } from "@/stores/modalYoutubeStore";

const store = useModalYoutubeStore();

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

<style scoped lang="scss">
@import "ModalYoutube.scss";
</style>
