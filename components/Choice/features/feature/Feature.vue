<script setup lang="ts">
defineProps({
  description: {
    type: String,
    required: true,
  },
  rectangle: String
})
</script>

<template>
  <div class="item">
    <div class="top">
      <div class="bg-1">
        <div class="bg-2">
          <template v-if="rectangle === 'first'">
            <div class="first-rectangle">

              <div class="grid grid-1-1"/>
              <div class="grid grid-1-2"/>
              <div class="grid grid-1-3"/>

              <div class="grid grid-1-4"/>
              <div class="grid grid-1-5"/>
              <div class="grid grid-1-6"/>


              <div class="grid grid-2-1"/>
              <div class="grid grid-2-2"/>
              <div class="grid grid-2-3"/>
              <div class="grid grid-2-4">
                <img
                    src="~assets/images/features/grid/img-1.png"
                    alt="fantasy"
                    loading="lazy"
                >
              </div>

              <div class="grid grid-2-5"/>
              <div class="grid grid-2-6"/>
              <div class="grid grid-2-7"/>


              <div class="grid grid-3-1"/>
              <div class="grid grid-3-2"/>
              <div class="grid grid-3-3"/>
              <div class="grid grid-3-4"/>

              <div class="grid grid-3-5"/>
              <div class="grid grid-3-6"/>
              <div class="grid grid-3-7"/>


              <div class="grid grid-4-1"/>
              <div class="grid grid-4-2"/>
              <div class="grid grid-4-3"/>
              <div class="grid grid-4-4"/>

              <div class="grid grid-4-5"/>
              <div class="grid grid-4-6"/>
              <div class="grid grid-4-7"/>


              <div class="grid grid-5-1">
                <img
                    src="~assets/images/features/grid/img-5.png"
                    alt="astronaut"
                    loading="lazy"
                >
              </div>
              <div class="grid grid-5-2"/>
              <div class="grid grid-5-3"/>
              <div class="grid grid-5-4"/>

              <div class="grid grid-5-5"/>
              <div class="grid grid-5-6"/>
              <div class="grid grid-5-7"/>

              <div class="main-rectangle">
                <img
                    class="inf"
                    src="~assets/images/icons/infinity.svg"
                    alt="infinity"
                    loading="lazy"
                >
              </div>
            </div>
          </template>

          <template v-else-if="rectangle === 'second'">
            <div class="second-rectangle">
              <div class="big-rec">
                <img
                    class="second"
                    src="~assets/images/features/img-center.webp"
                    alt="star wars"
                    loading="lazy"
                >
              </div>
              <div class="intro-1">
                <img
                    src="~assets/images/features/img-left.webp"
                    alt="fantasy"
                    loading="lazy"
                >
              </div>
              <div class="intro-2">
                <img
                    src="~assets/images/features/img-right.webp"
                    alt="beautiful view"
                    loading="lazy"
                >
              </div>
            </div>
          </template>

          <template v-else-if="rectangle === 'third'">
            <div class="third-rectangle">
              <img
                  class="img-1"
                  src="~assets/images/inner/inner-5.webp"
                  loading="lazy"
                  alt="beautiful woman"
              >
              <img
                  class="img-2"
                  src="~assets/images/inner/inner-4.webp"
                  alt="cute cat"
                  loading="lazy"
              >
              <img
                  class="img-3"
                  src="~assets/images/features/feature.webp"
                  alt="feature"
                  loading="lazy"
              >
              <img
                  class="img-4"
                  src="~assets/images/features/city.webp"
                  alt="city"
                  loading="lazy"
              >
              <img
                  class="img-5"
                  src="~assets/images/features/space-basketball.webp"
                  alt="space basketball"
                  loading="lazy"
              >
            </div>
          </template>

        </div>
      </div>
    </div>
    <div class="bottom">
      <p class="title">
        <slot name="default"/>
      </p>
      <p class="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.item {
  height: 302px;
  width: 398px;
  background: #0C0C0C;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 10px 10px 0 10px;
  transition: 0.15s linear;

  @media(max-width: 1024px) {
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 834px) {
    margin-top: 17px;
    width: 498px;
  }

  @media (max-width: 522px) {
    width: 90%;
    max-width: 350px;
    height: 266px;
    margin: 17px auto;
  }

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.3);

    .top {

      .bg-1 {
        background-image: url("assets/images/features/bg-light.webp");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 115%;

        .bg-2 {
          .second-rectangle {
            transform: scale(1.2);

            .big-rec,
            .intro-1,
            .intro-2 {
              img {
                visibility: visible;
                opacity: 1;
              }
            }
          }

          .third-rectangle {
            background-size: 0;

            .img-2,
            .img-3,
            .img-4,
            .img-5 {
              transition-delay: 0.5s;
            }

            .img-1 {
              opacity: 1;
              transform: rotate(0);
            }

            .img-2 {
              opacity: 1;
              transform: scale(1) translate(-160px, -25px);
            }

            .img-3 {
              opacity: 1;
              transform: scale(1) translate(0, -28px);
            }

            .img-4 {
              opacity: 1;
              transform: scale(1) translate(-140px, 43px);
            }

            .img-5 {
              opacity: 1;
              transform: scale(1) translate(20px, 55px);
            }
          }

          .first-rectangle {
            .main-rectangle {
              transform: scale(1);
              background-color: #7472ac;

              img {
                opacity: 1;
              }
            }

            .grid {
              opacity: 1;
            }

          }
        }
      }
    }
  }

  .top {
    width: 100%;
    height: 196px;

    @include tabletSmall {
      height: 172px;
    }

    .bg-1 {
      width: 100%;
      height: 100%;
      padding: 15px;
      background-image: url(assets/images/features/top-part.webp);
      background-position: center;
      transition: 0.2s linear;

      @media(max-width: 1024px) {
        background-image: url("assets/images/features/bg-light.webp");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 115%;
      }

      .bg-2 {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;
        background-image: url(assets/images/features/features-grid.webp);
        background-repeat: no-repeat;
        background-position: center;

        @include tabletSmall {
          background-size: cover;
        }
      }
    }
  }

  .bottom {
    background-color: #0c0c0c;
    position: relative;
    z-index: 10;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 32px;

    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.16px;
    color: $secondColor;

    .title {
      margin-top: 2px;
      font-size: 18px;
      line-height: 24px;

      &::selection {
        background-color: $selectionBg;
      }

      strong {
        font-weight: 700;
        color: $mainColor;
        letter-spacing: 0;

        &::selection {
          background-color: $selectionBg;
        }
      }
    }

    .description {
      margin-top: 8px;
      max-width: 258px;

      &::selection {
        background-color: $selectionBg;
      }
    }
  }
}


.first-rectangle {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  $grid-size: 42.18px;

  .main-rectangle {
    width: $grid-size;
    height: $grid-size;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    border-radius: 6px;
    transform: scale(2);
    transition: 0.2s linear;

    @media(max-width: 1024px) {
      transform: scale(1);
      background-color: #7472ac;
    }

    img {
      user-select: none;
      pointer-events: none;
      transition: 0.2s linear;
      opacity: 0;

      width: 15.39px;
      height: 7.6px;

      @media(max-width: 1024px) {
        opacity: 1;
      }
    }
  }

  .grid {
    opacity: 0;
    position: absolute;
    width: $grid-size;
    height: $grid-size;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5.27638px;
    transition: 0.2s linear;
    transition-delay: 0.2s;

    @media(max-width: 1024px) {
      opacity: 1;
    }
  }

  .grid-1-1 {
    left: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
    background-image: url(assets/images/features/grid/grid-1.png);
    top: calc(50% - $grid-size / 2);
  }

  .grid-1-2 {
    left: calc(50% - ($grid-size * 2) - $grid-size / 2 - (4.4px * 2));
    background-image: url(assets/images/features/grid/grid-1.png);
    top: calc(50% - $grid-size / 2);
  }

  .grid-1-3 {
    left: calc(50% - ($grid-size * 3) - $grid-size / 2 - (4.4px * 3));
    background-image: url(assets/images/features/grid/grid-3.png);
    top: calc(50% - $grid-size / 2);
  }

  .grid-1-4 {
    left: calc(50% + $grid-size / 2 + 4.4px);
    background-image: url(assets/images/features/grid/grid-1.png);
    top: calc(50% - $grid-size / 2);
  }

  .grid-1-5 {
    left: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
    background-image: url(assets/images/features/grid/grid-1.png);
    top: calc(50% - $grid-size / 2);
  }

  .grid-1-6 {
    left: calc(50% + ($grid-size * 2) + $grid-size / 2 + (4.4px * 3));
    background-image: url(assets/images/features/grid/grid-4.png);
    top: calc(50% - $grid-size / 2);
  }


  .grid-2-1 {
    left: calc(50% - $grid-size / 2);
    background-image: url(assets/images/features/grid/grid-2.png);
    top: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
  }

  .grid-2-2 {
    left: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
    background-image: url(assets/images/features/grid/grid-5.png);
    top: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
  }

  .grid-2-3 {
    left: calc(50% - ($grid-size * 2) - $grid-size / 2 - (4.4px * 2));
    background-image: url(assets/images/features/grid/grid-6.png);
    top: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
  }

  .grid-2-4 {
    left: calc(50% - ($grid-size * 3) - $grid-size / 2 - (4.4px * 3));
    background-image: url(assets/images/features/grid/rectangle.png);
    top: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
    background-color: rgba(180, 187, 255, 0);

    img {
      pointer-events: none;
      user-select: none;
      width: 100%;
      height: 100%;
      opacity: 0.2;
    }
  }

  .grid-2-5 {
    left: calc(50% + $grid-size / 2 + 4.4px);
    background-image: url(assets/images/features/grid/img-2.png);
    top: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
    background-color: rgba(180, 187, 255, 0);
  }

  .grid-2-6 {
    left: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
    background-image: url(assets/images/features/grid/grid-7.png);
    top: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
  }

  .grid-2-7 {
    left: calc(50% + ($grid-size * 2) + $grid-size / 2 + (4.4px * 3));
    background-image: url(assets/images/features/grid/grid-8.png);
    top: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
  }

  .grid-3-1 {
    left: calc(50% - $grid-size / 2);
    background-image: url(assets/images/features/grid/grid-10.png);
    top: calc(50% - ($grid-size * 2) - $grid-size / 2 - (3.4px * 2));
  }

  .grid-3-2 {
    left: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
    background-image: url(assets/images/features/grid/grid-12.png);
    top: calc(50% - ($grid-size * 2) - $grid-size / 2 - (3.4px * 2));
  }

  .grid-3-3 {
    left: calc(50% - ($grid-size * 2) - $grid-size / 2 - (4.4px * 2));
    background-image: url(assets/images/features/grid/grid-10.png);
    top: calc(50% - ($grid-size * 2) - $grid-size / 2 - (3.4px * 2));
  }

  .grid-3-4 {
    left: calc(50% - ($grid-size * 3) - $grid-size / 2 - (4.4px * 3));
    background-image: url(assets/images/features/grid/grid-13.png);
    top: calc(50% - ($grid-size * 2) - $grid-size / 2 - (3.4px * 2));
  }

  .grid-3-5 {
    left: calc(50% + $grid-size / 2 + 4.4px);
    background-image: url(assets/images/features/grid/grid-10.png);
    top: calc(50% - ($grid-size * 2) - $grid-size / 2 - (3.4px * 2));
  }

  .grid-3-6 {
    left: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
    background-image: url(assets/images/features/grid/grid-10.png);
    top: calc(50% - ($grid-size * 2) - $grid-size / 2 - (3.4px * 2));
  }

  .grid-3-7 {
    left: calc(50% + ($grid-size * 2) + $grid-size / 2 + (4.4px * 3));
    background-image: url(assets/images/features/grid/grid-11.png);
    top: calc(50% - ($grid-size * 2) - $grid-size / 2 - (3.4px * 2));
  }

  .grid-4-1 {
    left: calc(50% - $grid-size / 2);
    background-image: url(assets/images/features/grid/grid-14.png);
    top: calc(50% + $grid-size / 2 + 4.4px);
  }

  .grid-4-2 {
    left: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
    background-image: url(assets/images/features/grid/grid-14.png);
    top: calc(50% + $grid-size / 2 + 4.4px);
  }

  .grid-4-3 {
    left: calc(50% - ($grid-size * 2) - $grid-size / 2 - (4.4px * 2));
    background-image: url(assets/images/features/grid/img-3.png);
    top: calc(50% + $grid-size / 2 + 4.4px);
    background-color: rgba(180, 187, 255, 0);
  }

  .grid-4-4 {
    left: calc(50% - ($grid-size * 3) - $grid-size / 2 - (4.4px * 3));
    background-image: url(assets/images/features/grid/grid-15.png);
    top: calc(50% + $grid-size / 2 + 4.4px);

  }

  .grid-4-5 {
    left: calc(50% + $grid-size / 2 + 4.4px);
    background-image: url(assets/images/features/grid/grid-14.png);
    top: calc(50% + $grid-size / 2 + 4.4px);
  }

  .grid-4-6 {
    left: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
    background-image: url(assets/images/features/grid/img-4.png);
    top: calc(50% + $grid-size / 2 + 4.4px);
  }

  .grid-4-7 {
    left: calc(50% + ($grid-size * 2) + $grid-size / 2 + (4.4px * 3));
    background-image: url(assets/images/features/grid/grid-4.png);
    top: calc(50% + $grid-size / 2 + 4.4px);
  }

  .grid-5-1 {
    left: calc(50% - $grid-size / 2);
    background-image: url(assets/images/features/grid/rectangle.png);
    top: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
    background-color: rgba(180, 187, 255, 0);

    img {
      pointer-events: none;
      user-select: none;
      width: 100%;
      height: 100%;
      opacity: 0.1;
    }
  }

  .grid-5-2 {
    left: calc(50% - $grid-size - $grid-size / 2 - 4.4px);
    background-image: url(assets/images/features/grid/grid-16.png);
    top: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
  }

  .grid-5-3 {
    left: calc(50% - ($grid-size * 2) - $grid-size / 2 - (4.4px * 2));
    background-image: url(assets/images/features/grid/grid-16.png);
    top: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
  }

  .grid-5-4 {
    left: calc(50% - ($grid-size * 3) - $grid-size / 2 - (4.4px * 3));
    background-image: url(assets/images/features/grid/grid-18.png);
    top: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
  }

  .grid-5-5 {
    left: calc(50% + $grid-size / 2 + 4.4px);
    background-image: url(assets/images/features/grid/grid-16.png);
    top: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
  }

  .grid-5-6 {
    left: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
    background-image: url(assets/images/features/grid/grid-16.png);
    top: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
  }

  .grid-5-7 {
    left: calc(50% + ($grid-size * 2) + $grid-size / 2 + (4.4px * 3));
    background-image: url(assets/images/features/grid/grid-17.png);
    top: calc(50% + $grid-size + $grid-size / 2 + (4.4px * 2));
  }
}

.second-rectangle {
  position: relative;
  pointer-events: none;
  user-select: none;
  height: 86.36px;
  width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s linear;

  @media(max-width: 1024px) {
    transform: scale(1.2);
  }

  .big-rec, {
    position: absolute;
    z-index: 20;
    left: 50%;
    transform: translateX(-50%);
    width: 86.36px;
    height: 86.36px;
    border-radius: 5.18px;
    background-image: url(assets/images/features/rectangle-1.webp);

    img {
      pointer-events: none;
      user-select: none;
      transition: 0.2s linear;
      opacity: 0.5;
      visibility: hidden;
      width: 100%;
      height: 100%;

      @media(max-width: 1024px) {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .intro-1,
  .intro-2 {
    width: 69.09px;
    height: 69.09px;
    background-color: rgba(196, 196, 196, 0.2);
    backdrop-filter: blur(15px);
    border-radius: 5.18182px;
    background-image: url('assets/images/features/rectangle-2.webp');

    img {
      pointer-events: none;
      user-select: none;
      transition: 0.2s linear;
      opacity: 0.5;
      visibility: hidden;
      width: 100%;
      height: 100%;

      @media(max-width: 1024px) {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .intro-1 {
    left: -52px;
  }

  .intro-2 {
    right: -52px;
  }
}

.third-rectangle {
  position: relative;
  background-image: url(assets/images/features/circle.webp);
  background-size: 60px 60px;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.2s linear;

  @media(max-width: 1024px) {
    opacity: 1;
    background-image: none;
  }
}

.img-1 {
  pointer-events: none;
  user-select: none;

  opacity: 0;
  transform: rotate(180deg) scale(0.7);
  width: 82px;
  height: 82px;
  transition: 0.5s linear;

  @media(max-width: 1024px) {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
}

.img-2,
.img-3,
.img-4,
.img-5 {
  pointer-events: none;
  user-select: none;

  position: absolute;
  opacity: 0;
  transform: scale(0.7) translate(-120px, 0);
  width: 57px;
  height: 57px;
  transition: 0.3s linear;

  @media(max-width: 1024px) {
    opacity: 1;
  }
}

.img-2 {
  width: 62px;
  height: 62px;

  @media(max-width: 1024px) {
    opacity: 1;
    transform: scale(1) translate(-160px, -25px);
  }
}

.img-3 {
  @media(max-width: 1024px) {
    opacity: 1;
    transform: scale(1) translate(0, -28px);
  }
}

.img-4 {
  @media(max-width: 1024px) {
    opacity: 1;
    transform: scale(1) translate(-140px, 43px);
  }
}

.img-5 {
  width: 47px;
  height: 47px;

  @media(max-width: 1024px) {
    opacity: 1;
    transform: scale(1) translate(20px, 55px);
  }
}
</style>
