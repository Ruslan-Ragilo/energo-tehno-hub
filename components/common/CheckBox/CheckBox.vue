<script setup lang="ts">
interface Props {
  modelValue: string;
}
const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue']);

const updateInputValue = (e) => {
  emit('update:modelValue', e.target.value);
};
</script>

<template>
  <label class="cbx-container">
    <input type="checkbox" :checked="modelValue" @change="updateInputValue" />
    <span class="checkmark"></span>
  </label>
</template>

<style lang="scss" scoped>
@import 'CheckBox.scss';
</style>
