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
            >
              <div class="card-header Cust_card_1 pb-5">
                <span class="spn_1 mb-5 mt-5">Meus Créditos</span>
                <div class="d-flex row Cust_circle">
                  <div class="mr-4">
                    <span class=""
                      ><img src="@/assets/media/site-images/chart.png"
                    /></span>
                  </div>
                  <div class="d-flex flex-column row">
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
                :price="price.price"
              />
            </div>
            <div class="col-md-12 col-12" v-else>
              <div class="Search_Empty" :style="avatarBackgroundImage">
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
import Card from '@/common/components/layout/Card';
import Search from '@/common/components/Search';
import Price from '@/common/components/Price';
import categories from '@/static/categories';
import axios from 'axios';
import {useCookies} from 'vue3-cookies';
import config from '@/config';

export default {
  setup() {
    const {cookies} = useCookies();
    return {cookies};
  },
  name: 'Default',
  data() {
    return {
      categories,
      favoriteActive: false,
      priceData: [],
      avatarBackgroundImage: {
        backgroundImage: `url(${require('@/assets/media/site-images/empty.png')})`,
      },
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
    filterCategory(event) {
      this.categories.forEach(c => {
        c.name === event ? (c.active = true) : (c.active = false);
      });
      this.favoriteActive = false;
      this.priceData = priceData.filter(p => p.category === event);
    },
    filterFavorite() {
      this.categories.forEach(c => (c.active = false));
      this.favoriteActive = true;
      this.priceData = priceData.filter(p => p.favorite === true);
    },
  },
  watch: {
    $route(to, from) {
      to.query.favorite
        ? this.filterFavorite()
        : to.query.sectors
        ? this.filterCategory(to.query.sectors)
        : null;
    },
  },
  mounted() {
    // console.log("I am called4");
    // const route = this.$route;
    // route.query.favorite
    // 	? this.filterFavorite()
    // 	: route.query.sectors
    // 	? this.filterCategory(route.query.sectors)
    // 	: null;
    axios
      .get(`${config.url}/api/products`, {
        withCredentials: true,
      })
      .then(response => {
        // JSON responses are automatically parsed.
        this.priceData = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
};
</script>

<style></style>
