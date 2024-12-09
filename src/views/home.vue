<script setup>
import Panel from "@/components/kanban/Panel.vue";
import Main from "@/components/dd/Main.vue";

</script>

<template>
  <section class="about text-start py-10 px-20">
    <Panel :sort="true" />
    <Main />
  </section>
</template>
