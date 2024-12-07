<script setup lang="ts">

import { RouterView } from "vue-router";

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <main class="main-container w-screen relative min-h-screen min-w-screen dark:bg-[#0F172A] dark:text-gray-400">
    <Header />

    <div class="flex flex-row justify-center">
        <Transition name="bounce">
          <RouterView />
        </Transition>
    </div>

    <Footer />
  </main>
</template>

<style>
@import url("./assets/base.css");
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>
