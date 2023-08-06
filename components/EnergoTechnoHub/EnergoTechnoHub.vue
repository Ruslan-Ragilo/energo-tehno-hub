<script setup>
// eslint-disable-next-line no-undef
const titleText = ref(
  'Мы — точка притяжения для инженеров/nи предпринимателей, готовых запустить /ndeep-tech стартап в энергетической отрасли.',
);
</script>

<template>
  <section class="section">
    <CommonSectionHeader
      headingText="Энерготехнохаб Петербург"
      :style="{ marginBottom: '100px' }"
    >
      <CommonText
        v-for="text in titleText.split('/n')"
        class-name="title-wrapper"
        :text="text"
        :key="text"
        size="xl"
      />
      <div class="circle-button">
        <CommonButtonCircle type="link" to="/" text="Узнать о нас больше" />
      </div>

      <div class="numbers-table">
        <div class="numbers-table-block">
          <EnergoTechnoHubTextCard
            leftText="100"
            rightText="технологических идей"
          />
          <EnergoTechnoHubTextCard
            leftText="50"
            rightText="млн рублей привлеченного финансирования"
          />
        </div>
        <div class="numbers-table-block">
          <EnergoTechnoHubTextCard
            leftText="7"
            rightText="сервисов поддержки"
          />
          <EnergoTechnoHubTextCard
            leftText="100"
            rightText="участников экосистемы"
          />
        </div>
      </div>
    </CommonSectionHeader>
    <div class="slides">
      <EnergoTechnoHubSlideCard
        @click="openStartupModal"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        :titles="['Станьте фаундером']"
        text="Мы поможем выбрать актуальную идею, собрать команду и сделать первые шаги на пути к собственному технологическому бизнесу.  "
        image="/images/backgrounds/tehcnoHub/hub1.jpg"
      />

      <EnergoTechnoHubSlideCard
        @click="openExperienceModal"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        :titles="['Присоединяйтесь', 'с командой']"
        image="/images/backgrounds/tehcnoHub/hub2.jpg"
        text="Уже есть команда, технология, прототип? Привлекайте инвестиции и выводите бизнес на рынок ТЭК с нашими сервисами поддержки."
      />
      <EnergoTechnoHubSlideCard
        @click="() => console.log(123)"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        :titles="['Познакомьтесь', 'с нашими фаундерами']"
        image="/images/backgrounds/tehcnoHub/hub3.jpg"
        text="Узнайте больше об участниках «Энерготехнохаба Петербург» и технологиях, которые они создают."
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'EnergoTechnoHub.scss';
</style>
