<template>
  <div class="features">
    <div class="container">

      <Feature
          description="Unlock your full potential and generate as many pieces of art as you want!"
          rectangle="first"
      >
        <strong>Unlimited</strong> art creation
      </Feature>

      <Feature
          description="Generate pro-level designs/visuals for your website, blog, or business."
          rectangle="second"
      >
        <strong>High-quality</strong> image
      </Feature>

      <Feature
          description="Generate pro-level designs/visuals for your website, blog, or business."
          rectangle="third"
      >
          <strong>Fast</strong> image processing
      </Feature>

    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.features {
  padding-top: 35px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.container {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  max-width: 1294px;

  @include tabletSmall {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  strong {
    color: $mainColor;
  }
}
</style>
<script>
import Feature from "~/components/Choice/features/feature/Feature";

export default {
  components: {Feature}
}
</script>
