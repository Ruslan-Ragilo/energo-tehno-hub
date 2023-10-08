<script setup lang="ts">
interface Props {
  modelValue: boolean;
  text?: string;
}
const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const updateInputValue = (e) => {
  emit("update:modelValue", e.target.checked);
};
</script>

<template>
  <label class="cbx-container">
    <input
      type="checkbox"
      :checked="props.modelValue"
      @change="updateInputValue"
    />
    <span class="checkmark"></span>
    <p v-if="text">{{ text }}</p>
  </label>
</template>

<style lang="scss" scoped>
@import "CheckBox.scss";
</style>
