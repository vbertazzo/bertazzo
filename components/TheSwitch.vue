<template>
  <div class="flex justify-between items-center">
    <fa
      class="mr-2 text-2xl text-gray-400 dark:text-blue-gray-500"
      aria-hidden="true"
      :icon="['fas', 'moon']"
    />
    <label id="switch-label" class="sr-only">Toggle dark mode:</label>
    <div
      class="
        w-14
        h-8
        flex
        items-center
        rounded-full
        p-1
        focus-visible:(ring-2
        ring-offset-2 ring-offset-white ring-secondary-600
        outline-none)
        transition-color
        duration-300
        ease-in-out
      "
      role="switch"
      :aria-checked="`${isDarkModeOn}`"
      aria-label="Toggle dark mode"
      aria-labelledby="switch-label"
      :class="isDarkModeOn ? 'bg-secondary-600' : 'bg-gray-400'"
      tabindex="0"
      @click="handleSwitchChange"
      @keydown.space="handleSwitchChange"
    >
      <div
        class="
          bg-white
          w-6
          h-6
          rounded-full
          shadow-md
          transform
          duration-300
          ease-in-out
        "
        :class="{ 'translate-x-6': isDarkModeOn }"
      ></div>
    </div>
    <fa
      class="ml-2 text-3xl text-gray-400 dark:text-blue-gray-500"
      aria-hidden="true"
      :icon="['fas', 'sun']"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useDarkMode from '@/composables/useDarkMode'

export default defineComponent({
  setup() {
    const { isDarkModeOn, toggleDarkMode } = useDarkMode()

    const handleSwitchChange = () => {
      toggleDarkMode(!isDarkModeOn.value)
    }

    return {
      isDarkModeOn,
      handleSwitchChange,
    }
  },
})
</script>

<style scoped></style>
