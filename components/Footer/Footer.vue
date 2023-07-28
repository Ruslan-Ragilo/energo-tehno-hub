<template>
  <footer class="container">
    <div class="footer-top">
      <div class="wrapper-left">
        <FooterColumn
          heading="Экосистема"
          :links="[
            { text: 'Фаундеры', href: '#' },
            { text: 'Экспертное сообщество', href: '#' },
            { text: 'Клуб бизнес-ангелов', href: '#' },
          ]"
        />
        <FooterColumn
          heading="Сервисы"
          :links="[]"
        />
        <FooterColumn
          heading="Технологии"
          :links="[
            { text: 'Технологические вызовы', href: '#' },
            { text: 'Технологические компании ', href: '#' },
          ]"
        />
        <FooterColumn
          heading="Еще"
          :links="[
            { text: 'Новости', href: '#' },
            { text: 'Мероприятия', href: '#' },
            { text: 'Контакты', href: '#' },
          ]"
        />
      </div>
      <div class="wrapper-btn">
        <CommonButton
          :on-click="() => console.log('asdasd')"
          href="#"
          text="Электронная почта"
          type="link"
        />
        <CommonButton
          :on-click="() => console.log('asdasd')"
          href="#"
          text="Сообщения ВКонтакте"
          type="link"
        />
        <CommonButton
          :on-click="() => console.log('asdasd')"
          href="#"
          text="Чат-бот"
          type="link"
        />
        <CommonButton
          :on-click="() => console.log('asdasd')"
          href="#"
          text="Сотрудничество"
          type="link"          
        />
      </div>
    </div>
    <div class="footer-bottom">
      <CommonText
        text="2023"
        size="s"
        theme="gray"
      />
      <!-- <CommonLangSwitcher /> -->
      <a href="#">
        <CommonText
          text="Политика конфиденциальности"
          size="s"
          theme="gray"
        />
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  @import './Footer.scss'
</style>
