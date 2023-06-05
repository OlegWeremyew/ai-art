<script setup lang="ts">
import {PATHS} from '~/composables/constants'
</script>

<template>
  <div class="links">
    <a
        class="link"
        target="_blank"
        :href="PATHS.APP_STORE"

    >
      <img class="link__img" src="~assets/images/apple-store-badge.png" alt="App store" title="App store">
    </a>
    <a
        class="link"
        target="_blank"
        :href="PATHS.GOGGLE_PLAY"
    >
      <img class="link__img" src="~assets/images/play-store-badge.png" alt="Google play" title="Google play">
    </a>
  </div>
</template>

<style scoped lang="scss">

.links {
  margin-top: 50px;
  margin-bottom: 103px;
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 50px;
}

.link {
  border: none;
  cursor: pointer;
  width: 166.69px;
  height: 50px;
  outline: none!important;
  user-select: none;
}

.link__img {
  width: 100%;
  height: 100%;
}
</style>