<template>
  <nav class="w-3/4 py-10 space-y-4 text-white sm:(w-3/5 py-16)">
    <a
      class="
        link
        bg-secondary-600
        hover:sm:bg-hex-7A64FA
        focus-visible:(ring-secondary-600)
        active:bg-secondary-600
      "
      href="https://github.com/vbertazzo"
    >
      <span class="text-md font-semibold uppercase tracking-widest">
        GitHub
      </span>
      <fa class="text-3xl" aria-hidden="true" :icon="['fab', 'github']" />
    </a>

    <a
      class="
        link
        bg-hex-774DE6
        hover:sm:bg-hex-9066FF
        focus-visible:(ring-hex-774DE6)
        active:bg-hex-774DE6
      "
      href="https://www.linkedin.com/in/vbertazzo"
    >
      <span class="text-md font-semibold uppercase tracking-widest">
        LinkedIn
      </span>
      <fa class="text-3xl" aria-hidden="true" :icon="['fab', 'linkedin-in']" />
    </a>

    <a
      class="
        link
        bg-hex-8B4DE6
        hover:sm:bg-hex-A466FF
        focus-visible:(ring-hex-8B4DE6)
        active:bg-hex-8B4DE6
      "
      href="https://blog.vbertazzo.com"
    >
      <span class="text-md font-semibold uppercase tracking-widest">
        Blog
      </span>
      <fa class="text-2xl" aria-hidden="true" :icon="['fas', 'pen']" />
    </a>
  </nav>
</template>

<style lang="postcss" scoped>
.link {
  @apply h-13 w-full py-2 px-6 flex justify-between items-center rounded-full text-white focus-visible:(ring-2 ring-offset-2 ring-offset-white outline-none) transition ease-in-out duration-150 disabled:bg-blue-gray-500 focus:outline-none transition-colors duration-1000;
}
</style>
