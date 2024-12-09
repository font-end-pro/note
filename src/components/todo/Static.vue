<script setup lang="ts">
import { useToDoStore } from "@/stores/todo";
import ITotal from "@/components/icons/ITotal.vue";
import IDelete from "@/components/icons/IDelete.vue";
import IWrite from "@/components/icons/IWrite.vue";
import IComplete from "@/components/icons/IComplete.vue";
const store = useToDoStore();

</script>

<template>
  <div
    class="static-container grid grid-cols-4 justify-around gap-2 p-5 dark:text-[#A5B4FC] [&>div]:bg-white dark:[&>div]:bg-slate-800 [&>div]:shadow-md [&>div]:rounded-lg [&>div]:teext-center [&>div]:p-4"
  >
    <div>
      <h1><ITotal />Total</h1>
      <h2>
        {{
          store.pendingListComputed.length + store.doneListComputed.length - 1
        }}
      </h2>
    </div>
    <div>
      <h1><IDelete />Deleted</h1>
      <h2>{{ store.deleteCount }}</h2>
    </div>
    <div>
      <h1><IWrite />Pending</h1>
      <h2>{{ store.pendingListComputed.length - 1 }}</h2>
    </div>
    <div>
      <h1><IComplete />Completed</h1>
      <h2>{{ store.doneListComputed.length }}</h2>
    </div>
    <div class="progress w-full rounded-full">
      <div
        class="bg-blue-600 text-xs font-medium text-blue-100 text-center py-0.5 leading-none rounded-full duration-1000 drop-shadow-lg"
        :style="`width: ${store.progressComputed}%`"
      >
        {{ store.progressComputed }}%
      </div>
    </div>
  </div>
</template>
