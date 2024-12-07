<script setup>
import { RouterLink } from "vue-router";
import DarkMode from "@/components/DarkMode.vue";
import IGithub from "@/components/icons/IGithub.vue";
</script>

<template>
  <header class="flex justify-center py-10">
    <!-- link: https://img.icons8.com/glassmorphism/512/quill-pen.png -->
    <div class="flex flex-col">
        <div class="flex items-center space-x-2 mb-6">
          <img src="/logo.png" alt="logo" class="w-12 h-12 drop-shadow-lg" />
          <h1 class="green text-4xl font-semibold drop-shadow-lg">Todos</h1>
        </div>
        <nav class="flex items-center space-x-4 [&>a]:p-2">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/test">Test</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <div class="w-[1px] h-6 bg-slate-300 dark:bg-slate-500" />
          <div class="flex justify-center gap-5 ml-2">
            <DarkMode />
            <IGithub />
          </div>
        </nav>
      </div>
    </header>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
  font-weight: 600;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

h1 {
  background-image: -webkit-linear-gradient(120deg, rgb(189, 52, 254) 30%, rgb(65, 209, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
