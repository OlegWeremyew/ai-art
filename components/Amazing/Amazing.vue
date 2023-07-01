<script setup lang="ts">
import AmazingImages from "~/components/Amazing/AmazingImages/AmazingImages.vue";
import AmazingDescriptions from "~/components/Amazing/AmazingDescriptions/AmazingDescriptions.vue";
</script>

<template>
  <section class="wrapper">
    <div class="amazing">
      <div class="description">
        <h2 class="description__title">
          Create Amazing
          <br>
          Art with AI
        </h2>
        <div class="wrapper-desktop">
          <AmazingDescriptions/>
        </div>
      </div>
      <AmazingImages/>
      <div class="wrapper-mobile">
        <AmazingDescriptions/>
      </div>
    </div>
    <div class="amazing-ellipse-bg"/>
  </section>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.wrapper {
  position: relative;
  width: 100%;
}

.amazing {
  max-width: 1580px;
  margin: 0 auto;
  padding: 0 90px 183px 90px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0 27px;
  }

  @include startPhones {
    padding: 0 13px 0 23px;
  }
}

.description {
  margin-right: 30px;
  margin-top: 238px;
  width: 479px;
  height: 296px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1200px) {
    align-items: center;
    width: 100%;
    margin: 50px auto 0;
    height: auto;
  }

  &__title {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 64px;

    background: linear-gradient(180deg, #FFFFFF 22.5%, rgba(255, 255, 255, 0.7) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media (max-width: 1200px) {
      text-align: center;
    }

    @include tabletSmall{
      font-size: 44px;
      line-height: 53px;
    }

    @media (max-width: 390px) {
      text-align: left;
    }

    &::selection {
      background-color: $selectionBg;
    }
  }
}

.wrapper-desktop {
  display: block;

  @media (max-width: 1200px) {
    position: absolute;
    display: none;
    pointer-events: none;
  }
}

.wrapper-mobile {
  display: none;
  position: absolute;
  pointer-events: none;

  @media (max-width: 1200px) {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
  }
}

.amazing-ellipse-bg {
  position: absolute;
  width: 974.56px;
  height: 365.35px;
  right: 0;

  background-color: rgba(223, 23, 255, 0.15);
  mix-blend-mode: exclusion;
  filter: blur(73.5px);
  transform: rotate(7.36deg);
  top: 200px;
}
</style>
