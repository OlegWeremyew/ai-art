<script setup lang="ts">
defineProps({
  description: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="item">
    <div class="top">
      <div class="bg-1">
        <div class="bg-2"></div>
      </div>
    </div>
    <div class="bottom">
      <p class="title">
        <slot/>
      </p>
      <p class="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";

.item {
  width: 32%;
  height: 302px;
  max-width: 398px;
  background: #0C0C0C;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .top {
    width: 100%;
    height: 196px;

    .bg-1 {
      width: 100%;
      height: 100%;
      background-image: url(assets/images/features/top-part.png);

      .bg-2 {
        width: 100%;
        height: 100%;
        background-image: url(assets/images/features/features-grid.png);
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  .bottom {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 32px;

    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.16px;
    color: $secondColor;

    .title {
      margin-top: 2px;
      font-size: 18px;
      line-height: 24px;

      strong {
        font-weight: 700;
        color: $mainColor;
        letter-spacing: 0;
      }
    }

    .description {
      margin-top: 8px;
      max-width: 258px;
    }
  }
}
</style>