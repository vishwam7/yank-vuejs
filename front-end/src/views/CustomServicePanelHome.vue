<template>
  <div class="info-box">
    <!--end::Aside-->

    <!--begin::Row-->
    <div class="row">
      <div class="col-xl-12">
        <div class="d-flext row">
          <div class="col-md-3 col-12 mt-5">
            <Card
              @filterCategory="filterCategory($event)"
              @filterFavorite="filterFavorite()"
            >
              <div class="card-header Cust_card_1 pb-5">
                <span class="spn_1  mb-5 mt-5">Meus Créditos</span>
                <div class="d-flex row Cust_circle">
                  <div class=" mr-4">
                    <span class=""
                      ><img src="@/assets/media/site-images/chart.png"
                    /></span>
                  </div>
                  <div class="d-flex flex-column row ">
                    <span class="color-blue">R$ 2.560,00</span>
                    <span class="color-orange">- R$ 480,00</span>
                    <span class="spn_5">05 | Robôs</span>
                  </div>
                </div>
                <div class="verRobos mb-5">
                  <a
                    href="#"
                    class="btn btn-white font-weight-bold btn-square mt-5 text-center"
                    >SAIBA MAIS</a
                  >
                </div>
              </div>
            </Card>
          </div>
          <div class="col-md-9 col-12 mt-5">
            <Search />
            <div class="price-area">
              <Price
                v-for="price in priceData"
                :key="price.id"
                :id="price.id"
                :image="price.image"
                :category="price.category"
                :header="price.header"
                :link="price.link"
                :paragraph="price.paragraph"
                :favorite="price.favorite"
                :online="price.online"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/common/components/layout/Card";
import Search from "@/common/components/Search";
import Price from "@/common/components/Price";
import priceData from "@/static/priceData.js";
export default {
  name: "Default",
  data() {
    return {
      priceData,
    };
  },
  components: {
    Card,
    Search,
    Price,
  },
  methods: {
    filterCategory(event) {
      this.priceData = priceData.filter((p) => p.category === event);
    },
    filterFavorite() {
      this.priceData = priceData.filter((p) => p.favorite === true);
    },
  },
};
</script>

<style></style>
