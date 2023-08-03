<script setup lang="ts">
interface Props {
  type?: string;
  modelValue: string;
  placeholder: string;
}
const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue']);

const updateInputValue = (e) => {
  emit('update:modelValue', e.target.value);
};

const isFocused = ref(false);

const onFocus = () => {
  isFocused.value = true;
};

const onBlur = () => {
  isFocused.value = false;
};
</script>

<template>
  <div class="form-group">
    <label
      :for="props.placeholder"
      :class="isFocused || modelValue.length > 0 ? 'focused' : ''"
      class="form-label"
      >{{ props.placeholder }}</label
    >
    <input
      :value="modelValue"
      @input="updateInputValue"
      :id="props.placeholder"
      class="form-input"
      :type="props.type ?? 'text'"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'Input.scss';
</style>
