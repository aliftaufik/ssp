<template>
  <div>
    <TheNavbar ref="navbar" />
    <TheHero class="mt-6 sm:mt-12 lg:mt-32" />
    <TheServices class="mt-16 lg:mt-32" />
    <TheClients class="mt-24 sm:mt-28 lg:mt-44" />
    <TheContact class="mt-2 sm:mt-36" />

    <img
      src="~images/back-to-top.svg"
      alt="Back To Top"
      class="
        fixed
        right-8
        sm:right-32
        bottom-7
        sm:bottom-16
        lg:right-40 lg:bottom-12
        w-14
        sm:w-20
        cursor-pointer
        transition-transform
      "
      :class="[isBackToTopShown ? '' : 'translate-y-[175%]']"
      @click="handleScrollToTop"
    />
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

  data() {
    return {
      intersectionObserver: null as IntersectionObserver | null,
      isBackToTopShown: false,
    };
  },

  methods: {
    handleIntersect(entries: IntersectionObserverEntry[]) {
      if (entries[0].intersectionRatio === 1) {
        this.isBackToTopShown = false;
      } else if (entries[0].intersectionRatio === 0) {
        this.isBackToTopShown = true;
      }
    },

    handleScrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

  mounted() {
    this.intersectionObserver = new IntersectionObserver(this.handleIntersect, {
      threshold: [0, 1],
    });

    this.intersectionObserver?.observe(
      (this.$refs.navbar as InstanceType<typeof TheNavbar>)!.$el
    );
  },

  beforeDestroy() {
    this.intersectionObserver?.unobserve(
      (this.$refs.navbar as InstanceType<typeof TheNavbar>)!.$el
    );
    this.intersectionObserver?.disconnect();
  },
});
</script>
