<script setup lang="ts">
import IAdd from "@/components/icons/IAdd.vue";
import { useToDoStore } from "@/stores/todo";
import { ref } from "vue";
const store = useToDoStore();

const noteInput = ref("");

const onSaveNote = () => {
  if (noteInput.value.trim()) {
    let date = new Date();
    store.addNote(store.pendingList.length, noteInput.value, false);
    noteInput.value = "";
  }
};
</script>

<template>
  <div class="flex justify-center py-10">
    <div class="drop-shadow-lg w-max h-10 rounded-full flex dark:drop-shadow-lg">
      <input
        type="text"
        class="w-[25rem] h-full rounded-l-3xl px-5 py-2 dark:bg-slate-800 placeholder:italic placeholder:text-sm"
        placeholder="✎ Input somethings to do..."
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = '✎ add new task...'"
        v-model="noteInput"
        @keyup.enter="onSaveNote"
      />
      <button
        class="bg-black text-white py-2 px-5 rounded-r-3xl dark:bg-[#10608C]"
        @click="onSaveNote"
      >
        <IAdd />
      </button>
    </div>
  </div>
</template>
