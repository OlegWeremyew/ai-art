<script setup lang="ts">
import IntroTitle from "../IntroTitle";
import Input from "~/components/Creations/Input/Input.vue";
import Images from "~/components/Creations/Images/Images.vue";
</script>

<template>
  <section class="creations">
    <IntroTitle
        title="Featured Creations"
        text="GET INSPIRED"
    />
    <Input/>
    <Images/>
    <div class="bottom-line"/>
  </section>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.creations {
  width: 100%;
  height: auto;
  margin: 90px auto 0;
}

.bottom-line {
  margin-top: 20px;
  width: 100%;
  height: 1.5px;
  background: linear-gradient(to left,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0));

  @include startPhones {
    position: absolute;
    display: none;
    pointer-events: none;
  }
}
</style>
