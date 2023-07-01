<script setup lang="ts">
import Image from './Image/Image.vue'
import {ImageType, useCounterStore} from "~/store/store";
import {ComputedRef} from "vue/dist/vue";
import {array} from "~/composables/constants";

const store = useCounterStore()
const {setModalVisibilityAction, setActiveImage, updateImagesList, changeLimitValue} = store
const images: ComputedRef<ImageType[]> = computed((): ImageType[] => store.images)

const clickOnImage = (img: ImageType): void => {
  setModalVisibilityAction(true)
  setActiveImage(img)
}

const intersect = ref<null | Element>(null)

onMounted( async () => {
  await nextTick()
  const observer = new IntersectionObserver( () => {
    changeLimitValue()
    updateImagesList()
  });

  observer.observe(intersect.value as Element);
})

</script>

<template>
  <div class="images">

    <template v-if="images.length">
      <Image
          v-for="image in images"
          :key="image.image_url"
          :image="image"
          @click="clickOnImage(image)"
      />
    </template>
    <template v-else>
      <Image
          v-for="image in array"
          :key="image.image_url"
          :image="image"
          @click="clickOnImage(image)"
      />
    </template>
    <div class="intersect" ref="intersect"></div>

  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.images {
  margin: 30px auto 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1118.5px;
  max-height: 550px;
  overflow-y: scroll;

  @include tabletBig {
    max-width: 580px;
  }

  @include startPhones {
    max-width: 90%;
    max-height: 570px;
    width: 370px;
  }

  @include iPhonesBeforeX {
    max-width: 310px;
    max-height: 450px;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    width: 100%;
    border-radius: 3px;
  }

  .intersect {
    position: relative;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    width: 100%;
    height: 100px;
    margin-top: -200px;
  }
}
</style>
