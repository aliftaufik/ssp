<template>
  <div
    class="
      w-[280px]
      h-[270px]
      rounded-lg
      bg-white
      drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
      pt-2
    "
  >
    <div class="w-full h-1.5 rounded-full" :class="lineColor"></div>

    <div class="px-7 pt-4">
      <img :src="icon" alt="" />
      <h3 class="font-semibold text-2xl mt-3">{{ title }}</h3>
      <p class="text-xs mt-1 leading-6 text-[#5A5A5A]">{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: Number,
    icon: String,
    title: String,
    text: String,
    lineColor: String,
  },
});
</script>