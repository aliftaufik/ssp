<template>
  <Container class="mt-6">
    <div class="flex items-center">
      <img src="~images/logo.png" alt="SSP Logo" class="w-[50px] h-[50px]" />

      <NavbarList :nav-list="navList" class="ml-12" />

      <LangSwitcher class="hidden sm:block ml-auto" />

      <NavbarListMobile :nav-list="navList" />
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from "vue";
import Container from "../Container.vue";
import LangSwitcher from "../LangSwitcher.vue";
import NavbarList from "./NavbarList.vue";
import NavbarListMobile from "./NavbarListMobile.vue";

export default Vue.extend({
  components: { Container, NavbarList, NavbarListMobile, LangSwitcher },
  computed: {
    navList() {
      return [
        {
          id: 1,
          text: this.$t("navbar.about"),
          to: "#about",
        },
        {
          id: 2,
          text: this.$t("navbar.services"),
          to: "#services",
        },
        {
          id: 3,
          text: this.$t("navbar.clients"),
          to: "#clients",
        },
        {
          id: 4,
          text: this.$t("navbar.contact"),
          to: "#contact",
        },
      ] as Array<{
        id: number;
        text: string;
        to: string;
      }>;
    },
  },
});
</script>