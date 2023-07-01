<script setup lang="ts">
import Review from "~/components/Reviews/Review/Review.vue";
import {sliderArray, secondSliderArray} from "~/composables/constants/sliderData";

const sliderElementsSize = ref<number>(3)
const firstSliderDirection = ref<'vertical' | 'horizontal'>('horizontal')

onMounted(() => {
  if (window.innerWidth <= 1200) {
    sliderElementsSize.value = 2.55
    firstSliderDirection.value = 'horizontal'
  }

  if (window.innerWidth <= 950) {
    sliderElementsSize.value = 2.15
    firstSliderDirection.value = 'horizontal'
  }

  if (window.innerWidth <= 800) {
    sliderElementsSize.value = 4
    firstSliderDirection.value = 'vertical'
    return
  }

  window.addEventListener('resize', () => {

    if (window.innerWidth <= 800) {
      sliderElementsSize.value = 4
      firstSliderDirection.value = 'vertical'
      return
    }

    if (window.innerWidth <= 950) {
      sliderElementsSize.value = 2.15
      firstSliderDirection.value = 'horizontal'
      return;
    }

    if (window.innerWidth <= 1200) {
      sliderElementsSize.value = 2.55
      firstSliderDirection.value = 'horizontal'
      return;
    }

    firstSliderDirection.value = 'horizontal'
    sliderElementsSize.value = 3
  })
})

</script>

<template>
  <section class="reviews">
    <IntroTitle
        title="What Our Users Say"
        text="JOIN THE COMMUNITY"
    />
    <div class="reviews__container">
      <Swiper
          class="slider-my"
          :modules="[SwiperAutoplay]"
          :slides-per-view="sliderElementsSize"
          :direction="firstSliderDirection"
          :loop="true"
          :effect="'creative'"
          :followFinger="true"
          :space-between="20"
          :speed="1000"
          :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
          }"
          :lazy="{
            loadPrevNext: true,
            loadPrevNextAmount: 2
          }"
      >
        <SwiperSlide
            :key="slide.id"
            class="slider-my__item"
            v-for="slide in sliderArray"
        >
          <Review :slide="slide"/>
        </SwiperSlide>
      </Swiper>
      <Swiper
          class="slider-my slider-my--second"
          :modules="[SwiperAutoplay]"
          :slides-per-view="sliderElementsSize"
          :loop="true"
          :effect="'creative'"
          :followFinger="true"
          :space-between="20"
          :speed="1000"
          :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
          }"
      >
        <SwiperSlide
            :key="slide.id"
            class="slider-my__item"
            v-for="slide in secondSliderArray"
        >
          <Review :slide="slide" class="rtl"/>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="reviews-ellipse-bg--top"/>
    <div class="reviews-ellipse-bg--bottom"/>
  </section>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.reviews {
  position: relative;
  margin-top: 90px;
  display: flex;
  flex-direction: column;

  @include startPhones {
    margin-top: 50px;
  }

  &__container {
    position: relative;
    z-index: 2;
    margin-top: -5px;
    margin-bottom: 45px;
    width: 100%;
  }

  .reviews-ellipse-bg--bottom {
    position: absolute;
    z-index: 0;
    bottom: 0;
    width: 986px;
    height: 332px;
    left: -254px;

    background: rgba(23, 116, 255, 0.2);
    filter: blur(125px);

    @include tabletBig {
      left: -400px;
    }

    @include tabletBig {
      left: -600px;
    }
  }

  .reviews-ellipse-bg--top {
    position: absolute;
    z-index: 0;
    width: 986px;
    height: 260px;
    right: 0;
    top: 40px;

    background: rgba(125, 23, 255, 0.3);
    mix-blend-mode: exclusion;
    filter: blur(125px);

    @include tabletBig {
      right: -400px;
    }

    @include tabletBig {
      right: -600px;
    }
  }
}

.slider-my {
  margin: 20px auto 0;
  width: 100%;
  max-width: 1260px;

  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 15px;
    padding-left: 50px;
  }

  @media (max-width: 800px) {
    height: 750px;
    width: 100%;
    max-width: 550px;
    margin: 10px auto;
    padding-left: 0;
  }

  @include startPhones {
    height: 750px;
  }

  &--second {
    pointer-events: auto;
    position: static;
    display: flex;
    margin-top: 10px;
    direction: rtl;

    @media (max-width: 800px) {
      display: none;
      pointer-events: none;
      position: absolute;
    }
  }

  &__item {
    width: auto;
  }
}

</style>
