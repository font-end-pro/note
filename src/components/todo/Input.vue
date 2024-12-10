<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/common/Input.vue'
import Button from '@/components/common/Button.vue'
import IAdd from '@/components/icons/IAdd.vue'
import { useToDoStore } from '@/stores/todo'

const todoStore = useToDoStore()

const noteInput = ref('')

const onSaveNote = () => {
  if (noteInput.value.trim()) {
    todoStore.addNote(noteInput.value)
    noteInput.value = ''
  }
}
</script>

<template>
  <div class="flex space-x-2 justify-center w-full mx-auto">
    <Input placeholder="✎ Input somethings to do..." @update:input="noteInput = $event" />
    <Button :icon="IAdd" text="Add" @on:click="onSaveNote" variant="purple" />
  </div>
</template>
