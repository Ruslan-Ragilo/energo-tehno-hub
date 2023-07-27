<template>
  <section class="section">
    <CommonSectionHeader
      headingText="Цифровое сообщество"
      titleText="Присоединяйтесь к сообществу «Энерготехнохаба Петербург» "
    >
    </CommonSectionHeader>
    <div class="cards-wrapper">
      <div class="cards-container">
        <DigitalCommunityCard
          class="news"
          title="Новости"
          description="Читайте новости"
          :background="{
            type: 'image',
            payload:
              '/_nuxt/assets/images/backgrounds/digitalCommunity/news.jpg',
          }"
        />

        <DigitalCommunityCard
          class="contacts"
          title="Контакты"
          description="Свяжитесь с нами по любым вопросам"
          :background="{ type: 'color', payload: '#666666' }"
        />
        <DigitalCommunityCard
          class="events"
          title="События"
          description="Встречи, состязания, стратегические сессии и другие мероприятия"
          :background="{
            type: 'image',
            payload:
              '/_nuxt/assets/images/backgrounds/digitalCommunity/events.jpg',
          }"
        />
        <DigitalCommunityCard
          class="chatBot"
          title="Чат-бот"
          :theme="['dark', 'gray']"
          linkColor="#666666"
          description="Создан юристами для предпринимателей"
          :background="{ type: 'color', payload: '#eeeeee' }"
        />
        <DigitalCommunityCard
          class="telegram"
          title="Telegram-канал"
          description="Делимся актуальным и интересным из жизни экосистемы"
          :background="{
            type: 'image',
            payload: 'assets/images/backgrounds/digitalCommunity/telegram.png',
          }"
        />
        <DigitalCommunityCard
          class="community"
          title="Сообщество"
          description="Обсуждаем тренды, помогаем друг другу"
          :background="{
            type: 'image',
            payload: 'assets/images/backgrounds/digitalCommunity/contacts.png',
          }"
        />
        <DigitalCommunityCard
          class="digest"
          title="Дайджест"
          description="О самом главном за первую половину 2023 года"
          :background="{
            type: 'image',
            payload: 'assets/images/backgrounds/digitalCommunity/digest.png',
          }"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
@import './DigitalCommunity';
</style>
