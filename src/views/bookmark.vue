<script setup lang="ts">
import { ref } from 'vue'
import { dateFormatter } from '@/utils'
import Input from '@/components/common/Input.vue'
import Button from '@/components/common/Button.vue'
import IAdd from '@/components/icons/IAdd.vue'
import IPending from '@/components/todo/PendingIcon.vue'
import { useToDoStore } from '@/stores/todo'

const input = ref('')

// const onSaveNote = () => {
//   if (input.value.trim()) {
//     let date = new Date()
//     store.addNote(store.pendingList.length, input.value, false)
//     input.value = ''
//   }
// }

const bookmarks = ref([])

const addNewBookmark = () => {
  bookmarks.value.push({
    id: bookmarks.value.length,
    title: input.value,
    url: 'https://www.google.com',
    icon: 'https://www.google.com/favicon.ico',
    isFavourite: false,
  })
  input.value = ''
}
</script>

<template>
  <section class="flex flex-col">
    <div>
      <Button :icon="IAdd" text="New" @on:click="onSaveNote" variant="primary" />
      <Button :icon="IAdd" text="Search" @on:click="onSaveNote" variant="primary" />
      <Button :icon="IAdd" text="Filter" @on:click="onSaveNote" variant="primary" />
    </div>
    <!-- <h1>Bookmark page {{ dateFormatter(Date.now()) }}</h1> -->
    <Input placeholder="✎ Input somethings to do..." @update:input="input = $event" />
    <div class="flex space-x-2 justify-center w-full">
      <Input placeholder="✎ Input somethings to do..." @update:input="input = $event" />
      <Button :icon="IAdd" text="Add" @on:click="onSaveNote" variant="primary" />
    </div>
  </section>
</template>
