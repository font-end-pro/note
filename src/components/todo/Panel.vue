<script setup lang="ts">
import { ref } from 'vue'
import { useToDoStore } from '@/stores/todo'
import IEmptyNote from '@/components/icons/IEmptyNote.vue'
import PendingIcon from '@/components/todo/PendingIcon.vue'
import CompleteIcon from '@/components/todo/CompleteIcon.vue'
import Button from '@/components/common/Button.vue'
import Item from '@/components/todo/Item.vue'

const todoStore = useToDoStore()
const isCompletedTab = ref<boolean>(false)
</script>

<template>
  <div class="bg-white rounded-lg drop-shadow-xl h-min dark:bg-slate-800">
    <div
      class="p-2 flex justify-between items-center border-b border-b-solid dark:border-b-gray-500"
    >
      <div
        class="flex items-center border border-slate-200 dark:border-slate-600 p-0.5 rounded-lg dark:text-slate-300"
      >
        <Button
          :icon="PendingIcon"
          text="Progressing"
          @on:click="isCompletedTab = false"
          :focus="!isCompletedTab"
        />
        <Button
          :icon="CompleteIcon"
          text="Completed"
          @on:click="isCompletedTab = true"
          :focus="isCompletedTab"
        />
      </div>
      <div
        class="size-8 flex justify-center items-center rounded-full bg-slate-200 dark:bg-gray-800"
      >
        <p>
          {{ isCompletedTab ? todoStore.completedNotes.length : todoStore.progressingNotes.length }}
        </p>
      </div>
    </div>

    <div
      class="overflow-y-scroll overflow-x-hidden relative max-h-96 min-h-96 px-5 [&_ul]:divide-y [&_ul]:divide-gray-100 [&_ul]:dark:divide-gray-700"
    >
      <div
        class="flex flex-col justify-center items-center absolute inset-0"
        v-if="
          (!isCompletedTab && todoStore.progressingNotes.length == 0) ||
          (isCompletedTab && todoStore.completedNotes.length == 0)
        "
      >
        <IEmptyNote />
        <p class="text-xs opacity-60">Empty pending note here!</p>
      </div>
      <div v-else-if="!isCompletedTab && todoStore.progressingNotes.length > 0">
        <TransitionGroup name="list" tag="ul">
          <Item
            v-for="note in todoStore.progressingNotes"
            :key="note.id"
            :note="note"
            @on:delete="todoStore.deleteNote(note.id)"
            @on:completed="todoStore.markCompleted(note.id)"
          />
        </TransitionGroup>
      </div>
      <div v-else-if="isCompletedTab && todoStore.completedNotes.length > 0">
        <TransitionGroup name="list" tag="ul">
          <Item
            v-for="note in todoStore.completedNotes"
            :key="note.id"
            :note="note"
            @on:delete="todoStore.deleteNote(note.id)"
          />
        </TransitionGroup>
      </div>
    </div>

    <div class="p-2 border-t border-t-solid dark:border-t-gray-500 flex items-center space-x-2">
      <span class="text-xs">Progress:</span>
      <div
        class="bg-blue-600 h-3 text-[11px] pt-[1px] font-medium text-blue-100 text-center leading-none rounded-full duration-1000 drop-shadow-lg"
        :style="`width: ${todoStore.donePercent}%`"
      >
        {{ parseFloat(todoStore.donePercent.toString()).toFixed(0) }}%
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* ************************************* */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
