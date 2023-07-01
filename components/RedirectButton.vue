<script setup lang="ts">
import {goToTopPage} from "~/composables/goToTopPage";
import {useCounterStore} from "~/store/store";

const store = useCounterStore()
const {setModalVisibilityAction} = store

defineProps({
  text: String,
})

const pressButton = ():void => {
  goToTopPage()
  setModalVisibilityAction(false)
}

</script>

<template>
  <button
      class="redirect__link"
      type="button"
      @click="pressButton"
  >
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.redirect__link {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  height: 48px;
  background: $inputBg;
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

  @include tabletBig {
    margin-top: 15px;
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