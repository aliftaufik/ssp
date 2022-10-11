<template>
  <div class="relative" id="services">
    <img
      src="~images/services/bg.png"
      alt=""
      class="inset-0 w-full object-fill sm:hidden"
    />
    <img
      src="~images/services/bg-md.png"
      alt=""
      class="inset-0 w-full object-fill hidden sm:block lg:hidden"
    />
    <img
      src="~images/services/bg-lg.png"
      alt=""
      class="inset-0 w-full object-fill hidden lg:block"
    />

    <div class="absolute inset-0 sm:flex items-center">
      <div
        class="
          sm:grid
          grid-cols-[repeat(16,minmax(0,1fr))]
          mt-24
          sm:mt-0
          items-center
          lg:mx-16
        "
      >
        <Container class="col-span-9 lg:col-span-7 text-white">
          <div class="sm:-mr-8 lg:-mr-0">
            <h2 class="text-h2-m sm:text-h2 font-playfair">
              {{ $t("services.title") }}
            </h2>
            <p class="text-xs sm:text-base italic mt-5 sm:mt-7">
              {{ $t("services.subtitle") }}
            </p>

            <div
              class="
                flex
                items-center
                space-x-4
                mt-3
                sm:mt-4
                border-b-[1.5px] border-white
                pb-3
              "
            >
              <img src="~images/services/profile.png" alt="" />

              <div>
                <h3 class="text-sm font-medium">Saleh Basir</h3>
                <p class="text-xs font-medium mt-0.5">
                  {{ $t("services.position") }}
                </p>
              </div>
            </div>
          </div>
        </Container>

        <div
          class="
            hidden
            lg:grid
            grid-cols-2
            col-span-9
            gap-8
            max-w-fit
            place-self-end
            mr-16
          "
        >
          <ServicesCard
            v-for="card in cardList"
            :key="card.id"
            :id="card.id"
            :icon="card.icon"
            :title="card.title"
            :text="card.text"
            :line-color="card.lineColor"
          />
        </div>

        <ServicesCardListScroll
          :card-list="cardList"
          class="col-span-7 mt-16 sm:mt-8"
        />

        <!-- <div class="col-span-7 mt-16 sm:mt-8 w-full lg:hidden">
          <div
            ref="cardContainer"
            class="
              flex flex-nowrap
              overflow-x-scroll
              snap-x snap-mandatory
              scroll-hide scroll-px-8
            "
          >
            <ServicesCard
              ref="cards"
              v-for="card in cardList"
              :key="card.id"
              :id="card.id"
              :icon="card.icon"
              :title="card.title"
              :text="card.text"
              :line-color="card.lineColor"
              class="flex-shrink-0 snap-start ml-8 last:mr-8"
            />
          </div>

          <div class="ml-8 flex space-x-2 mt-5">
            <button
              v-for="(val, index) in new Array(4)"
              :key="index"
              class="rounded-full w-2.5 h-2.5 border-2 border-white"
              :class="[currentIndex === index && 'bg-white']"
              @click="handleCardButton(index)"
            ></button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Container from "../Container.vue";
import ServicesCard from "./ServicesCard.vue";
import ServicesCardListScroll from "./ServicesCardListScroll.vue";

export default Vue.extend({
  components: { Container, ServicesCard, ServicesCardListScroll },

  computed: {
    cardList() {
      return [
        {
          id: 1,
          icon: require("images/services/cards/ipo.png"),
          title: this.$t("services.cards.ipo.title") as string,
          text: this.$t("services.cards.ipo.subtitle") as string,
          lineColor: "bg-[#AA5353]",
        },
        {
          id: 2,
          icon: require("images/services/cards/accompany.png"),
          title: this.$t("services.cards.accompany.title") as string,
          text: this.$t("services.cards.accompany.subtitle") as string,
          lineColor: "bg-[#FF9900]/75",
        },
        {
          id: 3,
          icon: require("images/services/cards/authority.png"),
          title: this.$t("services.cards.authority.title") as string,
          text: this.$t("services.cards.authority.subtitle") as string,
          lineColor: "bg-[#00AB4F]/[.54]",
        },
        {
          id: 4,
          icon: require("images/services/cards/prospect.png"),
          title: this.$t("services.cards.prospect.title") as string,
          text: this.$t("services.cards.prospect.subtitle") as string,
          lineColor: "bg-[#00E3F1]/75",
        },
      ];
    },
  },
});
</script>