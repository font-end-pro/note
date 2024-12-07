<script setup>
import Input from '@/components/Input.vue'
import Pending from '@/components/Pending.vue'
import Done from '@/components/Done.vue'
import Static from "@/components/Static.vue";
</script>

<template>
  <section>
    <Input />
    <div class="flex gap-5 p-5">
      <Pending class="basis-1/2" />
      <Done class="basis-1/2" />
    </div>
    <Static />
  </section>
</template>
