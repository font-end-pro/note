<script setup lang="ts">
import { computed, type Component } from 'vue'
const props = defineProps<{
  icon: Component
  text: string
  class?: string
  variant?: 'default' | 'primary' | 'secondary'
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
    default:
      return `${props.focus ? 'bg-slate-200 font-medium bg-slate-200 dark:bg-gray-600 dark:text-gray-300' : 'font-normal text-gray-500'} focus:font-medium focus:text-gray-700 focus:bg-slate-200 dark:focus:bg-gray-600 dark:focus:text-gray-300`
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
