<template>
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
      >&times;</a
    >
    <a @click="routingHome">Service Panel Home</a>
    <a @click="routingDetailingEmpty">Service Panel - Detailing & Empty</a>
    <a @click="routingDetailingConsumption"
      >Service Panel Detailing & Consumption</a
    >
    <a @click="routingFilterFavorite">Service Panel Filter Favorite</a>
    <a @click="routingServicePanelDetailing">Service Panel Detailing</a>
    <a @click="routingFilterSectors">Service Panel Filter Sectors</a>
    <a @click="routingSearchEmpty">Lead Service Panel Search Empty</a>
    <a @click="routingPricing">Checkout Pricing</a>
    <a @click="routingConsumption">Checkout Consumption</a>
  </div>
</template>

<script>
export default {
  methods: {
    routingHome() {
      this.$router.push('/');
      closeNav();
    },
    routingDetailingEmpty() {
      this.$router.push('/detailing-empty');
      closeNav();
    },
    routingDetailingConsumption() {
      this.$router.push('/detailing-consumption');
      closeNav();
    },
    routingFilterFavorite() {
      this.$router.push({path: '/', query: {favorite: true}});
      closeNav();
    },
    routingServicePanelDetailing() {
      this.$router.push('/service-panel-detailing');
      closeNav();
    },
    routingFilterSectors() {
      this.$router.push({path: '/', query: {sectors: 'Back-Office & IT'}});
      closeNav();
    },
    routingSearchEmpty() {
      this.$router.push('/detailing-empty');
      closeNav();
    },
    routingPayment() {
      this.$router.push('/payment');
      closeNav();
    },
    routingPricing() {
      this.$router.push('/pricing');
      closeNav();
    },
    routingConsumption() {
      this.$router.push('/consumption');
      closeNav();
    },
  },
};
</script>

<style scoped>
.sidenav a {
  cursor: pointer;
}
</style>
