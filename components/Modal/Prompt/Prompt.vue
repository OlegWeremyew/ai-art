<script setup lang="ts">
import ControlButton from "~/components/Modal/ControlButton/ControlButton.vue";
import {ImageType, useCounterStore} from "~/store/store";
import {setValueInClipboard} from "~/composables";

const store = useCounterStore()
const {setSearchValue, setModalVisibilityAction, setClipboardPromptDataVisibility} = store

const activeImage: ImageType = store.activeImage

const promptArray = activeImage.prompt.split(" ")

const copyPrompt = (): void => {
  setValueInClipboard(activeImage.prompt)
  setClipboardPromptDataVisibility("Prompt")
}

const shareImage = (): void => {
  setValueInClipboard(activeImage.original_image_url)
  setClipboardPromptDataVisibility("Link")
}

const clickOnPromptWord = (word: string): void => {
  setSearchValue(word)
  setModalVisibilityAction(false)
}

</script>

<template>
  <div class="prompt">
    <div class="prompt__top">
      <p class="text">
        <span
            class="word"
            v-for="(prompt, index) in promptArray"
            :key="index"
            @click="clickOnPromptWord(prompt)"
        >
          {{ prompt }}
        </span>
      </p>

      <div class="active">
        <button class="active__button" type="button" @click="copyPrompt">
          <img class="active__image" src="~assets/images/icons/copy.svg" alt="copy icon">Copy Prompt
        </button>
        <button class="active__button" type="button" @click="shareImage">
          <img class="active__image" src="~assets/images/icons/share.svg" alt="share icon">Share
        </button>
      </div>
    </div>

    <ControlButton />

  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.prompt {
  width: 369px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include tabletBig {
    width: 100%;
  }

  &__top {
    min-height: 222px;
    background-color: $innerTitleBg;
    border-radius: 10px;
    padding: 20px 20px 15px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include tabletBig {
      margin-top: 16px;
      padding: 20px;
      min-height: 122px;
    }

    .text {
      word-break: break-all;
      font-family: 'SF Pro Display', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: $mainColor;

      .word {
        cursor: pointer;
        margin-right: 4px;

        &::selection {
          background-color: $selectionBg;
        }
      }
    }
  }
}

.active {
  margin-top: 16px;
  display: flex;

  &__button {
    height: 29px;
    margin-right: 10px;
    background: $buttonBg;
    border-radius: 35px;
    border: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;

    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: $mainColor;

    transition: all 0.15s linear;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  &__image {
    width: 11.67px;
    height: 11.67px;
    margin-right: 11.3px;
    user-select: none;
    pointer-events: none;
  }
}
</style>
