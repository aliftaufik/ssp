<template>
  <Container>
    <div class="flex">
      <div class="text-center lg:text-start flex-shrink">
        <h1 class="font-playfair text-h1-m sm:text-h1 lg:max-w-2xl">
          {{ $t("hero.title") }}
        </h1>

        <p
          class="
            text-sm
            sm:text-lg
            opacity-80
            mt-4
            sm:mt-5
            lg:mt-8
            max-w-[90%]
            lg:max-w-xl
            mx-auto
            lg:mx-0
          "
        >
          {{ $t("hero.subtitle") }}
        </p>

        <button
          class="
            font-semibold
            text-[21px]
            sm:text-[30px]
            leading-[28px]
            sm:leading-[40px]
            rounded-md
            border-[3px] border-black
            px-2
            sm:px-4
            py-0.5
            sm:py-1
            mt-5
            sm:mt-10
            bg-white
            drop-shadow-[0px_1px_4px_rgba(0,_0,_0,_0.5)]
          "
        >
          {{ $t("hero.cta") }}
        </button>
      </div>

      <img
        src="~images/hero-image.png"
        alt=""
        class="block mt-6 sm:mt-14 max-w-[172px] sm:max-w-xs mx-auto"
      />
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from "vue";
import Container from "./Container.vue";

export default Vue.extend({ components: { Container } });
</script>