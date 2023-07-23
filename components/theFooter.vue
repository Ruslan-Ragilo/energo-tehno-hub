<script setup>
const footerColumns = [
  {
    heading: 'Экосистема',
    links: [
      { text: 'Экосистема', href: '#' },
      { text: 'Новости', href: '#' },
      { text: 'События', href: '#' },
      { text: 'Сообщество', href: '#' },
      { text: 'Контакты', href: '#' }
    ]
  },
  {
    heading: 'Люди',
    links: [
      { text: 'Фаундеры', href: '#' },
      { text: 'Эксперты', href: '#' },
      { text: 'Менторы', href: '#' },
      { text: 'Инвесторы', href: '#' },
      { text: 'Трекеры', href: '#' }
    ]
  },
  {
    heading: 'Технологии',
    links: [
      { text: 'Технологические вызовы', href: '#' },
      { text: 'Технологические идеи', href: '#' }
    ]
  },
  {
    heading: '4 раздел',
    links: [
      { text: 'Подраздел 1', href: '#' },
      { text: 'Подраздел 2', href: '#' }
    ]
  }
]

const contactsButtons = [
  { text: 'Электронная почта', href: '#' },
  { text: 'Сообщения ВКонтакте', href: '#' },
  { text: 'Чат-бот', href: '#' },
  { text: 'Сотрудничество', href: '#' }
]
</script>

<template>
  <footer>
    <div class="footer-top">
      <div class="wrapper-left">
        <div v-for="(column, columnIndex) in footerColumns" :key="columnIndex" class="links-footer">
          <p>{{ column.heading }}</p>
          <div class="wrapper-bottom-links">
            <a v-for="(link, linkIndex) in column.links" :key="linkIndex" :href="link.href">{{ link.text }}</a>
          </div>
        </div>
      </div>
      <div class="wrapper-btn">
        <ElementsElemetButtonWithArrow
          v-for="(item, index) in contactsButtons"
          :key="index"
          :on-click="() => console.log('asdasd')"
          :href="item.href"
          :text="item.text"
          :is-link="item.isLink"
        />
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-bottom-text">
        2023
      </p>
      <ElementsElementTogglerLang />
      <a class="footer-bottom-text" href="#">Политика конфиденциальности</a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    font-family: Onest;
    max-width: 1440px;
    margin: 0 auto;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;

    .footer-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .wrapper-left {
        width: 50%;
        display: flex;
        justify-content: space-between;
      }

      .links-footer {
        & > p {
          color: #111;
          font-size: 20px;
        }

        .wrapper-bottom-links {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;

          a {
            color: #666;
            font-size: 14px;
          }
        }
      }

      .wrapper-btn {
        width: 36%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
    }

    .footer-bottom {
      margin-top: 50px;
      padding-top: 25px;
      border-top: 1px solid #DCDCDC;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-text {
        color: #666;
        font-size: 14px;
      }
    }
  }
</style>
