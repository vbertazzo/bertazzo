import { ColorModeInstance } from '@nuxtjs/color-mode/types/color-mode'
import { onMounted, readonly, ref } from '@nuxtjs/composition-api'

const isActive = ref(false)

export default function useDarkMode() {
  const toggleDarkMode = (colorMode: ColorModeInstance) => {
    const isDarkSet = colorMode.preference === 'dark'
    colorMode.preference = isDarkSet ? 'light' : 'dark'
    isActive.value = !isDarkSet
  }

  const loadDarkMode = () => {
    if (
      localStorage.getItem('nuxt-color-mode') === 'dark' ||
      (!('nuxt-color-mode' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      isActive.value = true
    } else {
      isActive.value = false
    }
  }

  onMounted(() => {
    loadDarkMode()
  })

  return {
    isDarkModeOn: readonly(isActive),
    toggleDarkMode,
  }
}
