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
              :categories="categories"
              :favoriteActive="favoriteActive"
            />
          </div>
          <div class="col-md-9 col-12 mt-5">
            <Search />
            <div class="price-area" v-if="!emptyPriceData">
              <Price
                v-for="price in priceData"
                :key="price.id"
                :id="price.id"
                :image="price.image"
                :category="price.category"
                :header="price.header"
                :link="price.link"
                :paragragh="price.paragragh"
                :favorite="price.favorite"
                :online="price.online"
              />
            </div>
            <div class="col-md-12 col-12" v-else>
              <div
                class="Search_Empty"
                :style="avatarBackgroundImage"
              >
                <!-- <img src="assets/media/site-images/empty.png"> -->
                <div class="Search_Empty_txt">
                  <h2>Ops! nenhum resultado encontrado.</h2>
                  <span>O que eu faço?</span>
                  <p>
                    Verifique os termos digitados ou os filtros
                    selecionados.Utilize termos genéricos na busca.
                  </p>
                </div>
              </div>
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
import {getAllProducts} from '../services/authenticateService';
import categories from "@/static/categories";
export default {
  name: "Default",
  data() {
    return {
      categories,
      favoriteActive: false,
      priceData,
      avatarBackgroundImage: {
          backgroundImage: `url(${require('@/assets/media/site-images/empty.png')})`
        }
    };
  },
  components: {
    Card,
    Search,
    Price,
  },
  computed: {
    emptyPriceData() {
      return this.priceData.length === 0;
    },
    
  },
  methods: {
    getAllProducts(){
      getAllProducts().then(response =>{
        console.log(response)
        this.priceData = response
      })
    },
    filterCategory(event) {
        this.categories.forEach(c => {
          c.name === event ? c.active = true : c.active = false;
        })
        this.favoriteActive = false;
      this.priceData = priceData.filter((p) => p.category === event);
    },
    filterFavorite() {
      this.categories.forEach(c => c.active = false);
      this.favoriteActive = true;
      this.priceData = priceData.filter((p) => p.favorite === true);
    },
  },
  watch: {
    $route(to, from) {
      to.query.favorite ? this.filterFavorite() : to.query.sectors ? this.filterCategory(to.query.sectors) : null;
    }
  },
  mounted() {    
    this.getAllProducts();
    const route = this.$route;
    route.query.favorite ? this.filterFavorite() : route.query.sectors ? this.filterCategory(route.query.sectors) : null;
  }
};
</script>

<style></style>
