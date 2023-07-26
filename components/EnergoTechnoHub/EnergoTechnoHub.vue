<script setup>
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
        :titles="['Станьте фаундером']"
        image="/_nuxt/assets/images/backgrounds/tehcnoHub/hub1.jpg"
      >
        <div class="slides-text">
          <CommonText
            text="Мы поможем выбрать актуальную идею, собрать команду и сделать первые шаги на пути к собственному технологическому бизнесу.  "
            size="m"
            theme="light"
            :style="{ maxWidth: '294px', minWidth: '0' }"
          />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_808_226)">
                <path
                  d="M5.83301 14.1665L14.1663 5.83317"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.167 13.3335V5.8335H6.66699"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_808_226">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(1 0 0 -1 0 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </EnergoTechnoHubSlideCard>
      <EnergoTechnoHubSlideCard
        :titles="['Присоединяйтесь', 'с командой']"
        image="/_nuxt/assets/images/backgrounds/tehcnoHub/hub2.jpg"
        ><div class="slides-text">
          <CommonText
            text="Уже есть команда, технология, прототип? Привлекайте инвестиции и выводите бизнес на рынок ТЭК с нашими сервисами поддержки. "
            size="m"
            theme="light"
            :style="{ maxWidth: '294px', minWidth: '0' }"
          />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_808_226)">
                <path
                  d="M5.83301 14.1665L14.1663 5.83317"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.167 13.3335V5.8335H6.66699"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_808_226">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(1 0 0 -1 0 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div></div
      ></EnergoTechnoHubSlideCard>
      <EnergoTechnoHubSlideCard
        :titles="['Познакомьтесь', 'с нашими фаундерами']"
        image="/_nuxt/assets/images/backgrounds/tehcnoHub/hub3.jpg"
        ><div class="slides-text">
          <CommonText
            text="Узнайте больше об участниках «Энерготехнохаба Петербург» и технологиях, которые они создают. "
            size="m"
            theme="light"
            :style="{ maxWidth: '294px', minWidth: '0' }"
          />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_808_226)">
                <path
                  d="M5.83301 14.1665L14.1663 5.83317"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.167 13.3335V5.8335H6.66699"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_808_226">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(1 0 0 -1 0 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div></div
      ></EnergoTechnoHubSlideCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'EnergoTechnoHub.scss';
</style>
