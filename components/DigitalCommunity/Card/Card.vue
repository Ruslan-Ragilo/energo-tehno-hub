<template>
  <div
    class="card"
    :style="
      props.background.type === 'image'
        ? {
            backgroundImage: `url(${props.background.payload})`,
          }
        : { backgroundColor: props.background.payload }
    "
  >
    <CommonText
      :text="props.title"
      :theme="props.theme && props.theme.length > 0 ? props.theme[0] : 'white'"
      size="xl"
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
  };
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import 'Card.scss';
</style>
