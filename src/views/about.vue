<script setup>
import { ref } from "vue";
import Main from "@/components/dd/Main.vue";
import Panel from "@/components/kanban/Panel.vue";

// import CodePre from '@/components/examples/CodePre.vue'
// import PropsList from '@/components/examples/PropsList.vue'
// import ButtonsList from '@/components/examples/ButtonsList.vue'

const items = ref([
  { id: 0, title: 'Item A', list: 1 },
  { id: 1, title: 'Item B', list: 1 },
  { id: 2, title: 'Item C', list: 1 },
  { id: 3, title: 'Item D', list: 2 }
])

// const propsList = [
//   { name: 'items', text: 'Object[] - items for list.' },
//   {
//     name: 'sort',
//     text: 'Boolean - enable / disable sorting as in a simple example.'
//   }
// ]
</script>

<template>
  <div class="about text-start py-10 px-20">
    <div class="py-5 text-3xl font-medium">
      <h1>About me!</h1>
    </div>
    <div>
      <p>Hi! This is start template for new Vuejs beginner that builded by <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://github.com/thuongtruong1009">@thuongtruong1009</a>.</p>
    </div>
    <div>
      <p>The webapp display-add-check-delete functions for save notes to do list by side every total field.</p>
    </div>
    <div>
      <p>Project build from <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://vuejs.org/">VueJs</a> + <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://vitejs.dev/">Vite</a> + <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://tailwindcss.com/">TailwindCSS</a> + <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://postcss.org/">PostCSS</a> + <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://pinia.vuejs.org/">Pinia</a> + <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://vuejs.org/guide/scaling-up/routing.html#official-router">Vue-Router</a> + <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://www.cypress.io/">Cypresse</a> + <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://eslint.org/">ESLint</a>.</p>
    </div>
    <div>
      <p>Check more at <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://github.com/thuongtruong1009/notedev">notedev.</a></p>
    </div>
    <div>
      <p>Any discussions or problem. Contact via <a class="text-gray-800 font-medium dark:text-[#14A348]" href="mailto:ititiu19228@student.hcmiu.edu.vn">email</a>. Contribution & report bugs at <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://github.com/thuongtruong1009/notedev/pulls">here</a>.</p>
    </div>
    <div>
      <p><a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://github.com/thuongtruong1009/notedev/LICENSE">MIT license</a> 2022 of <a class="text-gray-800 font-medium dark:text-[#14A348]" href="https://github.com/thuongtruong1009">@thuongtruong1009</a>.</p>
    </div>

    <Panel :items="items" :sort="true" />

    <Main />
  </div>
</template>

<style scoped>
p{
  padding: 0.5rem 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
