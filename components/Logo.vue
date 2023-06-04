<template>
  <figure class="logo">
    <img class="logo__img" src="~assets/images/icons/logo.svg" alt="Ai Art logo" title="AI Art logo">
    <figcaption class="logo__text">Ai Art</figcaption>
  </figure>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";

.logo {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 30px;
  left: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98px;
  height: 36px;
}

.logo__img {
  width: 36px;
  height: 36px;
}

.logo__text {
  color: $mainColor;
  font-family: SF Pro Display, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}
</style>