<template>
  <ul class="hidden sm:flex space-x-12 pb-1.5 border-b border-black text-sm">
    <li v-for="navItem in navList" :key="navItem.id">
      <nuxt-link :key="navItem.id" :to="navItem.to">
        {{ navItem.text }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    navList: {
      type: Array as PropType<
        Array<{
          id: number;
          text: string;
          to: string;
        }>
      >,
    },
  },
});
</script>