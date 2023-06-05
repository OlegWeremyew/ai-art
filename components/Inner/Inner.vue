<script setup lang="ts">
</script>

<template>
  <section class="inner">
    <div class="wrapper">
      <h1 class="inner__title">Create Masterpieces With AI</h1>
      <p class="inner__text">
        AI Arta is a revolutionary app that helps you create art with words using advanced AI algorithms. Made for
        artists, designers, and art enthusiasts, this app invites you to give freedom to your creativity and experiment
        with artistic ideas. Join us and explore the limitless possibilities of AI-generated art!
      </p>

      <Links/>

    </div>

  </section>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";

.inner {
  width: 100%;
  display: flex;
  justify-content: center;
}

.wrapper {
  font-family: 'SF Pro Display', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inner__title {
  margin-top: 291px;
  text-align: center;
  background: linear-gradient(180deg, #FFFFFF 22.5%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 64px;
}

.inner__text {
  margin-top: 20px;
  max-width: 703px;
  height: 72px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.16px;
  color: $secondColor;
}
</style>