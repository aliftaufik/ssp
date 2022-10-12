<template>
  <div>
    <TheNavbar />
    <TheHero class="mt-6 sm:mt-12 lg:mt-32" />
    <TheServices class="mt-16 lg:mt-32" />
    <TheClients class="mt-24 sm:mt-28 lg:mt-44" />
    <TheContact />
    <div class="h-screen" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheNavbar from "~/components/navbar/TheNavbar.vue";
import TheServices from "~/components/services/TheServices.vue";
import TheClients from "~/components/TheClients.vue";
import TheContact from "~/components/TheContact.vue";
import TheHero from "~/components/TheHero.vue";

export default Vue.extend({
  components: { TheNavbar, TheHero, TheServices, TheClients, TheContact },
});
</script>
