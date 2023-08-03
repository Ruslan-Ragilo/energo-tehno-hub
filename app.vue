<!-- eslint-disable no-undef -->
<script setup>
import 'aos/dist/aos.css';
import AOS from 'aos';

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <Header />
  <main>
    <NuxtPage />
  </main>
  <Footer />
</template>

<style lang="scss">
@import 'app.scss';
</style>
