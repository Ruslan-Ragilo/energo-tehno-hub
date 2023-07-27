<template>
  <div class="hero-wrapper">
    <div class="hero-left">
      <div class="hero-left-top">
        <h1
          data-aos="fade-up" 
          class="hero-title"
        >
          Создай свой<br>
          бизнес в <br>энергетике
        </h1>
        <CommonButtonCircle
          data-aos="fade-up"
          data-aos-duration="1000" 
          type="link"
          to="/"
          text="Рассказать о себе"
        />
      </div>
      <div class="hero-left-bottom">
        <div class="card card-left">
          <nuxt-link
            to="/"
            class="card-link"
          >
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
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.167 13.3335V5.8335H6.66699"
                  stroke="#ffffff"
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
          </nuxt-link>
        </div>
        <div
          class="card card-right"
        >
          <p
            data-aos="fade-up"
            class="large-text"
          >
            50+
          </p>
          <p
            data-aos="fade-up"
            class="small-text"
          >
            менторов <br>
            и экспертов
          </p>
          <CommonButtonCircle
            data-aos-duration="1000"
            data-aos="fade-up"
            type="link"
            to="/"
            text="узнать больше"
            color="#fafafa"
          />
        </div>
      </div>
    </div>
    <div class="hero-right">
      <div class="description">
        <p class="text">
          «Место, где верят в твои идеи» с резидентами «Энерготехнохаба
          Петербург»
        </p>
        <button class="play-button">
          <img
            src="/images/icons/play.svg"
            alt="play"
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'HeroBlock.scss';
</style>
