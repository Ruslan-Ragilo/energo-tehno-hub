<script setup lang="ts">
useHead({
  title: "Фаундеры | Энерготехнохаб Петербург",
  meta: [
    {
      name: "description",
      content:
        "Энерготехнохаб Петербург. Мы — точка притяжения для инженеров и предпринимателей готовых запустить deep-tech стартап в энергетической отрасли.",
    },
  ],
});

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
    experts: [],
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
  {
    id: 7,
    img: "images/foundersMock/zavod.jpg",
    title: "Саша Белый",
    link: "https://www.youtube.com/embed/FOLxhT74Vxg?si=fuu9tiDqXL__cPkr",
  },
];
</script>

<template>
  <div class="hero-wrapper-container">
    <section class="hero-wrapper">
      <FoundersHero />
      <div class="slider-wrapper">
        <div class="container slider-container padding40">
          <FoundersVideoSlider :slides="mockVideos" />
        </div>
      </div>
    </section>
  </div>
  <section class="section-margin">
    <div class="container">
      <CommonSectionHeader headingText="Фаундеры «Энерготехнохаба Петербург»" />
      <div class="cards-wrapper">
        <FoundersCard
          v-for="(card, index) in mockCards"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
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
  <section class="section-margin">
    <div class="slider-wrapper">
      <div class="container slider-container">
        <CommonSectionHeader headingText="Наши фаундеры" />
        <FoundersSlider :founders="mockFounders" />
      </div>
    </div>
  </section>
  <section class="section-margin">
    <div class="container">
      <CommonSectionHeader
        headingText="Как стать фаундером «Энерготехнохаба Петербург»?"
      />
      <FoundersBreakPoints />
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

.container.padding40 {
  height: fit-content;
  padding: 0 40px 40px;
  margin-bottom: 0;

  @include md {
    padding: 10px 0;
  }
}
.hero-wrapper-container {
  margin: 0 auto;

  padding: 0 50px;
  max-width: 1440px;
  @include lg {
    padding: 0 32px;
  }

  @include md {
    padding: 0 16px;
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
