<template>
  <section class="section">
    <CommonSectionHeader
      heading-text="Цифровое сообщество"
      title-text="Присоединяйтесь к сообществу «Энерготехнохаба Петербург» "
    />
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
        <a
          class="contacts"
          data-aos="fade-up"
          data-aos-duration="1000"
          style="display: block; height: 100%"
          target="_blank"
          href="https://t.me/techhubspb"
        >
          <DigitalCommunityCard
            style="height: 100%"
            title="Контакты"
            description="Свяжитесь с нами по любым вопросам"
            :background="{
              type: 'color',
              payload: '#666666',
              hoverColor: '#5E5E5E',
            }"
        /></a>
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
          link-color="#666666"
          description="Создан юристами для предпринимателей"
          :background="{ type: 'color', payload: '#eeeeee' }"
        />
        <a
          class="telegram"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          style="display: block; height: 100%"
          target="_blank"
          href="https://t.me/techhubspb"
        >
          <DigitalCommunityCard
            style="height: 100%"
            title="Telegram-канал"
            description="Делимся актуальным и интересным из жизни экосистемы"
            :background="{
              type: 'image',
              payload: 'images/backgrounds/digitalCommunity/telegram.png',
            }"
          />
        </a>
        <a
          class="community"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          style="display: block; height: 100%"
          target="_blank"
          href="https://vk.com/techhubspb?ysclid=ll1112b1m1886596150"
        >
          <DigitalCommunityCard
            title="Сообщество"
            style="height: 100%"
            description="Обсуждаем тренды, помогаем друг другу"
            :background="{
              type: 'image',
              payload: 'images/backgrounds/digitalCommunity/contacts.png',
            }"
            with-blur
          />
        </a>
        <a
          class="digest"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          style="display: block; height: 100%"
          target="_blank"
          href="https://telegra.ph/Dajdzhest-yanvar--iyun-2023-07-07"
        >
          <DigitalCommunityCard
            title="Дайджест"
            style="height: 100%"
            description="О самом главном за первую половину 2023 года"
            :background="{
              type: 'image',
              payload: 'images/backgrounds/digitalCommunity/digest.png',
            }"
        /></a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
@import "./DigitalCommunity";
</style>
