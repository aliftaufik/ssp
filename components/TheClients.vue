<template>
  <BaseContainer id="clients">
    <div class="max-w-md">
      <h2 class="text-h2-m sm:text-h2 font-playfair">
        {{ $t("clients.title") }}
      </h2>
      <p class="text-xs sm:text-base opacity-80 mt-4">
        {{ $t("clients.subtitle") }}
      </p>
    </div>

    <div
      class="
        flex flex-col
        sm:flex-row
        flex-wrap
        justify-center
        items-center
        mt-6
        sm:mt-14
      "
    >
      <img
        v-for="client in clientList"
        :key="client.id"
        :src="client.image"
        :alt="client.alt"
        :class="client.classStyle"
      >
    </div>

    <hr class="hidden sm:block border-b-2 border-black mt-10 lg:mt-12">
  </BaseContainer>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseContainer from './BaseContainer.vue'

export default Vue.extend({
  components: { BaseContainer },
  computed: {
    clientList () {
      return [
        {
          id: 1,
          image: require('images/clients/rewash.png'),
          alt: 'Rewash',
          classStyle: ''
        },
        {
          id: 2,
          image: require('images/clients/hti.png'),
          alt: 'Halalan Thayyiban Indonesia',
          classStyle: ''
        },
        {
          id: 3,
          image: require('images/clients/dkm.png'),
          alt: 'Digital Kreatif Milenial',
          classStyle: ''
        },
        {
          id: 4,
          image: require('images/clients/amanah.png'),
          alt: 'Amanah Realty',
          classStyle: 'mt-14 lg:mt-8 sm:mx-12'
        },
        {
          id: 5,
          image: require('images/clients/alaf.png'),
          alt: 'Alaf Property',
          classStyle: 'mt-14'
        }
      ]
    }
  }
})
</script>
