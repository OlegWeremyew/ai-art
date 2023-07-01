<script setup lang="ts">
import {getSlideImage, getStarsImage} from "~/composables";

const props = defineProps({
  slide: {
    type: Object,
    required: true
  },
  class: {
    type: String,
    required: false
  }
})

</script>

<template>
  <div
      class="review"
      :class="{rtl: props.class}"
  >
    <div class="review__intro">
      <img
          class="review__avatar"
          :src="getSlideImage(props.slide.avatar)"
          loading="lazy"
          :alt="slide.name +  ' avatar'"
          :title="slide.name +  ' avatar'"
      >
      <div class="review__info">
        <p class="review__user-name">{{ slide.name }}</p>
        <img
            loading="lazy"
            class="review__rate"
            :src="getStarsImage(slide.rate)"
            alt="application rate"
            title="application rate"
        >
      </div>
    </div>

    <p class="review__text">
      {{ slide.text }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.review {
  cursor: grab;
  display: flex;
  flex-direction: column;
  width: 398px;
  min-height: 174px;
  margin: 10px 10px 0 0;

  background: rgba(12, 12, 12, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;

  &.rtl {
    direction: ltr;
  }

  @media (max-width: 1200px) {
    width: 418px;
  }

  @media (max-width: 1100px) {
    width: 398px;
  }

  @include tabletBig {
    width: 100%;
    margin: 10px 0 0 0;
  }

  @media (max-width: 800px) {
    width: 95%;
    height: auto;
    margin: 0 auto;
  }

  @media (max-width: 414px) {
    padding: 20px;
  }

  &__intro {
    display: flex;
    margin-bottom: 16px;
  }

  &__avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-right: 10px;
    user-select: none;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__user-name {
    margin-top: 2px;
    margin-bottom: 7px;
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: $mainColor;

    &::selection {
      background-color: $selectionBg;
    }
  }

  &__rate {
    width: 50px;
    height: 10px;
    user-select: none;
  }

  &__text {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: $secondColor;

    &::selection {
      background-color: $selectionBg;
    }

    @media (max-width: 414px) {
      font-size: 12.5px;
    }
  }
}
</style>