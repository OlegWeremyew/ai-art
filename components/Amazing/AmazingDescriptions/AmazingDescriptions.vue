<script setup lang="ts">

</script>

<template>
  <p class="description__text">
    Simply describe your idea with words, and AI will transform it into a visual masterpiece. Join us today to
    unlock endless artistic possibilities with AI.
  </p>
  <Links/>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.description__text {
  margin-top: 20px;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.16px;
  color: $secondColor;

  @media (max-width: 1200px){
    margin-top: 40px;
  }

  &::selection {
    background-color: $selectionBg;
  }
}
</style>