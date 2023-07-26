<script setup>
const titleText = ref(
  'Мы — точка притяжения для инженеров/nи предпринимателей, готовых запустить /ndeep-tech стартап в энергетической отрасли.',
);
</script>

<template>
  <section class="section">
    <CommonSectionHeader headingText="Энерготехнохаб Петербург">
      <CommonText
        v-for="text in titleText.split('/n')"
        class-name="title-wrapper"
        :text="text"
        :key="text"
        size="xl"
      />
      <div class="circle-button">
        <CommonButtonCircle type="link" to="/" text="Узнать о нас больше" />
      </div>

      <div class="grid-table">
        <!-- TODO -->
      </div>
    </CommonSectionHeader>
  </section>
</template>

<style lang="scss" scoped>
@import 'EnergoTechnoHub.scss';
</style>
