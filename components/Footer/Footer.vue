<template>
  <footer>
    <div class="footer-top">
      <div class="wrapper-left">
        <FooterColumn
          heading="Экосистема"
          :links="[
            { text: 'Экосистема', href: '#' },
            { text: 'Новости', href: '#' },
            { text: 'События', href: '#' },
            { text: 'Сообщество', href: '#' },
            { text: 'Контакты', href: '#' }
          ]"
        />
        <FooterColumn
          heading="Люди"
          :links="[
            { text: 'Технологические вызовы', href: '#' },
            { text: 'Технологические идеи', href: '#' }
          ]"
        />
        <FooterColumn
          heading="Технологии"
          :links="[
            { text: 'Экосистема', href: '#' },
            { text: 'Новости', href: '#' },
            { text: 'События', href: '#' },
            { text: 'Сообщество', href: '#' },
            { text: 'Контакты', href: '#' }
          ]"
        />
        <FooterColumn
          heading="4 раздел"
          :links="[
            { text: 'Подраздел 1', href: '#' },
            { text: 'Подраздел 2', href: '#' }
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
