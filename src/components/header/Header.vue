<script setup>
import { RouterLink } from 'vue-router'
import DarkMode from '@/components/header/DarkMode.vue'
import GithubIcon from '@/components/header/GithubIcon.vue'
import AboutIcon from '@/components/header/AboutIcon.vue'
</script>

<template>
  <header class="flex justify-center py-10">
    <!-- link: https://img.icons8.com/glassmorphism/512/quill-pen.png -->
    <div class="flex flex-col">
      <div class="flex items-center space-x-2 mb-6">
        <img src="/logo.png" alt="logo" class="w-12 h-12 drop-shadow-lg" />
        <h1 class="text-5xl font-semibold drop-shadow-lg">Kados</h1>
      </div>
      <nav
        class="flex items-center space-x-4 [&>a]:px-2 [&>a]:py-1 text-gray-400 dark:text-gray-400"
      >
        <RouterLink to="/">Kanban</RouterLink>
        <RouterLink to="/todo">Todo</RouterLink>
        <RouterLink to="/note">Note</RouterLink>
        <RouterLink to="/bookmark">Bookmark</RouterLink>
        <div class="w-[1px] h-6 bg-slate-300 dark:bg-slate-500" />
        <div class="flex justify-center gap-5 ml-2">
          <a
            class="text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 cursor-pointer max-h-10 max-w-10"
            href="/about"
          >
            <AboutIcon />
          </a>
          <DarkMode />
          <a
            class="text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 cursor-pointer max-h-10 max-w-10"
            href="https://github.com/thuongtruong109/kados"
          >
            <GithubIcon />
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300..700&display=swap');

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
  font-weight: 600;
  position: relative;
}

nav a.router-link-exact-active::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

h1 {
  background-image: -webkit-linear-gradient(120deg, rgb(189, 52, 254) 30%, rgb(65, 209, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Teko', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
