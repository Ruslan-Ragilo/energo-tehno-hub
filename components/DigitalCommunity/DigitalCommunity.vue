<template>
  <section class="section">
    <div class="sectionHeader">
      <DigitalCommunityHeading />
      <DigitalCommunityTitle />
    </div>
    <div class="cardContainer">
      <div :class="['cell', 'top-left']">
        <DigitalCommunityCard
          title="Новости"
          description="Читайте новости"
          :background="{type: 'color', payload: 'Blue'}"
        />
        <DigitalCommunityCard
          title="Контакты"
          description="Свяжитесь с нами по любым вопросам"
          :background="{type: 'color', payload: '#666666'}"
        />
      </div>
      <div :class="['cell', 'top-right']">
        <DigitalCommunityCard
          title="События"
          description="Встречи, состязания, стратегические сессии и другие мероприятия"
          :background="{type: 'image', payload: 'assets/images/backgrounds/digitalCommunity/events.png'}"
        />
      </div>
      <div :class="['cell', 'bottom-left']">
        <DigitalCommunityCard
          title="Чат-бот"
          description="Создан юристами для предпринимателей"
          :background="{type: 'color', payload: '#FFFFFF'}"
        />
        <DigitalCommunityCard
          title="Telegram-канал"
          description="Делимся актуальным и интересным из жизни экосистемы"
          :background="{type: 'image', payload: 'assets/images/backgrounds/digitalCommunity/telegram.png'}"
        />
      </div>
      <div :class="['cell', 'bottom-right']">
        <DigitalCommunityCard
          title="Контакты"
          description="Обсуждаем тренды, помогаем друг другу"
          :background="{type: 'image', payload: 'assets/images/backgrounds/digitalCommunity/contacts.png'}"
        />
        <DigitalCommunityCard
          title="Дайджест"
          description="О самом главном за первую половину 2023 года"
          :background="{type: 'image', payload: 'assets/images/backgrounds/digitalCommunity/digest.png'}"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import "./DigitalCommunity";
</style>
