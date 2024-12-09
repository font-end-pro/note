<script setup>
import Input from '@/components/todo/Input.vue'
import Pending from '@/components/todo/Pending.vue'
import Done from '@/components/todo/Done.vue'
import Static from '@/components/todo/Static.vue'
</script>

<template>
  <section class="space-y-8">
    <Input />
    <div class="flex gap-5 p-5">
      <Pending class="basis-1/2" />
      <Done class="basis-1/2" />
    </div>
    <Static />
  </section>
</template>
