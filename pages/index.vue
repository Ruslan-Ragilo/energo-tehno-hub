<template>
  <div class="container">
    <HeroBlock />
    <EnergoTechnoHub />
    <EcoSystem />
    <ShowCase />
    <DigitalCommunity />
    <Teleport to="body"><ModalYoutube /></Teleport>
  </div>
</template>

<script setup>
useHead({
  title: "Энерготехнохаб Петербург",
  meta: [
    {
      name: "description",
      content:
        "Энерготехнохаб Петербург. Мы — точка притяжения для инженеров и предпринимателей готовых запустить deep-tech стартап в энергетической отрасли.",
    },
  ],
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 50px;
  margin-bottom: 30px;

  @include lg {
    padding: 0 32px;
  }

  @include md {
    padding: 0 16px;
  }
}
</style>
