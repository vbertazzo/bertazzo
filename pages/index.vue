<template>
  <main
    class="
      bg-hero-topography bg-white
      min-h-screen
      flex flex-col
      justify-center
      items-center
      p-4
      dark:(bg-hero-topography-secondary
      bg-blue-gray-800)
      transition-colors
      duration-1000
    "
  >
    <TheCard />
    <div class="absolute top-5 right-5">
      <TheSwitch />
    </div>
  </main>
</template>
