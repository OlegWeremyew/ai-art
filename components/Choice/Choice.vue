<script setup lang="ts">
import Features from "~/components/Choice/features/Features.vue";
</script>

<template>
  <section class="choice">
    <div class="container">
      <div class="mouse">
        <img class="mouse__img" src="~assets/images/choice/mouse.svg" alt="mouse icon" title="mouse icon">
      </div>
    </div>
    <IntroTitle
        title="Why Choose AI Arta"
        text="WE MAKE MAGIC HAPPEN"
    />
    <Features/>
  </section>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";

.choice {
  width: 100%;
  height: 400px;
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  margin: 0 auto 69.3px;
}

.mouse {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(1px);
  border-radius: 50%;
}
</style>

