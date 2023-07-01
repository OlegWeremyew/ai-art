<script setup lang="ts">
import {PATHS} from '~/composables/constants'
</script>

<template>
  <div class="links">
    <a class="link" :href="PATHS.PRIVACY_POLICY" target="_blank">Privacy Policy</a>
    <div class="icons">
      <a :href="PATHS.FACEBOOK" class="link__icon" target="_blank">
        <img
            src="~assets/images/icons/facebook.svg"
            alt="facebook icon"
            title="facebook link"
            loading="lazy"
        >
      </a>
      <a :href="PATHS.INSTAGRAM" class="link__icon" target="_blank">
        <img
            src="~assets/images/icons/instagram.svg"
            alt="instagram icon"
            title="instagram link"
            loading="lazy"
        >
      </a>
      <a :href="PATHS.TIKTOK" class="link__icon" target="_blank">
        <img
            class="img__link"
            src="~assets/images/icons/tik-tok.png"
            alt="tik-tok icon"
            title="tik-tok link"
            loading="lazy"
        >
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.links {
  display: flex;
  align-items: center;

  @include tabletBig {
    flex-direction: column;
    align-items: center;
  }
}

.link {
  display: block;
  color: $mainColor;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  opacity: 0.3;
  text-decoration: none;
  margin-right: 69.7px;
  outline: none;
  transition: 0.05s linear;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    transform: scale(0.95);
  }

  @include tabletBig {
    margin: 30px auto 17.5px;
  }
}

.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 108px;

  img {
    pointer-events: none;
  }
}

.link__icon {
  cursor: pointer;
  transition: 0.1s linear;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(1.1);
  }
}

.img__link{
  opacity: 0.3;
  width: 28px;
  height: 28px;
  margin-left: -3px;
}
</style>
