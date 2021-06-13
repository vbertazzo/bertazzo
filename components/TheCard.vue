<template>
  <article
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
      sm:(h-auto)
    "
  >
    <section class="w-full py-10 border-b border-gray-200 sm:py-16">
      <h1
        class="
          title
          font-semibold
          text-xl text-primary-700
          uppercase
          tracking-widest
          text-center
          xs:text-2xl
          sm:(text-3xl
          font-normal)
          lg:(text-4xl)
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
        "
      >
        Front-end Developer
      </h2>
    </section>

    <TheNav />
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped>
.title {
  font-family: 'Rubik';
}
</style>
