<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="container"></div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(24, 24, 24, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: absolute;
  width: 900px;
  height: 690px;
  left: calc(50% - 900px/2);
  top: calc(50% - 690px/2);
  background: #0B0B0B;
  border-radius: 23px;
}
</style>