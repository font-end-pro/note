<script setup>
import { ref } from "vue";
import Panel from "@/components/kanban/Panel.vue";

const items = ref([
  { id: 0, title: 'Item A', list: 1 },
  { id: 1, title: 'Item B', list: 1 },
  { id: 2, title: 'Item C', list: 1 },
  { id: 3, title: 'Item D', list: 2 }
])

</script>

<template>
  <section class="about text-start py-10 px-20">
    <Panel :items="items" :sort="true" />
  </section>
</template>
