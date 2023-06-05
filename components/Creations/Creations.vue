<template>
  <section class="creations">
    <IntroTitle
        title="Featured Creations"
        text="GET INSPIRED"
    />
  </section>
</template>

<script>
import IntroTitle from "../IntroTitle";

export default {
  components: {IntroTitle}
}
</script>

<style scoped lang="scss">
@import "assets/styles/variables";

.creations {
  width: 100%;
  margin: 90px auto 0;
}
</style>