<script setup lang="ts">
import Choice from "~/components/Choice/Choice.vue";
import Creations from "~/components/Creations/Creations.vue";
import Amazing from "~/components/Amazing/Amazing.vue";
import {useCounterStore} from "~/store/store";
import {ComputedRef} from "vue/dist/vue";
import {checkDeviceOS} from "~/composables";

const store = useCounterStore()
const {getImgFromServer} = store
const isShowModal: ComputedRef<boolean> = computed((): boolean => store.isShowModal)

//dotenv
const config = useRuntimeConfig()
//console.log("oleg ", config.public.base_url)

useHead({
  title: "AI Art",

  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {name: 'description', content: "Ai Art site"},
    {name: 'keywords', content: "Ai Art, Art, Images, Photo, Generate"}
  ],
  link: [
    {rel: 'icon', type: 'image/png', href: '/logo.webp'}
  ]
},)

const isDesktop = ref<boolean>(true)

onMounted(() => {
  isDesktop.value = checkDeviceOS().isDesktop

  getImgFromServer()

  //console.log(process.env)
})
</script>

<template>
  <header>
    <div class="logo__wrapper" :style="{position: !isDesktop ? 'absolute' : 'fixed'}">
      <Logo v-if="!isShowModal"/>
    </div>
  </header>
  <main>
    <section class="low-bg">
      <div class="inner-bg">
        <Inner/>
        <Choice/>
      </div>
    </section>
    <Creations/>
    <Reviews/>
    <section class="amazing-bg">
      <Amazing/>
      <Footer/>
    </section>
  </main>

  <Modal/>
</template>

<style lang="scss">
@import "assets/styles/normalize";
@import "assets/styles/fonts";
@import "assets/styles/mixins";

header {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 50;
  top: 30px;
  left: 50px;

  .logo__wrapper {
    position: fixed;

    @include tabletBig {
      position: absolute !important;
    }
  }
}

.low-bg {
  max-width: 1280px;
  margin: 0 auto;
  backdrop-filter: blur(34px);
  background-image: url(assets/images/inner-blur-bg.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  @media (max-width: 844px) {
    background-image: url(assets/images/inner-blur-bg-mobile.webp);
  }
}

.inner-bg {
  backdrop-filter: blur(34px);
  background-image: url(assets/images/inner-bg.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom 60px;
}

.amazing-bg {
  background-image: url(assets/images/amazing-bg.webp);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;

  @include tabletSmall {
    background-image: url(assets/images/amazing-bg-mobile.webp);
    background-size: cover;
  }
}
</style>
