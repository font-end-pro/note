<script setup lang="ts">
import { ref, defineEmits } from "vue";

const active = ref(false);

const emit = defineEmits(["remove-card"]);

    const handleDragOver = () => {
      active.value = true;
    };

    const handleDragLeave = () => {
      active.value = false;
    };
        const handleDrop = () => {
          const draggedCard = JSON.parse((localStorage as any).getItem("draggedCard"));
          emit("remove-card", draggedCard.id);
          active.value = false;
        };
</script>


<template>
  <div
    @drop="handleDrop"
    @dragover.prevent="handleDragOver"
    @dragleave="handleDragLeave"
    :class="`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
      active ? 'border-red-800 bg-red-800/20 text-red-500' : 'border-neutral-500 bg-neutral-500/20 text-neutral-500'
    }`"
  >
    <component :is="active ? 'fa-fire' : 'fi-trash'" />
  </div>
</template>
