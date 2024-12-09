<script setup lang="ts">
import { E_DND } from '@/enums/dnd';
import Card from './Card.vue'

defineProps<{
  title: string,
  items: any,
  sortable: boolean,
  onDrop: (event: Event) => void
  onDragStart: void,
  onDropSort: void
}>()

const emit = defineEmits([E_DND.DRAG_START, E_DND.DROP_SORT])

const handleDragStart = (event: Event, item: any) => {
  emit(E_DND.DRAG_START, event, item);
}

const handleDropSort = (event: Event, droppedItem: any) => {
  emit(E_DND.DROP_SORT, event, droppedItem);
}
</script>

<template>
  <div class="drop-zone" @drop="onDrop($event)" @dragenter.prevent @dragover.prevent>
    <h3>{{ title }}</h3>
    <Card
      v-for="item in items"
      :key="item.id"
      :item="item"
      :sortable="sortable"
      @drag-start="handleDragStart"
      @drop-sort="handleDropSort"
    />
  </div>
</template>

<style scoped>
.drop-zone {
  flex: 1 1 50%;
  padding: 15px;
  border: 1px solid var(--c-border, #363636);
  border-radius: 8px;
}
h3 {
  font-size: 18px;
  margin-bottom: 15px;
}
</style>
