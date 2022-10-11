<template>
  <div class="font-semibold text-lg">
    <nuxt-link
      :to="switchLocalePath('en')"
      :class="[
        'rounded-md px-1',
        $i18n.locale === 'en' ? 'bg-black text-white' : '',
      ]"
    >
      EN
    </nuxt-link>
    <span>/</span>
    <nuxt-link
      :to="switchLocalePath('id')"
      :class="[
        'rounded-md px-1',
        $i18n.locale === 'id' ? 'bg-black text-white' : '',
      ]"
    >
      ID
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
