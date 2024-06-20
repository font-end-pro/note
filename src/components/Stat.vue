<script setup>
defineProps(["uncompleted", "completed"]);
</script>

<template>
  <div class="statistical" v-if="uncompleted || completed">
    <p>Total: {{ uncompleted + completed }}</p>
    <p>Unfinish: {{ uncompleted }}</p>
    <p>Done: {{ completed }}</p>
    <p>
      Process:
      {{ completed == 0 ? 0 : ((completed / (uncompleted + completed)) * 100).toFixed(2) }}%
    </p>
  </div>
</template>

<style scoped>
.statistical {
    border: 1px dotted rgba(128, 128, 128, 0.719);
    border-radius: 6px;
    height: auto;
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    align-content: center;
}
.statistical > p {
    margin: 0;
    font-weight: 600;
    font-size: 0.9rem;
}
</style>