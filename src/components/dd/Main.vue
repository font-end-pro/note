<template>
  <div class="flex h-full w-full gap-3 overflow-scroll p-12">
    <Column
      title="Backlog"
      column="backlog"
      headingColor="text-neutral-500"
      :cards="cards"
      @update-cards="updateCards"
    />
    <Column
      title="TODO"
      column="todo"
      headingColor="text-yellow-200"
      :cards="cards"
      @update-cards="updateCards"
    />
    <Column
      title="In progress"
      column="doing"
      headingColor="text-blue-200"
      :cards="cards"
      @update-cards="updateCards"
    />
    <Column
      title="Complete"
      column="done"
      headingColor="text-emerald-200"
      :cards="cards"
      @update-cards="updateCards"
    />
    <BurnBarrel @remove-card="removeCard" />
  </div>
</template>

<script>
import { ref } from "vue";
import Column from "./Column.vue";
import BurnBarrel from "./BurnBarrel.vue";

export default {
  components: { Column, BurnBarrel },
  setup() {
    const DEFAULT_CARDS = [
      { id: "1", title: "Task 1", column: "backlog" },
      { id: "2", title: "Task 2", column: "todo" },
    ];

    const cards = ref([...DEFAULT_CARDS]);

    const updateCards = (newCards) => {
      cards.value = newCards;
    };

    const removeCard = (cardId) => {
      cards.value = cards.value.filter((card) => card.id !== cardId);
    };

    return { cards, updateCards, removeCard };
  },
};
</script>


<style>
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
