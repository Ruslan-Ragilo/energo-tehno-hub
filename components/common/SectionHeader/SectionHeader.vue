<template>
  <div class="section-wrapper">
    <div class="left">
      <CommonText
        class-name="heading"
        :text="props.headingText"
        theme="gray"
        size="s"
        weight="semi-bold"
      />
    </div>
    <div class="right">
      <CommonText
        v-if="!!props.titleText"
        class-name="title"
        :text="props.titleText"
        size="xl"
      />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  headingText: string;
  titleText?: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import 'SectionHeader.scss';
</style>
