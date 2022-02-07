<template>
  <div class="col-md-9 col-12 mt-5">
    <ConsumptionSearch />
    <div class="card card-custom mt-5">
      <div class="card-header Consumption_card_head p-2">
        <div class="">
          <span class="color-blue">hoje</span>
        </div>
        <span>Saldo: R$ 1.150,27</span>
      </div>

      <div class="card-body">
        <ul class="pl-4 pr-4">
          <ConsumptionCard
            v-for="card in consumptionCardData.hoje"
            :key="card.id"
            :id="card.id"
            :image="card.image"
            :category="card.category"
            :discount="card.discount"
            :before="card.before"
            :after="card.after"
            :link="card.link"
            :statusText="card.statusText"
            :statusImage="card.statusImage"
            :statusAt="card.statusAt"
          />
        </ul>
      </div>
      <div class="card card-custom mt-5">
        <div class="card-header Consumption_card_head p-2">
          <span class="color-blue text-center">ontem</span>
          <span>Saldo: R$ 1.150,27</span>
        </div>

        <div class="card-body">
          <ul class="pl-4 pr-4">
            <ConsumptionCard
              v-for="card in consumptionCardData.ontem"
              :key="card.id"
              :id="card.id"
              :image="card.image"
              :category="card.category"
              :discount="card.discount"
              :before="card.before"
              :after="card.after"
              :link="card.link"
              :statusText="card.statusText"
              :statusImage="card.statusImage"
              :statusAt="card.statusAt"
            />
          </ul>
        </div>
      </div>
      <div class="card card-custom mt-5">
        <div class="card-header Consumption_card_head p-2">
          <span class="color-blue text-center">16/01/2020</span>
          <span>Saldo: R$ 1.150,27</span>
        </div>

        <div class="card-body">
          <ul class="pl-4 pr-4">
            <ConsumptionCard
              v-for="card in consumptionCardData.byDate"
              :key="card.id"
              :id="card.id"
              :image="card.image"
              :category="card.category"
              :discount="card.discount"
              :before="card.before"
              :after="card.after"
              :link="card.link"
              :statusText="card.statusText"
              :statusImage="card.statusImage"
              :statusAt="card.statusAt"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConsumptionSearch from "@/common/components/ConsumptionSearch";
import ConsumptionCard from "@/common/components/ConsumptionCard";
import consumptionCardData from "@/static/consumptionCard";

export default {
  data() {
    return {
      consumptionCardData,
    };
  },
  components: {
    ConsumptionSearch,
    ConsumptionCard,
  },
};
</script>

<style></style>
