<script setup lang="ts">
defineProps({
  isFooterPosition: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <figure
      class="logo"
      :class="{column : isFooterPosition}"
  >
    <img
        class="logo__img"
        src="~assets/images/icons/logo.webp"
        alt="Ai Art logo"
        title="AI Art logo"
        loading="lazy"
    />
    <figcaption class="logo__text">Ai Art</figcaption>
  </figure>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.logo {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98px;
  height: 36px;
  user-select: none;
  pointer-events: none;
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

.column {
  @include tabletBig {
    height: 68px;
    flex-direction: column;

    .logo__text {
      margin-top: 8px;
      margin-bottom: 30px;
    }
  }
}
</style>