<script setup lang="ts">
import { ref } from 'vue'
import { VMarkdownView } from 'vue3-markdown'
import 'vue3-markdown/dist/style.css'
import EditorIcon from '@/components/note/EditorIcon.vue'
import PreviewIcon from '@/components/note/PreviewIcon.vue'
import ISave from '@/components/icons/ISave.vue'
import Button from '@/components/common/Button.vue'

const content = ref<string>('')
const mode = ref<string>('light')

const isPreview = ref<boolean>(false)
</script>

<template>
  <div
    class="w-full mb-4 border border-gray-200 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600"
  >
    <div class="p-2 !rounded-t-lg dark:bg-gray-800">
      <div v-if="isPreview" class="h-60 max-h-60 overflow-y-auto">
        <VMarkdownView :mode="mode" :content="content"></VMarkdownView>
      </div>
      <textarea
        class="w-full h-60 text-sm text-gray-900 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
        placeholder="Write a comment..."
        required
        v-model="content"
        v-else
      ></textarea>
    </div>

    <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
      <div
        class="flex items-center border border-slate-200 dark:border-slate-600 p-0.5 rounded-lg dark:text-slate-300"
      >
        <Button
          :icon="EditorIcon"
          text="Editor"
          @on:click="isPreview = false"
          :focus="!isPreview"
        />
        <Button :icon="PreviewIcon" text="Preview" @on:click="isPreview = true" />
      </div>

      <div class="flex items-center space-x-2">
        <button
          type="button"
          class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path
                d="M9.713 3.64c.581-.495.872-.743 1.176-.888a2.58 2.58 0 0 1 2.222 0c.304.145.595.393 1.176.888c.599.51 1.207.768 2.007.831c.761.061 1.142.092 1.46.204c.734.26 1.312.837 1.571 1.572c.112.317.143.698.204 1.46c.063.8.32 1.407.83 2.006c.496.581.744.872.889 1.176c.336.703.336 1.52 0 2.222c-.145.304-.393.595-.888 1.176a3.3 3.3 0 0 0-.831 2.007c-.061.761-.092 1.142-.204 1.46a2.58 2.58 0 0 1-1.572 1.571c-.317.112-.698.143-1.46.204c-.8.063-1.407.32-2.006.83c-.581.496-.872.744-1.176.889a2.58 2.58 0 0 1-2.222 0c-.304-.145-.595-.393-1.176-.888a3.3 3.3 0 0 0-2.007-.831c-.761-.061-1.142-.092-1.46-.204a2.58 2.58 0 0 1-1.571-1.572c-.112-.317-.143-.698-.204-1.46a3.3 3.3 0 0 0-.83-2.006c-.496-.581-.744-.872-.89-1.176a2.58 2.58 0 0 1 .001-2.222c.145-.304.393-.595.888-1.176c.52-.611.769-1.223.831-2.007c.061-.761.092-1.142.204-1.46a2.58 2.58 0 0 1 1.572-1.571c.317-.112.698-.143 1.46-.204a3.3 3.3 0 0 0 2.006-.83"
              />
              <path d="M12 13.496c0-2.003 2-1.503 2-3.506c0-2.659-4-2.659-4 0m2 6.007v-.5" />
            </g>
          </svg>
        </button>
        <button
          type="button"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg hover:bg-slate-200 dark:hover:bg-gray-600"
        >
          Cancel
        </button>
        <Button :icon="ISave" text="Save" @on:click="" variant="primary" />
      </div>
    </div>
  </div>
</template>
