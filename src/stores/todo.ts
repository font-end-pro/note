import { dateFormatter } from '@/utils'
import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

type Note = {
  id: number
  content: string
  time: string
  isDone: boolean
}

export const useToDoStore = defineStore('todo', () => {
  const list = reactive<Array<Note>>([])

  const addNote = (text: string) => {
    let newId = Date.now()
    list.push({
      id: newId,
      content: text,
      time: dateFormatter(newId),
      isDone: false,
    })
  }

  const markCompleted = (id: number) => (list.find((el) => el.id === id)!.isDone = true)

  const progressingNotes = computed(() => {
    return list.filter((el) => el.isDone === false)
  })

  const completedNotes = computed(() => {
    return list.filter((el) => el.isDone === true)
  })

  const deleteNote = (id: number) => {
    const index = list.findIndex((el) => el.id === id)
    list.splice(index, 1)
  }

  const donePercent = computed(() => {
    let progress = 0
    if (completedNotes.value.length > 0) {
      progress = (completedNotes.value.length * 100) / list.length
    }
    return parseFloat(progress.toString()).toFixed(2)
  })

  return {
    list,
    addNote,
    markCompleted,
    progressingNotes,
    completedNotes,
    deleteNote,
    donePercent,
  }
})
