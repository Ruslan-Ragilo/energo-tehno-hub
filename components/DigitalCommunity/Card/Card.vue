<template>
  <div
    class="card"
    :style="
      props.background.type === 'color'
        ? { backgroundColor: props.background.payload }
        : {}
    "
  >
    <img
      v-if="props.background.type === 'image'"
      :src="props.background.payload"
      alt="image"
      class="card-image"
    />
    <div v-if="props.background.type === 'image'" class="card-gradient" />
    <div v-if="props.background.type === 'color'" class="card-color"></div>
    <CommonText
      :text="props.title"
      :theme="props.theme && props.theme.length > 0 ? props.theme[0] : 'white'"
      size="xl"
      :style="{ position: 'relative', zIndex: 11 }"
    />
    <div class="description">
      <CommonText
        class-name="descriptionText"
        :text="props.description"
        :theme="
          props.theme && props.theme.length > 0
            ? props.theme.length > 1
              ? props.theme[1]
              : props.theme[0]
            : 'white'
        "
        :style="{ position: 'relative', zIndex: 11 }"
      />
      <div class="descriptionLink">
        <CommonLinkArrow :color="props.linkColor ?? '#fafafa'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  theme?: ('black' | 'dark' | 'gray' | 'white' | 'light')[];
  linkColor?: string;
  background: {
    type: 'image' | 'color';
    payload: string;
    hoverColor?: string;
  };
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import 'Card.scss';
</style>
