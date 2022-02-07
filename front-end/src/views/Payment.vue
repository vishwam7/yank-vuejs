<template>
  <!--begin::Aside-->
  <div class="info-box">
    <div class="row mt-5">
        <Voltar route="/pricing" />
      <div class="col-xl-12">
        <div class="d-flex flex-column-fluid row">
          <div class="col-md-8 col-12 ">
            <Plans image="media/site-images/Payment" />
          </div>
          <div class="col-md-4 col-12">
            <Depositions />
          </div>
        </div>
      </div>
    </div>
    <Pro>
        <div class="card card-custom payment p-7 mt-3">
          <div class="card mb-10">
            <img src="@/assets/media/site-images/Visa_card.png" />
          </div>
          <div>
            <form class="form">
              <div class="card-body payment_form">
                <div class="d-flex">
                  <div class="form-group w-70">
                    <label
                      ><span class="text-danger">*</span>Número do
                      Cartão:</label
                    >
                    <input
                      type="email"
                      class="form-control form-control-solid"
                      placeholder="4548-5896-0878-4567"
                    />
                  </div>
                  <div class="w-30 mt-5">
                    <img src="@/assets/media/site-images/visa.symbol.png" />
                  </div>
                </div>
                <div class="form-group">
                  <label
                    ><span class="text-danger">*</span>Nome Impresso no
                    Cartão:</label
                  >
                  <input
                    type="email"
                    class="form-control form-control-solid"
                    placeholder="José da Silva"
                  />
                </div>
                <div class="form-group row">
                  <div class="col-lg-5">
                    <label
                      ><span class="text-danger">*</span>Validade do
                      cartão:</label
                    >
                    <input
                      type="email"
                      class="form-control form-control-solid date"
                      placeholder="07/2020"
                    />
                  </div>
                  <div class="col-lg-7">
                    <label
                      ><span class="text-danger">*</span>Código de Segurança
                      CVC:</label
                    >
                    <input
                      type="email"
                      class="form-control form-control-solid"
                      placeholder="487"
                    />
                  </div>
                </div>
              </div>

              <div class="payment_card-4">
                <router-link to="/authorized" class="btn btn-orange mt-5"
                  >COMPRAR CRÉDITOS</router-link>
              </div>
            </form>
          </div>
        </div>
    </Pro>

    <!--begin::Dashboard-->
    <!--end::Dashboard-->
  </div>
  <!--end::Container-->
</template>

<script>
import Depositions from "@/common/components/Depositions";
import Pro from "@/common/components/Pro";
import Plans from "@/common/components/Plans";
import Voltar from "@/common/components/layout/Voltar";

export default {
  components: {
    Depositions,
    Pro,
    Plans,
    Voltar
  },
};
</script>

<style></style>
