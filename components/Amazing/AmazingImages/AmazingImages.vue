<script setup lang="ts">

</script>

<template>
  <div class="amaz-images">
    <figure class="amazing-img amazing-img--1">
      <img
          class="amazing-img__img"
          src="~assets/images/amazing/amazing-1.webp"
          loading="lazy"
          alt="Beautiful girl"
          title="Beautiful girl"
      >
      <figcaption class="amazing__text amazing__text--1">Beautiful girl</figcaption>
    </figure>
    <div class="second-block">
      <figure class="amazing-img  amazing-img--2">
        <img
            class="amazing-img__img"
            src="~assets/images/amazing/amazing-2.webp"
            loading="lazy"
            alt="Lost in forest"
            title="Lost in forest"
        >
        <figcaption class="amazing__text amazing__text--2">Lost in forest</figcaption>
      </figure>
      <figure class="amazing-img">
        <img
            class="amazing-img__img"
            src="~assets/images/amazing/amazing-3.webp"
            loading="lazy"
            alt="Nebula city"
            title="Nebula city"
        >
        <figcaption class="amazing__text amazing__text--3">Nebula city</figcaption>
      </figure>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.amaz-images {
  margin: 160px auto 0;
  display: flex;
  justify-content: center;
  max-width: 538px;
  max-height: 451px;

  @media (max-width: 1200px) {
    margin: 86px auto 0;
  }

  @include tabletBig {
    width: 100%;
    max-width: 538px;
    padding: 0;
    height: auto;
  }

  @include tabletSmall {
    border-radius: 10px;
  }
  
  @media (max-width: 414px) {
    max-height: 313px;
  }

  .amazing-img {
    position: relative;
    pointer-events: none;
    user-select: none;
    width: 100%;

    &--1 {
      margin-right: 20px;

      @include tabletSmall {
        margin-right: 10px;
      }
    }

    &--2 {
      margin-bottom: 20px;

      @include tabletSmall {
        margin-bottom: 10px;
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      min-height: 216px;

      @media (max-width: 414px) {
        min-height: auto;
      }
    }
  }

  .amazing__text {
    position: absolute;
    z-index: 6;
    background-color: $textBg;
    padding: 8px 29px;
    border-radius: 33px;

    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.16px;
    color: $mainColor;

    @media (max-width: 375px) {
      padding: 6px 22px;
      font-size: 14px;
      line-height: 20px;
    }

    &--1 {
      top: -33px;
      left: -39px;
      transform: rotate(-4.93deg);

      @include tabletSmall {
        left: -17px;
      }
    }

    &--2 {
      top: 45px;
      right: -63px;
      transform: rotate(2.94deg);

      @include tabletSmall {
        top: -14px;
        right: 12px;
      }
    }

    &--3 {
      bottom: -25px;
      right: 25px;
      transform: rotate(2.94deg);
    }
  }
}

.second-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
</style>
