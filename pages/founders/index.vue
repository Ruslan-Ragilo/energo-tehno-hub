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

const mockVideos = [
  {
    id: 1,
    img: "images/foundersMock/zavod.jpg",
    title: "Александр Никифоров",
    link: "https://www.youtube.com/embed/zuNSxr2azNE",
  },
  {
    id: 2,
    img: "images/foundersMock/zavod.jpg",
    title: "Маруся Нижняя",
    link: "https://www.youtube.com/embed/l-OqVTkmPKU?si=rnXlVJp4josyTT1D",
  },
  {
    id: 3,
    img: "images/foundersMock/zavod.jpg",
    title: "Ротая Сафиру",
    link: "https://www.youtube.com/embed/VpaGrVlrLNk?si=QZI7gag7oHXygIFC",
  },
  {
    id: 4,
    img: "images/foundersMock/zavod.jpg",
    title: "Вася Пупкин",
    link: "https://www.youtube.com/embed/-iiuZsG8HRc?si=d70huSegRWl-iiiv",
  },
  {
    id: 5,
    img: "images/foundersMock/zavod.jpg",
    title: "Бандитский Петербург",
    link: "https://www.youtube.com/embed/XucJoMOkrvQ?si=4Zg1XJfh21oTp-1v",
  },
  {
    id: 6,
    img: "images/foundersMock/zavod.jpg",
    title: "Космос Витальевич",
    link: "https://www.youtube.com/embed/8AK_iiXD9jA?si=CwD7T6T-EPZ83msD",
  },
  // {
  // id: 7,
  //   img: "images/foundersMock/zavod.jpg",
  //   title: "Саша Белый",
  //   link: "https://www.youtube.com/embed/FOLxhT74Vxg?si=fuu9tiDqXL__cPkr",
  // },
];
</script>

<template>
  <section class="hero-wrapper">
    <div class="container">
      <FoundersHero />
    </div>
    <div class="slider-wrapper">
      <div class="container slider-container">
        <FoundersVideoSlider :slides="mockVideos" />
      </div>
    </div>
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
    <div class="slider-wrapper">
      <div class="container slider-container">
        <CommonSectionHeader headingText="Наши фаундеры" />
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
  <Teleport to="body"><ModalYoutube /></Teleport>
</template>

<style scoped lang="scss">
.slider-wrapper {
  overflow-x: hidden;
  overflow-y: visible;
}
.container.slider-container {
  overflow-x: hidden;
  overflow-y: visible;
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
