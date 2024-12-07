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

<script>
import { ref } from "vue";
// import { FaFire, FiTrash } from "vue-icons/fa";

export default {
  // components: { FaFire, FiTrash },
  emits: ["remove-card"],
  setup(_, { emit }) {
    const active = ref(false);

    const handleDragOver = () => {
      active.value = true;
    };

    const handleDragLeave = () => {
      active.value = false;
    };

    const handleDrop = () => {
      const draggedCard = JSON.parse(localStorage.getItem("draggedCard"));
      emit("remove-card", draggedCard.id);
      active.value = false;
    };

    return { active, handleDragOver, handleDragLeave, handleDrop };
  },
};
</script>
