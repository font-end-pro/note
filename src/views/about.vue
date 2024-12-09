<script setup>
const linkStyle = "text-gray-800 font-semibold dark:text-[#14A348]"
</script>

<template>
  <div class="about text-start py-10 px-20">
    <div class="py-5 text-2xl font-semibold">
      <h1>1. Description</h1>
    </div>
    <div class="[&>p]:py-2 [&>p]:leading-5 [&>p]:text-base">
      <p>The webapp display-add-check-delete functions for save notes to do list by side every total field.</p>
    </div>

    <div class="py-5 text-2xl font-semibold">
      <h1>2. Disclaim</h1>
    </div>
    <div class="[&>p]:py-2 [&>p]:leading-5 [&>p]:text-base">
      <p>Any discussions or problem, please contact via <a :class="linkStyle" href="mailto:ititiu19228@student.hcmiu.edu.vn">email</a>.</p>
      <p>Contribution & report bugs at <a :class="linkStyle" href="https://github.com/thuongtruong109/kados/pulls">here</a>.</p>
      <p><a :class="linkStyle" href="https://github.com/thuongtruong109/kados/LICENSE">MIT license</a> 2022 of <a :class="linkStyle" href="https://github.com/thuongtruong109">@thuongtruong109</a>.</p>
    </div>
  </div>
</template>
