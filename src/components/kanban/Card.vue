<script setup lang="ts">
import { E_DND } from '@/enums/dnd'

const props = defineProps<{
  item: any,
  sortable: boolean
}>()

const emit = defineEmits([E_DND.DRAG_START, E_DND.DROP_SORT])

const onOver = (event: Event) => {
  if (props.sortable) (event?.target as HTMLElement)?.classList?.add('on-over')
}

const onLeave = (event: Event) => {
  if (props.sortable) (event?.target as HTMLElement)?.classList?.remove('on-over')
}

const startDrag = (event: Event) => {
  emit(E_DND.DRAG_START, event, props.item)
}

const dropItem = (event: Event) => {
  emit(E_DND.DROP_SORT, event, props.item)
}
</script>

<template>
  <div
    class="drag-el"
    draggable="true"
    @dragstart="startDrag"
    @dragover.prevent="onOver"
    @dragleave.prevent="onLeave"
    @drop="dropItem"
  >
    {{ item.title }}
  </div>
</template>

<style scoped>
.drag-el {
  padding: 10px 15px;
  background-color: var(--c-border, #363636);
  border: 1px solid var(--c-border, #363636);
  border-radius: 8px;
  cursor: grab;

}

.drag-el:not(:last-child) {
  margin-bottom: 10px;
}
.on-over {
  border-color: #33a06f;
}
</style>
