<template>
  <div class="wrapper">
    <section class="section">
      <CommonSectionHeader
        headingText="Витрина технологических задач"
        titleText="Узнайте, какие технологии интересны отрасли"
      >
        <div class="circle-button">
          <CommonButtonCircle
            type="link"
            to="/services"
            text="Смотреть все задачи"
          />
        </div>
      </CommonSectionHeader>
      <div class="wrapper-cards">
        <ShowCaseCard
          @click="() => console.log(123)"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          heading="Реагенты для нефтепереработки"
          text="Новые виды реагентов для извлечения нефтепродуктов на разных этапах"
          url-image="/images/backgrounds/showcase/reagents.png"
        />
        <ShowCaseCard
          @click="() => console.log(123)"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          heading="Присадки для смазочных масел"
          text="Присадки, которые обеспечивают маслам противозадирные свойства"
          url-image="/images/backgrounds/showcase/additives.png"
        />
        <ShowCaseCard
          @click="() => console.log(123)"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          heading="Водородная энергетика"
          text="Технологии, связанные с развитием водородной энергетики: от улавливания до новых способов хранения и перевозки газов"
          url-image="/images/backgrounds/showcase/hydrogen.png"
        />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "ShowCase.scss";
</style>
