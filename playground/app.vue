<script lang="ts" setup>
const size = ref<number>(160)
const email = ref<string>('')
const classList = ref<string>('rounded-full border-2 border-blue-500')
const isPreviewVisible = ref<boolean>(false)
const isAnimating = ref<boolean>(false)

const showPreview = () => {
  isAnimating.value = true
  isPreviewVisible.value = true
}

const closePreview = () => {
  isAnimating.value = true

  setTimeout(() => {
    isPreviewVisible.value = false
    isAnimating.value = false
  }, 300)
}
</script>

<template>
  <div class="flex flex-col h-screen w-screen justify-center items-center">
    <div class="w-1/6">
      <div class="flex flex-col gap-2 mb-2">
        <label id="size">Email:</label>
        <input
          v-model="email"
          type="text"
          class="input-text mb-2 p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        >
      </div>

      <div class="flex flex-col gap-2 mb-2">
        <label id="size">Size:</label>
        <input
          v-model="size"
          type="number"
          class="input-number mb-4 p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter size"
        >
      </div>

      <button
        class="preview-button p-2 w-full max-w-xs bg-blue-600 hover:bg-blue-700 rounded text-white transition duration-200"
        @click="showPreview()"
      >
        Preview
      </button>
    </div>

    <transition name="fade">
      <div
        v-if="isPreviewVisible || isAnimating"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <div
          :class="{
            'opacity-100': isPreviewVisible,
            'opacity-0': !isPreviewVisible,
          }"
          class="modal-container bg-gray-800 rounded-lg p-6 max-w-lg w-full relative z-10 transition-opacity duration-300 ease-in-out"
        >
          <button
            class="absolute top-2 right-2 text-white text-xl"
            @click="closePreview"
          >
            &times;
          </button>

          <h2 class="text-lg font-semibold mb-4">
            Gravatar Preview
          </h2>

          <div class="gravatar-preview flex justify-center items-center mb-4">
            <NuxtGravatar
              :email="email"
              :size="size"
              :class="classList"
            />
          </div>

          <button
            class="close-button p-2 w-full bg-red-600 hover:bg-red-700 rounded text-white transition duration-200"
            @click="closePreview"
          >
            Close
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
body {
  @apply bg-gray-900 text-white min-h-screen;
}
</style>
