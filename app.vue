<template>
  <main class="main">
    <NuxtPage/>
    <!--  <Modal/>-->
  </main>
</template>

<style lang="scss" scoped>
@import "assets/styles/normalize";
@import "assets/styles/fonts";

* {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}

.main {
  width: 100%;
  min-height: 100vh;
  background: #1E1E1E;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
<script>
import Modal from "./components/Modal";

export default {
  components: {Modal}
}
</script>