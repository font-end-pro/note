<script setup lang="ts">
import { computed, type Component } from 'vue'
const props = defineProps<{
  icon: Component
  text: string
  class?: string
  variant?: 'default' | 'primary' | 'purple' | 'green'
  disabled?: boolean
  focus?: boolean
}>()

const emit = defineEmits(['on:click'])

const onClick = () => {
  emit('on:click')
}

const style = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'font-medium text-white shadow-lg hover:shadow-md bg-blue-700 border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    // case 'secondary':
    //   return 'font-medium text-gray-700 shadow-lg hover:shadow-md bg-gray-200 border-gray-200 hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
    case 'purple':
      return 'font-medium text-white shadow-lg hover:shadow-md bg-purple-500 border-purple-500 hover:bg-purple-600 focus:ring-2 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-600'
    // case 'green':
    //   return 'font-medium text-white shadow-lg hover:shadow-md bg-green-700 border-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
    default:
      return props.focus
        ? 'bg-slate-200 font-medium bg-slate-200 dark:bg-gray-600 dark:text-gray-300'
        : 'font-normal text-gray-500'
  }
})
</script>

<template>
  <button
    type="button"
    :disabled="props.disabled"
    class="flex items-center px-3 py-1.5 text-sm rounded-lg"
    :class="(props.class, style)"
    @click="onClick"
  >
    <component :is="props.icon" class="mr-1" />
    <span>{{ props.text }}</span>
  </button>
</template>
