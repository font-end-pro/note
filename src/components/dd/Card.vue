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

<script>
export default {
  props: {
    card: Object,
  },
  emits: ["drag-start"],
  setup(_, { emit }) {
    const handleDragStart = (card) => {
      emit("drag-start", card);
    };

    return { handleDragStart };
  },
};
</script>
