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
          data-aos="fade-up"
          data-aos-duration="1000"
          class="news"
          title="Новости"
          description="Читайте новости"
          :background="{
            type: 'image',
            payload: '/images/backgrounds/digitalCommunity/news.jpg',
          }"
        />

        <DigitalCommunityCard
          data-aos="fade-up"
          data-aos-duration="1000"
          class="contacts"
          title="Контакты"
          description="Свяжитесь с нами по любым вопросам"
          :background="{
            type: 'color',
            payload: '#666666',
            hoverColor: '#5E5E5E',
          }"
        />
        <DigitalCommunityCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          class="events"
          title="События"
          description="Встречи, состязания, стратегические сессии и другие мероприятия"
          :background="{
            type: 'image',
            payload: '/images/backgrounds/digitalCommunity/events.jpg',
          }"
        />
        <DigitalCommunityCard
          data-aos="fade-up"
          data-aos-duration="1000"
          class="chatBot"
          title="Чат-бот"
          :theme="['dark', 'gray']"
          linkColor="#666666"
          description="Создан юристами для предпринимателей"
          :background="{ type: 'color', payload: '#eeeeee' }"
        />
        <DigitalCommunityCard
          data-aos="fade-up"
          data-aos-duration="1000"
          class="telegram"
          title="Telegram-канал"
          description="Делимся актуальным и интересным из жизни экосистемы"
          :background="{
            type: 'image',
            payload: 'images/backgrounds/digitalCommunity/telegram.png',
          }"
        />
        <DigitalCommunityCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          class="community"
          title="Сообщество"
          description="Обсуждаем тренды, помогаем друг другу"
          :background="{
            type: 'image',
            payload: 'images/backgrounds/digitalCommunity/contacts.png',
          }"
          withBlur
        />
        <DigitalCommunityCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          class="digest"
          title="Дайджест"
          description="О самом главном за первую половину 2023 года"
          :background="{
            type: 'image',
            payload: 'images/backgrounds/digitalCommunity/digest.png',
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
