<script setup lang="ts">
interface Props {
  show: boolean;
}

defineEmits(['close']);

const props = defineProps<Props>();
</script>

<template>
  <transition name="modal">
    <div v-if="show" class="modal-mask" @click="$emit('close')">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <slot name="header"></slot>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">OK</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import 'ModalWindow.scss';
</style>
