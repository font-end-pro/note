<script setup lang="ts">
import { ref, computed } from "vue";
import Card from "./Card.vue";
import DropIndicator from "./DropIndicator.vue";
import AddCard from "./AddCard.vue";

const props = defineProps<{
  title: string;
  headingColor: string;
  cards: {
    id: string;
    title: string;
    column: string;
  }[];
  column: string;
}>();

const emit = defineEmits(["update-cards"]);

const active = ref(false);

  const filteredCards = computed(() =>
      props.cards.filter((card) => card.column === props.column)
  );

  const handleDragStart = (card: any) => {
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
    const draggedCard = JSON.parse((localStorage as any).getItem("draggedCard"));
    const updatedCards = props.cards.filter(
      (card) => card.id !== draggedCard.id
    );

    draggedCard.column = props.column;
    updatedCards.push(draggedCard);

    emit("update-cards", updatedCards);
    active.value = false;
  };

  const addCard = (newCard: any) => {
    const updatedCards = [...props.cards, newCard];
    emit("update-cards", updatedCards);
  };
</script>

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
      <DropIndicator :beforeId="0" :column="column" />
      <AddCard :column="column" @add-card="addCard" />
    </div>
  </div>
</template>
