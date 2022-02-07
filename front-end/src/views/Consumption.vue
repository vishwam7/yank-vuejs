<template>
  <div class="info-box">
    <div class="row mt-5">
      <Voltar route="/detailing-empty" />
      <div class="col-xl-12">
        <div class="d-flex flex-column-fluid row">
          <Statistics />
          <div class="col-md-12 col-12">
            <div class="d-flext row">
              <Card />
              <Requests />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Statistics from "@/common/components/Statistics";
import Card from "@/common/components/layout/Card";
import Requests from "@/common/components/Requests";
import Voltar from "@/common/components/layout/Voltar";

export default {
  components: {
    Statistics,
    Card,
    Requests,
    Voltar
  },
};
</script>

<style></style>
