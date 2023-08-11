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
@import "index.scss";
</style>
