<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <footer class="container">
    <div class="footer-top">
      <div class="wrapper-left">
        <FooterColumn heading="Экосистема" :links="getRoutes().ecosystem" />
        <FooterColumn
          heading="Сервисы"
          :links="[]"
          @click="() => router.push('/services')"
          :style="{ cursor: 'pointer' }"
        />
        <FooterColumn heading="Технологии" :links="getRoutes().technology" />
        <FooterColumn heading="Еще" :links="getRoutes().more" />
      </div>
      <div class="wrapper-btn">
        <CommonEllipsisButton
          href="mailto:info@techhubspb.ru"
          text="Электронная почта"
          type="link"
          :style="{
            padding: '10px 20px',
            width: '100%',
            justifyContent: 'space-between',
          }"
        />
        <CommonEllipsisButton
          href="https://vk.com/techhubspb?ysclid=ll1112b1m1886596150"
          :blank="true"
          text="Сообщения ВКонтакте"
          type="link"
          :style="{
            padding: '10px 20px',
            width: '100%',
            justifyContent: 'space-between',
          }"
        />
        <CommonEllipsisButton
          href="#"
          text="Чат-бот"
          type="link"
          :style="{
            padding: '10px 20px',
            width: '100%',
            justifyContent: 'space-between',
          }"
        />
        <CommonEllipsisButton
          href="mailto:info@techhubspb.ru"
          text="Сотрудничество"
          type="link"
          :style="{
            padding: '10px 20px',
            width: '100%',
            justifyContent: 'space-between',
          }"
        />
      </div>
    </div>
    <div class="footer-bottom">
      <CommonText text="Энерготехнохаб 2023" size="s" theme="gray" />
      <!-- <CommonLangSwitcher /> -->
      <a href="#">
        <CommonText text="Политика конфиденциальности" size="s" theme="gray" />
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "./Footer.scss";
</style>
