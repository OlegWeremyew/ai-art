<script setup lang="ts">
import {showConnectionRestoredAlert, showLossOfConnectionAlert} from "~/composables";

onMounted(() => {
  window.addEventListener('online', showConnectionRestoredAlert)
  window.addEventListener('offline', showLossOfConnectionAlert)
})
</script>

<template>
  <div class="main">
    <NuxtPage/>
    <TheAppScrollToTopButton/>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/styles/normalize";
@import "assets/styles/fonts";
@import "assets/styles/mixins";
@import "assets/styles/variables";

* {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}

.main {
  width: 100%;
  min-height: 100vh;
  //background: #1E1E1E;
  background: $bodyBg;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>