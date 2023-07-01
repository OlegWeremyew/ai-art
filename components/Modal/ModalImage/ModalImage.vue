<script setup lang="ts">
import {useCounterStore} from "~/store/store";
const store = useCounterStore()
const activeImage = store.activeImage
</script>

<template>
  <figure class="image">
    <img class="image__img" :src="activeImage.original_image_url" :alt="activeImage.prompt" :title="activeImage.prompt">
    <figcaption class="image__prompt">
      {{activeImage.prompt}}
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.image {
  max-width: 511px;
  height: auto;
  max-height: 511px;
  border-radius: 18px;
  background-color: $innerTitleBg;
  overflow: hidden;
  display: block;
  width: auto;
  margin-right: 40px;
  pointer-events: none;

  @media (max-width: 950px) {
    width: 100%;
    height: 100%;
  }

  @include tabletBig {
    width: auto;
    margin: 0 auto;
    height: auto;
  }

  &__img {
    width: 100%;
    height: 100%;
    pointer-events: none;

    @include tabletBig {
      max-width: 100%;
      height: auto;
      width: auto;
      margin-right: 0;
    }
  }

  &__prompt {
    position: absolute;
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
