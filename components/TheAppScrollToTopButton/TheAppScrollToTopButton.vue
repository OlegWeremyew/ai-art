<template>
  <transition
      enter-active-class="scroll-button__start"
      enter-from-class="scroll-button__start"
      enter-to-class="scroll-button__end"
      leave-active-class="scroll-button__end"
      leave-from-class="scroll-button__end"
      leave-to-class="scroll-button__start"
  >
    <div
        v-show="getScrollButtonVisibilityStatus"
        class="scroll__wrapper"
    >
      <div
          @click="handleScroll"
          title="scroll to page top"
          class="scroll__button"
      ></div>
    </div>
  </transition>
</template>

<script>

import {goToTopPage} from "~/composables";

export default {
  name: "TheAppScrollToTopButton",
  data: () => ({
    isShowScrollButton: false,
  }),
  computed: {
    getScrollButtonVisibilityStatus() {
      return this.isShowScrollButton
    },
  },
  methods: {
    handleScroll() {
      goToTopPage()
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        this.isShowScrollButton = true
        return;
      }

      this.isShowScrollButton = false
    })
  }
}
</script>

<style scoped lang="scss">
@import "TheAppScrollToTopButton";
</style>
