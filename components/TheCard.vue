<template>
  <transition name="card">
    <article
      v-show="isLoaded"
      class="
        w-11/12
        max-w-md
        border border-blue-gray-200
        rounded-xl
        flex flex-col
        items-center
        justify-between
        border
        shadow-2xl
        bg-white
        transition-colors
        duration-1000
        sm:(h-auto)
        dark:(bg-blue-gray-800
        border-blue-gray-700)
      "
    >
      <section
        class="
          w-full
          py-10
          border-b border-gray-200
          sm:py-16
          dark:border-blue-gray-700
        "
      >
        <h1
          class="
            title
            text-xl text-primary-700
            uppercase
            tracking-widest
            text-center
            xs:text-2xl
            sm:(text-3xl)
            lg:(text-4xl)
            dark:text-white
          "
        >
          Vitor Bertazzo
        </h1>
      </section>

      <section
        class="
          w-full
          py-4
          flex
          justify-center
          items-center
          border-b border-gray-200
          sm:py-8
          dark:border-blue-gray-700
        "
      >
        <h2
          class="
            font-normal
            text-primary-700
            tracking-wider
            text-center
            uppercase
            lg:text-xl
            dark:text-white
          "
        >
          Web Developer
        </h2>
      </section>

      <TheNav />
    </article>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const isLoaded = ref(false)

    onMounted(() => {
      isLoaded.value = true
    })

    return {
      isLoaded,
    }
  },
})
</script>

<style scoped>
.title {
  font-family: 'Rubik';
}

.card-enter-active,
.card-leave-active {
  transition: opacity 0.5s;
}
.card-enter,
.card-leave-active {
  opacity: 0;
}
</style>
