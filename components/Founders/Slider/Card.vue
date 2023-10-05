<script setup lang="ts">
export interface Founder {
  id: string | number;
  name: string;
  img: string;
  link: string;
  position: string;
  title: string;
  text: string;
  experts: string[];
}

defineProps<{ founder: Founder }>();
</script>

<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div
        class="flip-card-front"
        :style="{
          backgroundImage: `url(${founder.img})`,
        }"
      >
        <div class="card-bottom-container front">
          <CommonText :text="founder.name" theme="white" size="ml" />
          <CommonLinkArrow color="#ffffff" />
        </div>
      </div>
      <div class="flip-card-back">
        <div class="text-wrapper">
          <CommonText
            :text="founder.name"
            theme="white"
            size="ml"
            class-name="name"
          />
          <CommonText
            :text="founder.position"
            theme="white"
            size="m"
            class-name="position"
          />
          <p class="title">
            {{ founder.title }}
          </p>
          <CommonText
            :text="founder.text"
            theme="white"
            size="m"
            class-name="text"
          />
        </div>
        <div class="card-bottom-container back">
          <div class="experts">
            <p
              v-if="founder?.experts && founder?.experts?.length"
              class="experts-text"
            >
              Эксперты
            </p>
            <div
              v-if="founder?.experts && founder?.experts?.length"
              class="experts-container"
            >
              <img
                v-for="exp in founder.experts"
                :key="exp"
                :src="exp"
                alt="Expert"
                width="42"
                height="42"
                class="experts-img"
              />
            </div>
          </div>
          <CommonLinkArrow
            color="#ffffff"
            :style="{
              transform: 'rotate(180deg)',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./Card.scss";
</style>
