<!-- eslint-disable no-undef -->
<script setup lang="ts">
interface Props {
  type?: string;
  modelValue: string;
  placeholder: string;
  tagType?: 'input' | 'textarea';
}
const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue']);

const updateInputValue = (e) => {
  emit('update:modelValue', e.target.value);
};

const isFocused = ref(false);
const labelEl = ref();

const onFocus = (e) => {
  isFocused.value = true;
  e.target.style.backgroundColor = '#eeee';
  e.target.style.borderRadius = 30 + 'px';
  labelEl.value.style.marginLeft = 0 + 'px';
  labelEl.value.style.backgroundColor = '#fff';
};

const onBlur = (e) => {
  isFocused.value = false;
  e.target.style.backgroundColor = 'transparent';
  e.target.style.borderRadius = 0 + 'px';
  labelEl.value.style.marginLeft = 0 + 'px';
  labelEl.value.style.backgroundColor = 'transparent';
};

const mouseover = (e) => {
  labelEl.value.style.marginLeft = 10 + 'px';
};

const mouseleave = (e) => {
  labelEl.value.style.marginLeft = 0 + 'px';
};
</script>

<template>
  <div v-if="props.tagType === 'textarea'" class="form-group">
    <label
      :for="props.placeholder"
      ref="labelEl"
      :class="isFocused || modelValue.length > 0 ? 'focused' : ''"
      class="form-label"
      >{{ props.placeholder }}</label
    >
    <textarea
      :id="props.placeholder"
      rows="5"
      class="form-textarea"
      :value="(modelValue as string)"
      @input="updateInputValue"
      @focus="onFocus($event)"
      @blur="onBlur($event)"
      @mouseover="mouseover($event)"
      @mouseleave="mouseleave($event)"
    />
  </div>
  <div v-else class="form-group">
    <label
      ref="labelEl"
      :for="props.placeholder"
      :class="isFocused || modelValue.length > 0 ? 'focused' : ''"
      class="form-label"
      >{{ props.placeholder }}</label
    >
    <input
      :id="props.placeholder"
      :type="props.type ?? 'text'"
      class="form-input"
      :value="modelValue"
      @input="updateInputValue"
      @focus="onFocus($event)"
      @blur="onBlur($event)"
      @mouseover="mouseover($event)"
      @mouseleave="mouseleave($event)"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'Input.scss';
</style>
