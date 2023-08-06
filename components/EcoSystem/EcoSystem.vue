<!-- eslint-disable no-undef -->
<script setup>
onMounted(() => {
  const cards = document.querySelectorAll('.card-eco');
  const wrapperSlider = document.querySelector('.wrapper-slider');
  const heigthCard = cards[0].clientHeight + 2;
  let translate = 0;
  function isElementInViewport(el) {
    const elInView = el.getBoundingClientRect();
    return (
      elInView.top >= 0 &&
      // elInView.left >= 0 &&
      elInView.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
      // && elInView.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const debounceDelay = 200; // Измените это значение по своему усмотрению

  let timerId;

  function handleWheel(event) {
    // Очищаем предыдущий таймер, если он существует
    clearTimeout(timerId);

    // Устанавливаем новый таймер
    timerId = setTimeout(() => {
      // Вставьте ваш код обработки события колесика мыши здесь
      // ...
      if (isElementInViewport(wrapperSlider)) {
        // Дополнительные действия, когда скролл доходит до элемента...
        // document.body.style.overflow = 'hidden'

        if (event.deltaY < 0 && translate !== 0) {
          if (
            cards[0].getBoundingClientRect().top !==
            wrapperSlider.getBoundingClientRect().top
          ) {
            translate = translate + heigthCard;
            // for (let i = 0; i < cards.length; i++) {
            //   if(wrapperSlider.getBoundingClientRect().top !==  cards[i].getBoundingClientRect().top) {
            //     cards[i].style.bottom = `${translate}px`
            //   }
            // }
          } else {
            document.body.style.overflowY = 'scroll';
          }
        } else if (event.deltaY > 0) {
          if (
            cards[cards.length - 1].getBoundingClientRect().top !==
            wrapperSlider.getBoundingClientRect().top
          ) {
            translate = translate - heigthCard;

            // for (let i = 0; i < cards.length; i++) {
            //   console.log(wrapperSlider.getBoundingClientRect().top !== cards[i].getBoundingClientRect().top)
            //   if(wrapperSlider.getBoundingClientRect().top !==  cards[i].getBoundingClientRect().top) {
            //     cards[i].style.top = `${translate}px`
            //   }
            // }
          } else {
            document.body.style.overflowY = 'scroll';
          }
        }
      }
      // Очистка таймера, после того как событие было обработано
      clearTimeout(timerId);
    }, debounceDelay);
  }

  window.addEventListener('wheel', (e) => handleWheel(e));
});
</script>

<template>
  <section class="section">
    <CommonSectionHeader
      heading-text="Экосистема возможностей"
      title-text="Станьте участником «Энерготехнохаба Петербург» и получи доступ к сервисам поддержки своего стартапа"
    >
      <div class="circle-button">
        <CommonButtonCircle
          type="button"
          :onClick="openStartupModal"
          text="Присоединиться"
        />
      </div>
    </CommonSectionHeader>
    <div class="slider-box">
      <div class="empty"></div>
      <div class="wrapper-slider">
        <div v-for="(item, index) in 6" :key="index" class="card-eco">
          <p class="top-index">
            {{ `(0${item})` }}
          </p>
          <CommonText
            text="Открывайте бизнес при поддержке юристов, маркетологов и бизнес-аналитиков"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'EcoSystem.scss';
</style>
