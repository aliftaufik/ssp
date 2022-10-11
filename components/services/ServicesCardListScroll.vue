<template>
  <div class="w-full lg:hidden">
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
        v-for="card in cardList"
        :id="card.id"
        ref="cards"
        :key="card.id"
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
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import ServicesCard from './ServicesCard.vue'

export default Vue.extend({
  components: { ServicesCard },

  props: {
    cardList: {
      type: Array as PropType<
        Array<{
          id: number;
          icon: any;
          title: string;
          text: string;
          lineColor: string;
        }>
      >,
      default: () => []
    }
  },

  data () {
    return {
      intersectionObserver: null as IntersectionObserver | null,
      currentIndex: 0
    }
  },

  mounted () {
    this.intersectionObserver = new IntersectionObserver(this.handleIntersect, {
      threshold: 1
    });

    (this.$refs.cards as InstanceType<typeof ServicesCard>[])?.forEach(
      (card) => {
        this.intersectionObserver?.observe(card.$el)
      }
    )
  },

  beforeDestroy () {
    (this.$refs.cards as InstanceType<typeof ServicesCard>[])?.forEach(
      (card) => {
        this.intersectionObserver?.unobserve(card.$el)
      }
    )
    this.intersectionObserver?.disconnect()
  },

  methods: {
    handleIntersect (entries: IntersectionObserverEntry[]) {
      const cardIndex = (
        this.$refs.cards as InstanceType<typeof ServicesCard>[]
      ).findIndex(card => entries.some(entry => entry.target === card.$el))

      if (entries[0].intersectionRatio >= 1) {
        this.currentIndex = cardIndex
      }
    },

    handleCardButton (index: number = 0) {
      const cardId = this.cardList[index].id
      const card = (
        this.$refs.cards as InstanceType<typeof ServicesCard>[]
      ).find(card => Number(card.id === cardId))

      card?.$el.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      })
    }
  }
})
</script>
