<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  icon: string
  text: string
  class?: string
  variant?: 'default' | 'primary'
  disabled?: boolean
}>()

const emit = defineEmits(['on:click'])

const onClick = () => {
  emit('on:click')
}

const style = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'text-white bg-blue-700 border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    default:
      return 'bg-gray-700 border-gray-700 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
  }
})
</script>

<template>
  <button
    type="button"
    :disabled="props.disabled"
    class="flex items-center px-3 py-1.5 text-sm font-medium shadow-lg hover:shadow-md rounded-lg"
    :class="(props.class, style)"
    @click="onClick"
  >
    <component :is="props.icon" class="mr-1" />
    <span>{{ props.text }}</span>
  </button>
</template>
