<template>
  <div>
    <form v-if="adding" @submit.prevent="handleSubmit">
      <textarea
        v-model="text"
        autoFocus
        placeholder="Add new task..."
        class="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
      />
      <div class="mt-1.5 flex items-center justify-end gap-1.5">
        <button
          type="button"
          @click="adding = false"
          class="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          Close
        </button>
        <button
          type="submit"
          class="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
        >
          <span>Add</span>
          <FiPlus />
        </button>
      </div>
    </form>
    <button
      v-else
      @click="adding = true"
      class="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
    >
      <span>Add card</span>
      <FiPlus />
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
// import { FiPlus } from "vue-icons/fi";

export default {
  props: {
    column: String,
  },
  emits: ["add-card"],
  setup(props, { emit }) {
    const text = ref("");
    const adding = ref(false);

    const handleSubmit = () => {
      if (!text.value.trim()) return;

      const newCard = {
        id: Math.random().toString(36).substring(7),
        title: text.value.trim(),
        column: props.column,
      };

      emit("add-card", newCard);
      text.value = "";
      adding.value = false;
    };

    return { text, adding, handleSubmit };
  },
};
</script>
