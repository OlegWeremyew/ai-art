<script setup lang="ts">
import {useCounterStore} from "~/store/store";
import {ComputedRef} from "vue";

const store = useCounterStore()
const {setSearchValue, getImgFromServer} = store
const searchValue: ComputedRef<string> = computed((): string => store.searchValue)

const searchInput = ref<HTMLInputElement | null>(null)

const setBlur = (): void => {
  searchInput?.value?.blur()
}

const updateSearchInputValue = ({target}: any): void => {
  const value = target.value.trim()

  if (value) {
    setSearchValue(value)
    return;
  }
}

const clearSearchValue = (): void => {
  setSearchValue('')

  setTimeout(() => {
    getImgFromServer()
    console.log('empty')
  }, 1000)
}

const getImagesByEnterPress = (): void => {
  getImgFromServer()
}

</script>

<template>
  <div class="input-wrapper">
    <div class="input-container">
      <input
          ref="searchInput"
          name="search"
          class="input"
          type="text"
          placeholder="Search for image"
          autocomplete="off"
          maxlength="500"
          :value="searchValue"
          @input="updateSearchInputValue"
          :disabled="false"
          @keydown.esc="setBlur"
          @keydown.enter="getImagesByEnterPress"
      >
      <transition
          enter-active-class="cross__start"
          enter-from-class="cross__start"
          enter-to-class="cross__end"
          leave-active-class="cross__end"
          leave-from-class="cross__end"
          leave-to-class="cross__start"
      >
        <button
            v-if="searchValue"
            class="clear__input"
            type="reset"
            @click.prevent="clearSearchValue"
        ></button>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.input-wrapper {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.input-container {
  width: 710px;
  position: relative;

  @include tabletBig {
    width: 560px;
  }

  @include startPhones {
    width: calc(100% - 60px);
    max-width: 440px;
    margin: 0 auto;
  }
}

.input {
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  background-color: $inputBg;
  background-image: url(assets/images/icons/magnifer.svg);
  background-repeat: no-repeat;
  background-size: 24px 24px;
  border: 2px solid transparent;
  background-position: left 20px center;
  padding: 0 60px;
  margin: 0 auto;

  color: $mainColor;
  font-family: 'SF Pro Display Light', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border: 2px solid $textBg;
  }

  &::selection {
    background-color: $selectionBg;
  }
}

.clear__input {
  cursor: pointer;
  position: absolute;
  z-index: 1;
  right: 7px;
  top: 7px;
  background-color: transparent;
  border: none;
  font-size: 0;
  width: 34px;
  height: 34px;
  background-image: url(assets/images/icons/close.svg);
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s linear;
  border-radius: 50%;

  &:hover {
    background-color: $innerTitleBg;
    //rotate: 90deg;
  }

  &:active {
    transform: scale(0.85);
  }

  &--category {
    right: 205px;
    top: 8px;
  }

  @media (max-width: 744px) {
    right: 70px;
  }
}

.cross__start {
  opacity: 0;
  transform: scale(0.3);
  transition: 0.35s linear all;
}

.cross__end {
  opacity: 2;
  transform: scale(1);
  transition: 0.3s linear all;
}
</style>
