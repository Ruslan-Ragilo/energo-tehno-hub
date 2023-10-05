<script setup lang="ts">
const mockCards = [
  {
    text: "Имеют прямой выход на бизнес-заказчиков в нефтегазовой отрасли",
  },
  {
    text: "Работают с трекерами, менторами и экспертами отрасли",
  },
  {
    text: "Пилотируют технологии на реальных промышленных объектах энергетического сектора",
  },
  {
    text: "Привлекают государственные и частные инвестиции на первых стадиях развития стартапа",
  },
];

const mockFounders = [
  {
    id: 1,
    name: "Полина Морозова",
    img: "/images/foundersMock/guy.jpg",
    link: "asda",
    position:
      "Технология Предприниматель, основатель компании К-ПЛЮС, аспирантка Сколтеха",
    title: "Стартап",
    text: "Производство калий-ионных аккумуляторов",
    experts: [
      "/images/foundersMock/guy.jpg",
      "/images/foundersMock/guy.jpg",
      "/images/foundersMock/guy.jpg",
    ],
  },
  {
    id: 2,
    name: "Матвей Морозов",
    img: "/images/foundersMock/guy.jpg",
    link: "asda",
    position:
      "Технология Предприниматель, основатель компании К-ПЛЮС, аспирантка Сколтеха",
    title: "Стартап",
    text: "Производство калий-ионных аккумуляторов",
    experts: ["/images/foundersMock/guy.jpg", "/images/foundersMock/guy.jpg"],
  },
  {
    id: 3,
    name: "Вера Бурцева",
    img: "/images/foundersMock/guy.jpg",
    link: "asda",
    position:
      "Технология Предприниматель, основатель компании К-ПЛЮС, аспирантка Сколтеха",
    title: "Стартап",
    text: "Производство калий-ионных аккумуляторов",
    experts: [
      "/images/foundersMock/guy.jpg",
      "/images/foundersMock/guy.jpg",
      "/images/foundersMock/guy.jpg",
      "/images/foundersMock/guy.jpg",
      "/images/foundersMock/guy.jpg",
    ],
  },
  {
    id: 4,
    name: "Dff ad adf",
    img: "/images/foundersMock/guy.jpg",
    link: "asda",
    position:
      "Технология Предприниматель, основатель компании К-ПЛЮС, аспирантка Сколтеха",
    title: "Стартап",
    text: "Производство калий-ионных аккумуляторов",
    experts: [
      "/images/foundersMock/guy.jpg",
      "/images/foundersMock/guy.jpg",
      "/images/foundersMock/guy.jpg",
      "/images/foundersMock/guy.jpg",
    ],
  },
];
</script>

<template>
  <section class="hero-wrapper">
    <div class="container">
      <FoundersHero />
    </div>

    <!-- <FoundersVideoSlider /> -->
  </section>
  <section class="section-border section-margin">
    <div class="container">
      <CommonSectionHeader headingText="Фаундеры «Энерготехнохаба Петербург»" />
      <div class="cards-wrapper">
        <FoundersCard
          v-for="(card, index) in mockCards"
          :key="card.text"
          :text="card.text"
          :index="index"
          :isFirst="index === 0"
          :isLast="index + 1 === mockCards.length && (index + 1) % 2 === 0"
        />
      </div>
    </div>
  </section>
  <section class="section-margin">
    <div class="container">
      <FoundersBanner />
    </div>
  </section>
  <section class="section-border section-margin">
    <div class="container">
      <CommonSectionHeader headingText="Наши фаундеры" />
    </div>
    <div class="slider-wrapper">
      <div class="container slider-container">
        <FoundersSlider :founders="mockFounders" />
      </div>
    </div>
  </section>
  <section class="section-border section-margin">
    <div class="container">
      <CommonSectionHeader
        headingText="Как стать фаундером «Энерготехнохаба Петербург»?"
      />
      <!-- <FoundersBreakPoints /> -->
    </div>
  </section>
  <section class="section-margin">
    <div class="container">
      <SharedSubmitForm
        title1="Станьте фаундером в"
        title2="«Энерготехнохабе Петербург»"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.slider-wrapper {
  overflow-x: hidden;
}
.container.slider-container {
  background: blue;
  overflow-y: visible;
  overflow-x: hidden;
  @include lg {
    overflow-x: visible;
  }
}
.hero-wrapper {
  margin-bottom: 100px;

  background-color: #fff;
  border-radius: 20px;

  box-shadow: 0px 0px 30px 0px #12141714;

  @include lg {
    margin-bottom: 80px;
  }
  @include md {
    margin-bottom: 70px;

    background-color: transparent;
    border-radius: 0;

    box-shadow: none;
  }
}

.section-border {
  padding-top: 40px;
  border-top: 1px solid #dcdcdc;
}

.section-margin {
  margin-bottom: 140px;

  @include lg {
    margin-bottom: 80px;
  }

  @include md {
    margin-bottom: 70px;
  }
}

.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
}
</style>
