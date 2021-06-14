import { onMounted, readonly, ref } from '@nuxtjs/composition-api'

const isActive = ref(false)

export default function useDarkMode() {
  const toggleDarkMode = (value: boolean) => {
    isActive.value = value
    localStorage.setItem('theme', isActive.value ? 'dark' : 'light')
    isActive.value
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }

  const loadDarkMode = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      isActive.value = true
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
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
