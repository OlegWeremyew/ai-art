<script setup lang="ts">
import {checkDeviceOS} from "~/composables";
import {PATHS} from "~/composables/constants";

const isDesktop = ref<boolean>(true)
const isAndroidOS = ref<boolean>(true)

onMounted(() => {
  isDesktop.value = checkDeviceOS().isDesktop
  isAndroidOS.value = checkDeviceOS().isAndroidOS
})

</script>

<template>
  <RedirectButton
      v-if="isDesktop"
      text="Go to links"
  />

  <button
      type="button"
      v-else
      class="prompt__link"
  >
    <a
        class="link"
        :href="isAndroidOS ? PATHS.GOGGLE_PLAY: PATHS.APP_STORE"
        target="_blank"
    >
      Open in App
    </a>
  </button>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.prompt__link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  height: 48px;
  background: $textBg;;
  border-radius: 68px;
  cursor: pointer;
  transition: 0.15s linear;
  margin: 0 auto;

  text-decoration: none;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #FFFFFF;
  outline: none;

  @include tabletBig {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -85px;
  }

  &:hover,
  &:active {
    opacity: 0.8;
  }

  @include startPhones {
    width: 100%;
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
</style>
