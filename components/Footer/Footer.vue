<template>
  <footer class="container">
    <div class="footer-top">
      <div class="wrapper-left">
        <FooterColumn
          heading="Экосистема"
          :links="[
            { text: 'Фаундеры', href: '/ecosystem' },
            { text: 'Экспертное сообщество', href: '/ecosystem' },
            { text: 'Клуб бизнес-ангелов', href: '/ecosystem' },
          ]"
        />
        <FooterColumn heading="Сервисы" :links="[]" />
        <FooterColumn
          heading="Технологии"
          :links="[
            { text: 'Технологические вызовы', href: '/technologies' },
            { text: 'Технологические компании ', href: '/technologies' },
          ]"
        />
        <FooterColumn
          heading="Еще"
          :links="[
            { text: 'Новости', href: 'more' },
            { text: 'Мероприятия', href: 'more' },
            { text: 'Контакты', href: 'more' },
          ]"
        />
      </div>
      <div class="wrapper-btn">
        <CommonEllipsisButton
          href="#"
          text="Электронная почта"
          type="link"
          :style="{
            padding: '10px 20px',
            width: '100%',
            justifyContent: 'space-between',
          }"
        />
        <CommonEllipsisButton
          href="#"
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
          href="#"
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
      <CommonText text="2023" size="s" theme="gray" />
      <!-- <CommonLangSwitcher /> -->
      <a href="#">
        <CommonText text="Политика конфиденциальности" size="s" theme="gray" />
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './Footer.scss';
</style>
