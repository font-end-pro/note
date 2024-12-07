<template>
  <div class="w-56 shrink-0">
    <div class="mb-3 flex items-center justify-between">
      <h3 :class="`font-medium ${headingColor}`">{{ title }}</h3>
      <span class="rounded text-sm text-neutral-400">{{ filteredCards.length }}</span>
    </div>
    <div
      @drop="handleDrop"
      @dragover.prevent="handleDragOver"
      @dragleave="handleDragLeave"
      :class="`h-full w-full transition-colors ${active ? 'bg-neutral-800/50' : 'bg-neutral-800/0'}`"
    >
      <Card
        v-for="card in filteredCards"
        :key="card.id"
        :card="card"
        @drag-start="handleDragStart"
      />
      <DropIndicator :beforeId="null" :column="column" />
      <AddCard :column="column" @add-card="addCard" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Card from "./Card.vue";
import DropIndicator from "./DropIndicator.vue";
import AddCard from "./AddCard.vue";

export default {
  components: { Card, DropIndicator, AddCard },
  props: {
    title: String,
    headingColor: String,
    cards: Array,
    column: String,
  },
  emits: ["update-cards"],
  setup(props, { emit }) {
    const active = ref(false);

    const filteredCards = computed(() =>
      props.cards.filter((card) => card.column === props.column)
    );

    const handleDragStart = (card) => {
      const transferData = { ...card, column: props.column };
      localStorage.setItem("draggedCard", JSON.stringify(transferData));
    };

    const handleDragOver = () => {
      active.value = true;
    };

    const handleDragLeave = () => {
      active.value = false;
    };

    const handleDrop = () => {
      const draggedCard = JSON.parse(localStorage.getItem("draggedCard"));
      const updatedCards = props.cards.filter(
        (card) => card.id !== draggedCard.id
      );

      draggedCard.column = props.column;
      updatedCards.push(draggedCard);

      emit("update-cards", updatedCards);
      active.value = false;
    };

    const addCard = (newCard) => {
      const updatedCards = [...props.cards, newCard];
      emit("update-cards", updatedCards);
    };

    return {
      active,
      filteredCards,
      handleDragStart,
      handleDragOver,
      handleDragLeave,
      handleDrop,
      addCard,
    };
  },
};
</script>
