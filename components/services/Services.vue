<template>
  <div class="relative pt-24" id="services">
    <img
      src="~images/services/bg.png"
      alt=""
      class="absolute inset-0 w-full object-fill"
    />

    <div class="relative">
      <Container class="text-white">
        <h2 class="text-h2-m font-playfair">{{ $t("services.title") }}</h2>
        <p class="text-xs italic mt-5">{{ $t("services.subtitle") }}</p>

        <div
          class="
            flex
            items-center
            space-x-4
            mt-3
            border-b-[1.5px] border-white
            pb-3
          "
        >
          <img src="~images/services/profile.png" alt="" />

          <div>
            <h3 class="text-sm font-medium">Saleh Basir</h3>
            <p class="text-xs font-medium">{{ $t("services.position") }}</p>
          </div>
        </div>
      </Container>

      <div class="mt-16 w-full">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Container from "../Container.vue";
import ServicesCard from "./ServicesCard.vue";

export default Vue.extend({
  components: { Container, ServicesCard },

  data() {
    return {
      intersectionObserver: null as IntersectionObserver | null,
      currentIndex: 0,
    };
  },

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

  methods: {
    handleIntersect(entries: IntersectionObserverEntry[]) {
      const cardIndex = (
        this.$refs.cards as InstanceType<typeof ServicesCard>[]
      ).findIndex((card) => entries.some((entry) => entry.target === card.$el));

      if (entries[0].intersectionRatio >= 1) {
        this.currentIndex = cardIndex;
      }
    },

    handleCardButton(index: number = 0) {
      // (this.$refs.cardContainer as Element)?.scro
      const cardId = this.cardList[index].id;
      const card = (
        this.$refs.cards as InstanceType<typeof ServicesCard>[]
      ).find((card) => Number(card.id === cardId));

      card?.$el.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    },
  },

  mounted() {
    this.intersectionObserver = new IntersectionObserver(this.handleIntersect, {
      threshold: 1,
    });

    (this.$refs.cards as InstanceType<typeof ServicesCard>[])?.forEach(
      (card) => {
        this.intersectionObserver?.observe(card.$el);
      }
    );
  },

  beforeDestroy() {
    this.intersectionObserver?.disconnect();
  },
});
</script>