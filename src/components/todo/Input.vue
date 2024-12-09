<script setup lang="ts">
import Input from '@/components/common/Input.vue'
import Button from '@/components/common/Button.vue'
import IAdd from '@/components/icons/IAdd.vue'
import IPending from '@/components/todo/PendingIcon.vue'
import { useToDoStore } from '@/stores/todo'
import { ref } from 'vue'
const store = useToDoStore()

const noteInput = ref('')

const onSaveNote = () => {
  if (noteInput.value.trim()) {
    let date = new Date()
    store.addNote(store.pendingList.length, noteInput.value, false)
    noteInput.value = ''
  }
}
</script>

<template>
  <div class="flex space-x-2 justify-center w-full mx-auto">
    <Input placeholder="✎ Input somethings to do..." @update:input="noteInput = $event" />
    <Button :icon="IAdd" text="Add" @on:click="onSaveNote" variant="primary" />
  </div>
</template>
