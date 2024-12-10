<script setup lang="ts">
import TrashIcon from '@/components/todo/TrashIcon.vue'
import DoneIcon from '@/components/todo/DoneIcon.vue'

defineProps<{
  note: {
    id: string
    content: string
    time: string
    isDone: boolean
  }
}>()

defineEmits(['on:delete', 'on:completed'])
</script>

<template>
  <li class="flex justify-between items-center py-2">
    <div>
      <h5 class="text-xl font-medium dark:text-[#D266A3] mb-1">{{ note.content }}</h5>
      <p class="text-xs text-black/50 dark:text-gray-500">{{ note.time }}</p>
    </div>
    <div class="flex gap-3 [&>div]:cursor-pointer [&>div]:rounded-md [&>div]:p-1.5">
      <div class="bg-purple-100 dark:bg-purple-400/10">
        <TrashIcon @click="$emit('on:delete', note.id)" />
      </div>
      <div class="bg-green-100 dark:bg-green-400/10">
        <DoneIcon @click="$emit('on:completed', note.id, note.content, note.time, note.isDone)" />
      </div>
    </div>
  </li>
</template>
