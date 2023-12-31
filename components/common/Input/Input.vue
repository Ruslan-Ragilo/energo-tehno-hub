<!-- eslint-disable no-undef -->
<script setup lang="ts">
import { IMaskComponent } from "vue-imask";
interface Props {
  type?: string;
  modelValue: string;
  label: string;
  placeholder?: string;
  tagType?: "input" | "textarea" | "phoneMask";
  errorMessage?: string;
}
const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const updateInputValue = (e) => {
  emit("update:modelValue", e.target.value);
};

const isFocused = ref(false);
const labelEl = ref();

const onFocus = (e) => {
  isFocused.value = true;
  labelEl.value.style.marginLeft = 0 + "px";
  labelEl.value.style.backgroundColor = "#fff";
};

const onBlur = (e) => {
  isFocused.value = false;
  labelEl.value.style.marginLeft = 0 + "px";
  labelEl.value.style.backgroundColor = "transparent";
};

const mouseover = (e) => {
  labelEl.value.style.marginLeft = 10 + "px";
};

const mouseleave = (e) => {
  labelEl.value.style.marginLeft = 0 + "px";
};
</script>

<template>
  <div
    v-if="props.tagType === 'textarea'"
    class="form-group"
    :class="{ error: !!props.errorMessage }"
  >
    <label
      ref="labelEl"
      :for="props.label"
      :class="isFocused || modelValue.length > 0 ? 'focused' : ''"
      class="form-label textarea"
      >{{ props.label }}</label
    >
    <textarea
      :id="props.label"
      rows="5"
      class="form-textarea"
      :placeholder="props.placeholder"
      :value="(modelValue as string)"
      @input="updateInputValue"
      @mouseover="mouseover($event)"
      @mouseleave="mouseleave($event)"
    />
    <p class="counter">{{ `${modelValue.length}/350` }}</p>
    <p v-if="props.errorMessage" class="error-message">
      {{ props.errorMessage }}
    </p>
  </div>
  <div
    v-else-if="props.tagType === 'input'"
    class="form-group"
    :class="{ error: !!props.errorMessage }"
  >
    <label
      ref="labelEl"
      :for="props.label"
      :class="isFocused || modelValue.length > 0 ? 'focused' : ''"
      class="form-label"
      >{{ props.label }}</label
    >
    <input
      :id="props.label"
      :type="props.type ?? 'text'"
      class="form-input"
      :placeholder="props.placeholder"
      :value="modelValue"
      @input="updateInputValue"
      @focus="onFocus($event)"
      @blur="onBlur($event)"
      @mouseover="mouseover($event)"
      @mouseleave="mouseleave($event)"
    />
    <p v-if="props.errorMessage" class="error-message">
      {{ props.errorMessage }}
    </p>
  </div>
  <div v-else class="form-group" :class="{ error: !!props.errorMessage }">
    <label
      ref="labelEl"
      :for="props.label"
      :class="isFocused || modelValue.length > 0 ? 'focused' : ''"
      class="form-label"
      >{{ props.label }}</label
    >
    <IMaskComponent
      :id="props.label"
      :type="props.type ?? 'text'"
      class="form-input"
      :placeholder="props.placeholder"
      :value="modelValue"
      :mask="'+{7}(000)000-00-00'"
      placeholder-char="#"
      radix="."
      :unmask="true"
      @input="updateInputValue"
      @focus="onFocus($event)"
      @blur="onBlur($event)"
      @mouseover="mouseover($event)"
      @mouseleave="mouseleave($event)"
      @accept="onAccept"
    />
    <p v-if="props.errorMessage" class="error-message">
      {{ props.errorMessage }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "Input.scss";
</style>
