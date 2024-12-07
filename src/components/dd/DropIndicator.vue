<template>
  <div
    :data-before="beforeId || '-1'"
    :data-column="column"
    class="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
  />
</template>

<script>
export default {
  props: {
    beforeId: [String, Number],
    column: String,
  },
};
</script>
