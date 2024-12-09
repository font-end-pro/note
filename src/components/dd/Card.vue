<script setup lang="ts">
import DropIndicator from "./DropIndicator.vue";

const props = defineProps<{
  card: {
    id: string;
    title: string;
    column: string;
  };
}>();

const emit = defineEmits(['drag-start']);

const handleDragStart = (card: typeof props.card) => {
  emit("drag-start", card);
};

</script>


<template>
  <div>
    <DropIndicator :beforeId="card.id" :column="card.column" />
    <div
      class="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      draggable="true"
      @dragstart="() => handleDragStart(card)"
    >
      <p class="text-sm text-neutral-100">{{ card.title }}</p>
    </div>
  </div>
</template>
