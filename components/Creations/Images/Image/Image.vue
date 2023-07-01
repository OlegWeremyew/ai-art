<script setup lang="ts">
defineProps({
  image: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <figure class="image">
    <img
        class="image__img"
        :src="image.original_image_url"
        loading="lazy"
        :alt="image.prompt"
        :title="image.prompt"
    >
    <figcaption class="image__text">
      {{ image.prompt }}
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.image {
  margin: 10px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 260px;
  cursor: pointer;
  transition: 0.15s linear;
  background-color: $innerTitleBg;
  border-radius: 10px;
  overflow: hidden;

  @include startPhones {
    max-width: 170px;
    max-height: 170px;
  }

  @include iPhonesBeforeX {
    width: 140px;
    height: 140px;
    margin: 5px;
  }

  &:hover {
    transform: scale(1.04);

    @include tabletBig {
      transform: scale(1);
    }
  }

  &__img {
    width: 260px;
    height: 260px;

    @include startPhones {
      max-width: 170px;
      max-height: 170px;
    }

    @include iPhonesBeforeX {
      width: 140px;
      height: 140px;
    }
  }

  &__text {
    position: absolute;
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
