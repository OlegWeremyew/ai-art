<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

</script>

<template>
  <div class="intro">
    <div class="inner-container">
      <p class="inner-text">
        {{ text }}
      </p>
    </div>
    <h2 class="inner-title">{{ title }}</h2>
  </div>

</template>


<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'SF Pro Display', sans-serif;
}

.inner-container {
  min-width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 16px;
  background: $innerTitleBg;
  border: 1px solid rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(1px);
  border-radius: 17.8px;
}

.inner-text {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1.12px;
  text-transform: uppercase;
  color: $mainColor;

  &::selection {
    background-color: $selectionBg;
  }
}

.inner-title {
  position: relative;
  z-index: 3;
  font-family: 'SF Pro Display Semibold', sans-serif;
  margin-top: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 64px;
  background: linear-gradient(180deg, #FFFFFF 22.5%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @include tabletSmall{
    font-size: 36px;
    line-height: 64px;
  }

  &::selection {
    background-color: $selectionBg;
  }
}
</style>