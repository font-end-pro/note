<script setup lang="ts">
import { RouterView } from 'vue-router'

import Footer from './components/Footer.vue'
import Header from './components/header/Header.vue'
</script>

<template>
  <main
    class="main-container w-screen relative min-h-screen min-w-screen dark:bg-[#0F172A] dark:text-gray-400"
  >
    <Header />

    <div class="flex flex-row justify-center w-full max-w-screen-md mx-auto px-4">
      <Transition name="slide-fade">
        <RouterView />
      </Transition>
    </div>

    <Footer />
  </main>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
