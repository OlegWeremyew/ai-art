<script setup lang="ts">

import Inner from "~/components/Inner/Inner.vue";

useHead({
  title: "AI Art",
  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {hid: 'description', name: 'description', content: "Ai Art, Art, Images, Photo, Generate"}
  ],
  link: [
    {rel: 'icon', type: 'image/png', href: '/favicon.ico'}
  ]
})

</script>

<template>
  <Logo/>
  <Inner/>
</template>

<style lang="scss">
@import "assets/styles/normalize";
@import "assets/styles/fonts";
</style>