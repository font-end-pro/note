<script setup lang="ts">
import { ref } from 'vue'
import DropZone from './DropZone.vue'

const props = defineProps({
  sort: {
    type: Boolean,
    default: false
  }
})

  const items = ref([
  { id: 0, title: 'Item A', list: 1 },
  { id: 1, title: 'Item B', list: 1 },
  { id: 2, title: 'Item C', list: 1 },
  { id: 3, title: 'Item D', list: 2 }
])

const getList = (list: number) => (items.value ? items.value.filter(item => item.list === list) : [])

const getItemById = (event: DragEvent) => {
  const itemId = event.dataTransfer?.getData('itemId')
  const item = items.value.find((item: any) => item.id == itemId)
  return { item, itemId }
}

const startDrag = (event: DragEvent, item: { id: number }) => {
  event.dataTransfer!.dropEffect = 'move'
  event.dataTransfer!.effectAllowed = 'move'
  event.dataTransfer!.setData('itemId', item.id.toString())
}

const onDrop = (event: DragEvent, list: number) => {
  const { item } = getItemById(event)
  if (item) {
    item.list = list
  }
}

const onDropSort = (event: DragEvent, droppedItem: { id: number }) => {
  if (!props.sort) return
  const { item, itemId } = getItemById(event)
  if (item) {
    const itemPosition = items.value.findIndex((item: any) => item.id == itemId)
    const droppedItemPosition = items.value.findIndex((item: any) => item.id == droppedItem.id)
    items.value.splice(itemPosition, 1)
    items.value.splice(droppedItemPosition, 0, item)
  }
}
</script>

<template>
  <div class="demo">
    <DropZone
      title="In progress"
      :items="getList(1)"
      :sortable="sort"
      @drag-start="startDrag"
      @drop-sort="onDropSort"
      @drop="(event: DragEvent) => onDrop(event, 1)"
    />
    <DropZone
      title="Done"
      :items="getList(2)"
      :sortable="sort"
      @drag-start="startDrag"
      @drop-sort="onDropSort"
      @drop="(event: DragEvent) => onDrop(event, 2)"
    />
  </div>
</template>

<style scoped>
.demo {
  max-width: 600px;
  padding: 30px;
}
</style>
