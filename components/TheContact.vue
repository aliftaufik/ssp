<template>
  <div id="contact" class="relative">
    <img
      src="~images/contacts/bg.png"
      alt=""
      class="w-full object-fill sm:hidden"
    >
    <img
      src="~images/contacts/bg-md.png"
      alt=""
      class="w-full object-fill hidden sm:block lg:hidden"
    >
    <img
      src="~images/contacts/bg-lg.png"
      alt=""
      class="w-full object-fill hidden lg:block"
    >

    <div class="absolute inset-0 text-white mt-24 lg:mt-20">
      <h2
        class="
          text-h2-m
          sm:text-h2
          font-playfair
          text-center
          border-b border-white
          pb-2
          max-w-fit
          mx-auto
        "
      >
        {{ $t("footer.title") }}
      </h2>

      <div class="mt-12">
        <img
          src="~images/contacts/map.png"
          alt=""
          class="w-full object-cover object-center sm:hidden"
        >

        <img
          src="~images/contacts/map-md.png"
          alt=""
          class="w-full object-cover object-center hidden sm:block lg:hidden"
        >

        <img
          src="~images/contacts/map-lg.png"
          alt=""
          class="w-full object-cover object-center hidden lg:block"
        >

        <BaseContainer>
          <hr class="border-b-[.7px] border-[#eeeeee]/50 mt-4 sm:mt-12">
        </BaseContainer>
      </div>

      <BaseContainer class="mt-7 sm:mt-11">
        <div class="sm:grid grid-cols-2 lg:grid-cols-3">
          <img
            src="~images/logo-full.png"
            alt="SSP Logo"
            class="hidden sm:block col-span-2 lg:col-span-1"
          >

          <div class="sm:mt-12 lg:mt-0">
            <h3 class="font-semibold text-xl sm:text-2xl">
              {{ $t("footer.address") }}
            </h3>
            <p class="font-medium opacity-90 text-sm sm:text-base mt-0.5">
              Indonesia Stock Exchange Tower 2, 17th Floor <br>
              Jl. Jend. Sudirman Kav 52-53 <br>
              Jakarta, 12190 Indonesia
            </p>

            <a
              href="#"
              class="font-semibold text-sm sm:text-base mt-2.5 inline-block"
            >
              {{ $t("footer.direction") }}
            </a>
          </div>

          <div class="mt-7 sm:mt-12 lg:mt-0 max-w-fit justify-self-end">
            <h3 class="font-semibold text-xl sm:text-2xl">
              {{ $t("footer.contact") }}
            </h3>
            <p class="font-medium opacity-90 text-sm sm:text-base mt-0.5">
              ssp.@salehmology.gmail.com <br>
              +62 21 515 7799 — (No. Fax)
            </p>

            <div class="flex space-x-12 mt-2.5">
              <a v-for="socmed in socmedList" :key="socmed.id" href="#">
                <img :src="socmed.image" :alt="socmed.alt">
              </a>
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseContainer from './BaseContainer.vue'

export default Vue.extend({
  components: { BaseContainer },

  computed: {
    socmedList () {
      return [
        {
          id: 1,
          image: require('images/contacts/socmed/Instagram.png'),
          alt: 'Instagram'
        },
        {
          id: 2,
          image: require('images/contacts/socmed/Linkedin.png'),
          alt: 'Linkedin'
        },
        {
          id: 3,
          image: require('images/contacts/socmed/Youtube.png'),
          alt: 'Youtube'
        }
      ]
    }
  }
})
</script>
