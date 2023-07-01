<script setup lang="ts">
</script>

<template>
  <section class="inner">
    <div class="inner-img__1">
      <img
          src="~assets/images/inner/inner-1.webp"
          loading="lazy"
          alt="star wars"
          title="star wars"
      >
    </div>
    <div class="inner-img__2">
      <img
          src="~assets/images/inner/inner-2.webp"
          alt="astronaut"
          title="astronaut"
          loading="lazy"
      >
    </div>
    <div class="inner-img__3">
      <img
          src="~assets/images/inner/inner-3.webp"
          alt="beautiful park"
          title="beautiful park"
          loading="lazy"
      >
    </div>
    <div class="inner-img__4">
      <img
          src="~assets/images/inner/inner-4.webp"
          alt="cute cat"
          title="cute cat"
          loading="lazy"
      >
    </div>
    <div class="inner-img__5">
      <img
          src="~assets/images/inner/inner-5.webp"
          alt="beautiful woman"
          title="beautiful woman"
          loading="lazy"
      >
    </div>
    <div class="inner-img__6">
      <img
          src="~assets/images/inner/inner-6.webp"
          alt="night landscape"
          title="night landscape"
          loading="lazy"
      >
    </div>
    <div class="inner-img__7">
      <img
          src="~assets/images/amazing/amazing-2.webp"
          alt="night landscape"
          title="night landscape"
          loading="lazy"
      >
    </div>
    <div class="inner-img__8">
      <img
          src="~assets/images/features/img-left.webp"
          alt="night landscape"
          title="night landscape"
          loading="lazy"
      >
    </div>
    <div class="wrapper">
      <h1 class="inner__title">Create Masterpieces With AI</h1>
      <p class="inner__text">
        AI Arta is a revolutionary app that helps you create art with words using advanced AI algorithms. Made for
        artists, designers, and art enthusiasts, this app invites you to give freedom to your creativity and experiment
        with artistic ideas. Join us and explore the limitless possibilities of AI-generated art!
      </p>
      <Links/>
    </div>

  </section>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.inner {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.wrapper {
  font-family: 'SF Pro Display', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inner__title {
  margin-top: 291px;
  text-align: center;
  background: linear-gradient(180deg, $mainColor 22.5%, rgba($mainColor, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 64px;

  @include tabletBig {
    margin: 190px auto 0;
    width: 80%;
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 53px;
  }

  &::selection {
    background-color: $selectionBg;
  }
}

.inner__text {
  margin: 20px auto 0;
  width: 703px;
  height: 72px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.16px;
  color: $secondColor;

  @include tabletBig {
    width: 85%;
    max-width: 700px;
    height: auto;
  }

  &::selection {
    background-color: $selectionBg;
  }
}


//first visibility animations

.inner-img__1,
.inner-img__2,
.inner-img__3,
.inner-img__4,
.inner-img__5,
.inner-img__6,
.inner-img__7,
.inner-img__8 {
  pointer-events: none;
  position: absolute;
  animation: Animations 0.7s linear;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;

  img {
    width: 100%;
    height: 100%;
  }

  @include startPhones {
    display: none;
  }
}

.inner-img__1 {
  left: 3.5%;
  top: 267px;
  width: 12vw;
  height: 12vw;

  min-width: 117px;
  min-height: 117px;

  max-width: 163px;
  max-height: 163px;

  @include tabletSmall {
    top: 350px;
  }
}

.inner-img__2 {
  left: 23.8%;
  top: 140px;
  width: 7.4vw;
  height: 7.4vw;

  min-width: 57px;
  min-height: 57px;
  animation-delay: 0.85s;

  max-width: 95px;
  max-height: 95px;

  @include tabletBig {
    top: 100px;
  }
}

.inner-img__6 {
  right: 28.9%;
  top: 75px;
  width: 7.4vw;
  height: 7.4vw;

  min-width: 57px;
  min-height: 57px;
  animation-delay: 1.4s;

  max-width: 95px;
  max-height: 95px;
}

.inner-img__3 {
  right: 8.5%;
  top: 459px;
  width: 12vw;
  height: 12vw;

  min-width: 117px;
  min-height: 117px;
  animation-delay: 1s;

  max-width: 163px;
  max-height: 163px;
}

.inner-img__4 {
  left: 13.8%;
  top: 524px;
  width: 7.4vw;
  height: 7.4vw;

  min-width: 57px;
  min-height: 57px;
  animation-delay: 1.6s;

  max-width: 95px;
  max-height: 95px;

  @include tabletSmall {
    left: 27.8%;
  }
}

.inner-img__5 {
  right: 3.8%;
  top: 202px;
  width: 7.6vw;
  height: 7.6vw;

  min-width: 57px;
  min-height: 57px;
  animation-delay: 2s;

  max-width: 95px;
  max-height: 95px;
}

.inner-img__7 {
  left: 22.3%;
  top: 752px;
  width: 70px;
  height: 80px;

  animation: AnimationsSkewLeft 1.4s linear;
  animation-fill-mode: forwards;
  animation-delay: 2.4s;

  @include tabletBig {
    left: 18.8%;
  }

  @media (max-width: 1279px){
    display: none;
  }
}

.inner-img__8 {
  right: 21.6%;
  top: 703px;
  width: 70px;
  height: 47px;
  opacity: 0;

  animation: AnimationsSkewRight 1.4s linear;
  animation-fill-mode: forwards;
  animation-delay: 2.4s;

  max-width: 80px;
  max-height: 80px;

  @include tabletBig {
    top: 765px;
    right: 17.7%;
  }

  @media (max-width: 1279px){
    display: none;
  }
}

@keyframes Animations {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }

  60% {
    opacity: 1;
    transform: scale(1.4);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes AnimationsSkewLeft {
  0% {
    opacity: 0;
    transform: scale(0.6) skew(0);
  }

  30% {
    opacity: 1;
    transform: scale(1.4);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 1;
    transform: scale(1.75, 0.28) skew(-15deg);
  }
}

@keyframes AnimationsSkewRight {
  0% {
    opacity: 0;
    transform: scale(0.6) skew(0);
  }

  30% {
    opacity: 1;
    transform: scale(1.4);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 1;
    transform: scale(1.3, 0.25) skew(18deg);
  }
}
</style>
