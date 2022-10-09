<template>
  <div class="block sm:hidden ml-auto relative">
    <transition enter-class="!bg-transparent" leave-to-class="!bg-transparent">
      <div
        v-if="isMenuShown"
        class="
          fixed
          z-10
          inset-0
          bg-black/40
          transition-[background-color]
          duration-300
          delay-150
        "
      ></div>
    </transition>

    <div ref="navbarMenuMobile">
      <img
        src="~images/navbar/burger.png"
        alt="Navigation menu"
        class="relative z-20 w-[55px] cursor-pointer"
        @click="toggleMenu"
      />

      <div
        :class="[
          `absolute z-20 right-4 top-[110%] w-[276px] bg-cover overflow-hidden transition-[height] duration-300`,
          isMenuShown ? 'h-[326px]' : 'h-0',
        ]"
      >
        <img
          src="~images/navbar/menu.png"
          alt=""
          class="absolute top-0 right-0 w-[276px] h-[326px] object-right-top"
        />

        <div class="relative flex flex-col space-y-4 items-center mt-16">
          <nuxt-link
            v-for="navItem in navList"
            :key="navItem.id"
            :to="navItem.to"
            @click.native="isMenuShown = false"
            active-class="border-b border-black font-semibold text-xl"
          >
            {{ navItem.text }}
          </nuxt-link>

          <LangSwitcher />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import LangSwitcher from "../LangSwitcher.vue";

export default Vue.extend({
  components: { LangSwitcher },
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

  data() {
    return {
      isMenuShown: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuShown = !this.isMenuShown;
    },

    handleClickOutside(ev: MouseEvent) {
      if (
        !(this.$refs.navbarMenuMobile as HTMLDivElement)?.contains(
          ev.target as Node
        )
      ) {
        this.isMenuShown = false;
      }
    },
  },

  mounted() {
    window.addEventListener("click", this.handleClickOutside);
  },

  beforeDestroy() {
    window.removeEventListener("click", this.handleClickOutside);
  },
});
</script>