<script setup lang="ts">
import FooterLinks from "~/components/Footer/FooterLinks/FooterLinks.vue";
</script>

<template>
  <section class="footer">
    <div class="container">
      <Logo :isFooterPosition="true"/>
      <FooterLinks/>
      <div class="mobile-hidden">
        <Links isFooter/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.footer {
  width: 100%;
  max-width: 1480px;
  height: 76px;
  padding: 0 50px 40px 50px;
  background-color: transparent;
  margin: 0 auto;

  @include tabletBig {
    height: auto;
  }
}

.container {
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;

  @include tabletBig {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
}

.mobile-hidden {
  @include tabletBig {
    position: absolute;
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
