<script setup lang="ts">
import Prompt from "~/components/Modal/Prompt/Prompt.vue";
import ModalImage from "~/components/Modal/ModalImage/ModalImage.vue";
import {useCounterStore} from "~/store/store";
import {ComputedRef} from "vue";

const store = useCounterStore()
const {setModalVisibilityAction} = store
const isShowModal: ComputedRef<boolean> = computed((): boolean => store.isShowModal)
const isShowClipboardPromptCopy: ComputedRef<boolean> = computed((): boolean => store.isShowClipboardPromptCopy)
const hint: ComputedRef<string> = computed((): string => store.hint)

const modalWindow = ref<HTMLElement | null>(null)

const closeModal = (): void => {
  window.document.body.style.overflowY = 'auto'
  setModalVisibilityAction(false)
}

watch(isShowModal, async (): Promise<void> => {
  if (isShowModal.value) {
    await nextTick()
    modalWindow?.value?.focus()
  }
})

</script>

<template>
  <transition
      enter-active-class="modal__start"
      enter-from-class="modal__start"
      enter-to-class="modal__end"
      leave-active-class="modal__end"
      leave-from-class="modal__end"
      leave-to-class="modal__start"
  >
    <div
        v-if="isShowModal"
        ref="modalWindow"
        tabindex="-1"
        class="wrapper"
        @click.self="closeModal"
        @keydown.esc="closeModal"
    >
      <button
          class="close__button"
          @click="closeModal"
          type="button"
      >
        <img
            class="close__img"
            src="~assets/images/icons/modal-close.svg"
            alt="close modal button"
            title="close modal button"
        >
      </button>
      <div class="container">
        <ModalImage/>
        <Prompt/>

        <transition
            enter-active-class="modal__start"
            enter-from-class="modal__start"
            enter-to-class="modal__end"
            leave-active-class="modal__end"
            leave-from-class="modal__end"
            leave-to-class="modal__start"
        >
          <div v-show="isShowClipboardPromptCopy" class="popover">
            {{ hint }} was copied
          </div>
        </transition>
      </div>
    </div>
  </transition>

</template>

<style scoped lang="scss">
@import "assets/styles/variables";
@import "assets/styles/mixins";

.wrapper {
  position: fixed;
  z-index: 7;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(24, 24, 24, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow-y: auto;

  @include tabletBig {
    align-items: flex-start;
  }
}

.close__button {
  position: absolute;
  right: 60px;
  top: 60px;
  z-index: 4;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.15s linear;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1344px) and (orientation: landscape) {
    right: 30px;
    top: 30px;
  }

  @include tabletBig {
    right: 30px;
    top: 30px;
  }

  &:hover {
    opacity: 0.5;
  }

  &:active {
    transform: scale(0.9);
  }
}

.close__img {
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.container {
  max-width: 1000px;
  height: 690px;
  display: flex;
  background: $modalBg;
  border-radius: 23px;
  cursor: auto;
  padding: 40px;
  margin: 0 auto;
  justify-content: center;

  @include tabletBig {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    height: auto;
    width: 64%;
    padding: 20px;
  }

  @include startPhones {
    width: 95%;
    padding: 20px;
    position: static;
    margin-top: 72px;
    transform: translateY(0);
    margin-bottom: 100px;
  }
}

.modal__start {
  opacity: 0;
  transition: all 0.3s ease;
}

.modal__end {
  opacity: 1;
  transition: all 0.3s ease;
}

.popover {
  font-family: 'SF Pro Display', sans-serif;
  position: absolute;
  z-index: 3;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  color: $mainColor;
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: $modalBg;
  background-image: url('assets/images/icons/category.png');
  background-repeat: no-repeat;
  background-position: center right 15px;
  background-size: 15px;
  height: 40px;
  width: auto;
  padding: 0 40px 0 20px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba($mainColor, 0.7);

  animation: move 2.5s linear;

  @media (max-width: 950px) {
    top: 100px;
  }

  @media (max-width: 415px) {
    top: 30px;
  }
}

@keyframes move {
  0% {
    box-shadow: 0 0 10px rgba($mainColor, 0.7);
  }
  25% {
    box-shadow: 0 0 15px rgba($mainColor, 0.7);
  }
  50% {
    box-shadow: 0 0 5px rgba($mainColor, 0.7);
  }
  75% {
    box-shadow: 0 0 15px rgba($mainColor, 0.7);
  }
  100% {
    box-shadow: 0 0 10px rgba($mainColor, 0.7);
  }
}
</style>