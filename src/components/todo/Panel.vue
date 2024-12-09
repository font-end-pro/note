<script setup lang="ts">
import { ref } from 'vue'
import { useToDoStore } from '@/stores/todo'
import ITrash from '@/components/icons/ITrash.vue'
import ICheck from '@/components/icons/ICheck.vue'
import IEmptyNote from '@/components/icons/IEmptyNote.vue'
import PendingIcon from '@/components/todo/PendingIcon.vue'
import CompleteIcon from '@/components/todo/CompleteIcon.vue'
import Button from '@/components/common/Button.vue'

const store = useToDoStore()
const isCompleted = ref<boolean>(false)
</script>

<template>
  <div class="pending-container bg-white rounded-lg drop-shadow-xl h-min dark:bg-slate-800">
    <div
      class="p-2 flex justify-between items-center border-b border-b-solid dark:border-b-gray-500"
    >
      <div
        class="flex items-center border border-slate-200 dark:border-slate-600 p-0.5 rounded-lg dark:text-slate-300"
      >
        <Button
          :icon="PendingIcon"
          text="Progressing"
          @on:click="isCompleted = false"
          :focus="!isCompleted"
        />
        <Button :icon="CompleteIcon" text="Completed" @on:click="isCompleted = true" />
      </div>
      <div
        class="size-8 flex justify-center items-center rounded-full bg-slate-200 dark:bg-gray-800"
      >
        <p>
          {{
            isCompleted ? store.doneListComputed.length : `${store.pendingListComputed.length - 1}`
          }}
        </p>
      </div>
    </div>

    <div
      class="pending-empty grid justify-center text-center py-1"
      v-if="
        (!isCompleted && store.pendingListComputed.length <= 1) ||
        (isCompleted && store.doneListComputed.length <= 0)
      "
    >
      <IEmptyNote />
      <p class="text-xs opacity-60">Empty pending note here!</p>
    </div>

    <div
      class="overflow-y-scroll overflow-x-hidden max-h-[31rem] px-5"
      v-if="!isCompleted && store.pendingListComputed.length > 1"
    >
      <TransitionGroup name="list" tag="ul">
        <li
          v-for="(note, i) in store.pendingListComputed"
          :key="note.id"
          class="flex justify-between items-center py-2"
        >
          <div>
            <h5 class="text-xl dark:text-[#D266A3]">{{ note.content }}</h5>
            <p class="text-xs text-black/50 dark:text-gray-500">{{ note.time }}</p>
          </div>
          <div class="flex gap-3" v-if="i != 0">
            <ITrash @click="store.deletePendingNote(note.id)" />
            <ICheck @click="store.saveDoneList(note.id, note.content, note.time, note.isDone)" />
          </div>
        </li>
      </TransitionGroup>
    </div>

    <div
      class="overflow-y-scroll overflow-x-hidden max-h-[31rem] px-5"
      v-else-if="isCompleted && store.doneListComputed.length > 0"
    >
      <TransitionGroup name="list" tag="ul">
        <li
          v-for="note in store.doneListComputed"
          :key="note.id"
          class="flex justify-between items-center py-2 line-through"
        >
          <div>
            <h5 class="text-xl dark:text-[#D266A3]">{{ note.content }}</h5>
            <p class="text-xs text-black/50 dark:text-gray-500">{{ note.time }}</p>
          </div>
          <div>
            <ITrash @click="store.deleteDoneNote(note.id)" />
          </div>
        </li>
      </TransitionGroup>
    </div>

    <div
      class="progress p-2 border-t border-t-solid dark:border-t-gray-500 flex items-center space-x-2"
    >
      <span class="text-xs">Progress:</span>
      <div
        class="bg-blue-600 h-3 text-[11px] pt-[1px] font-medium text-blue-100 text-center leading-none rounded-full duration-1000 drop-shadow-lg"
        :style="`width: ${store.progressComputed}%`"
      >
        {{ parseFloat(store.progressComputed.toString()).toFixed(0) }}%
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
