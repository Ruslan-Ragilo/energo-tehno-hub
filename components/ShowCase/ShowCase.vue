<template>
  <div class="wrapper">
    <section class="section">
      <CommonSectionHeader
        headingText="Витрина технологических задач"
        titleText="Узнайте, какие технологии интересны отрасли"
      >
        <div class="circle-button">
          <CommonButtonCircle type="link" to="/" text="Смотреть все задачи" />
        </div>
      </CommonSectionHeader>
      <div class="wrapper-cards">
        <ShowCaseCard
          heading="Реагенты для нефтепереработки"
          text="Новые виды реагентов для извлечения нефтепродуктов на разных этапах"
          url-image="/_nuxt/assets/images/backgrounds/showcase/reagents.png"
        />
        <ShowCaseCard
          heading="Присадки для смазочных масел"
          text="Присадки, которые обеспечивают маслам противозадирные свойства"
          url-image="/_nuxt/assets/images/backgrounds/showcase/additives.png"
        />
        <ShowCaseCard
          heading="Водородная энергетика"
          text="Технологии, связанные с развитием водородной энергетики: от улавливания до новых способов хранения и перевозки газов"
          url-image="/_nuxt/assets/images/backgrounds/showcase/hydrogen.png"
        />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import 'ShowCase.scss';
</style>
