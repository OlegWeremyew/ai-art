<script setup lang="ts">
import {PATHS} from '~/composables/constants'

defineProps({
  isFooter: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <div
      class="links"
      :class="{small: isFooter}"
  >
    <a
        class="link"
        :class="{smallLink: isFooter}"
        target="_blank"
        :href="PATHS.APP_STORE"
    >
      <img
          class="link__img"
          src="~assets/images/apple-store-badge.webp"
          loading="lazy"
          alt="App store"
          title="App store"
      >
    </a>
    <a
        class="link"
        :class="{smallLink: isFooter}"
        target="_blank"
        :href="PATHS.GOGGLE_PLAY"
    >
      <img
          class="link__img"
          src="~assets/images/play-store-badge.webp"
          loading="lazy"
          alt="Google play"
          title="Google play"
      >
    </a>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/mixins";

.links {
  margin-top: 50px;
  margin-bottom: 103px;
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 50px;

  @include tabletBig {
    margin-top: 40px;
  }
}

.small {
  margin-top: 0;
  width: 210px;
  height: 30px;
  margin-right: 15px;

  @include tabletBig {
    margin-right: 0;
  }
}

.link {
  border: none;
  cursor: pointer;
  width: 166.69px;
  height: 50px;
  outline: none !important;
  user-select: none;
  transition: 0.05s linear;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
}

.smallLink {
  width: 100px;
  height: 30px;
}

.link__img {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
