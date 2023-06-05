<template>
  <div class="features">
    <div class="container">

      <Feature description="Unlock your full potential and generate as many pieces of art as you want!">
        <strong>Unlimited</strong> art creation
      </Feature>

      <Feature description="Generate pro-level designs/visuals for your website, blog, or business.">
        <strong>High-quality</strong> image
      </Feature>

      <Feature description="Generate pro-level designs/visuals for your website, blog, or business.">
        <strong>Fast</strong> image processing
      </Feature>

    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";

.features {
  padding-top: 35px;
  width: 100%;
  height: auto;
  padding-bottom: 90px;
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1234px;
}
</style>
<script>
import Feature from "~/components/Choice/features/feature/Feature";

export default {
  components: {Feature}
}
</script>