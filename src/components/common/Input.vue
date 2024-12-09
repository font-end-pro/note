<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  type?: 'text' | 'password' | 'email' | 'url'
  placeholder?: string
  class?: string
}>()

const noteInput = ref('')

const emit = defineEmits(['update:input'])

const onInput = () => {
  emit('update:input', noteInput.value)
  noteInput.value = ''
}
</script>

<template>
  <input
    :type="props.type || 'text'"
    autocomplete="input"
    required=""
    class="w-full max-w-lg rounded-md bg-white dark:bg-gray-700 shadow-md focus:shadow-lg px-3 py-1.5 text-base dark:text-slate-200 placeholder:text-gray-400 sm:text-sm/6"
    :class="props.class"
    :placeholder="props.placeholder"
    v-model="noteInput"
    @change="onInput"
  />
</template>
