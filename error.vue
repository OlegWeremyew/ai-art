<template>
  <div class="error">
    <div class="error__container">
      <h2 class="error__title">
        Page not found
      </h2>
      <p class="error__text">
        Please check your address for correctness or return to the start page
      </p>

      <div class="error__link">
        <NuxtLink class="link" to="/">Return home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/styles/variables";

.error {
  width: 100%;
  min-height: 100vh;
  background-color: $bodyBg;
  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    background-color: $inputBg;
    padding: 40px;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    text-align: center;
    background: linear-gradient(180deg, #FFFFFF 22.5%, rgba(255, 255, 255, 0.7) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 64px;
  }

  &__text {
    margin-top: 20px;
    max-width: 703px;
    height: 72px;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.16px;
    color: $secondColor;
  }

  &__link {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 193px;
    height: 48px;
    background: $textBg;
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(1px);
    border-radius: 68px;
    cursor: pointer;
    transition: 0.15s linear;

    text-decoration: none;
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
    outline: none;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.9);
    }

    .link {
      text-decoration: none;
      font-family: 'SF Pro Display', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      text-align: center;
      color: #FFFFFF;
      outline: none;
    }
  }
}

</style>
