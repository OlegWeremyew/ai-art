<script setup lang="ts">
import Features from "~/components/Choice/features/Features.vue";
</script>

<template>
  <section class="choice">
    <div class="container">
      <div class="mouse">
        <img
            class="mouse__img"
            src="~assets/images/choice/mouse.svg"
            loading="lazy"
            alt="mouse icon"
            title="mouse icon"
        >
        <img
            class="mouse__img--mobile"
            src="~assets/images/choice/touch.svg"
            alt="touch icon"
            title="touch icon"
            loading="lazy"
        >
        <div class="mouse__line"></div>
      </div>
    </div>
    <IntroTitle
        title="Why Choose AI Arta"
        text="WE MAKE MAGIC HAPPEN"
    />
    <Features/>
    <div class="choice-ellipse-bg"/>
  </section>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.choice {
  position: relative;
  width: 100%;
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include tabletBig {
    margin-top: 51px;
  }
}

.container {
  margin: 0 auto 69.3px;

  @include tabletBig {
    margin-bottom: 88px;
  }
}

.mouse {
  pointer-events: none;
  user-select: none;

  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(1px);
  border-radius: 50%;

  &__line {
    position: absolute;
    left: 50%;
    top: 33%;
    width: 3px;
    height: 6px;
    border-radius: 1.5px;
    background-color: #fff;
    transition: all 0.2s linear;
    animation: move 1.4s infinite linear;
    user-select: none;

    @include tabletBig {
      display: none;
    }
  }

  &__img {
    pointer-events: none;
    user-select: none;
    width: 14px;
    height: 20px;

    @include tabletBig {
      display: none;
    }

    &--mobile {
      width: 11.69px;
      height: 15.19px;
      display: none;

      @include tabletBig {
        display: table;
      }
    }
  }
}

.choice-ellipse-bg {
  position: absolute;
  z-index: -1;
  width: 932px;
  height: 272px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  background: rgba(23, 116, 255, 0.2);
  filter: blur(125px);
}

@keyframes move {
  0% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, 3px);
  }
  100% {
    transform: translate(-50%, 0);
  }
}
</style>

