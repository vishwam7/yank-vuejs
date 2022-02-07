<template>
      <div class="row">
      <div class="col-xl-12">
        <div class="d-flex flex-column-fluid row">
          <div class="col-md-7 col-12">
            <div class="card card-custom Authorized p-7 mt-3">
              <div class="d-flex row">
                <div class="col-sm-6 col-12">
                  <div class="Auth-pro">
                    <h3>Pro</h3>
                    <p>
                      Pensando em você que precisa ter um consumo alto de
                      automação e vários projetos ao mesmo tempo
                    </p>
                    <div class="btn15off">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm p-3 mb-5"
                      >
                        15% OFF
                      </button>
                      <p>
                        Neste plano você ativa descontos em cada um dos robôs, a
                        porcentagem acima se aplica em cada requisição.
                      </p>
                    </div>
                    <h6>Recursos deste plano</h6>
                    <div class="d-flex mt-5">
                      <div class="symbol-img mr-5 icn_history">
                        <span class="symbol"
                          ><img
                            src="@/assets/media/site-images/icn_history1.png"
                        /></span>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="font-weight-bold"
                          >Até 20.000 requisições</span
                        >
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="symbol-img mr-5 icn_history">
                        <span class="symbol"
                          ><img
                            src="@/assets/media/site-images/icn_my-services1.png"
                        /></span>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="font-weight-bold"
                          >Até 20 robôs ativos</span
                        >
                      </div>
                    </div>
                    <p>
                      <i class="fa fa-check mr-2" aria-hidden="true"></i
                      >Dashboard de Consumo
                    </p>
                    <p>
                      <i class="fa fa-check mr-2" aria-hidden="true"></i>Resumo
                      de Consumo
                    </p>
                    <p>
                      <i class="fa fa-check mr-2" aria-hidden="true"></i
                      >Histórico de requisições
                    </p>
                    <p>
                      <i class="fa fa-check mr-2" aria-hidden="true"></i>Saldo
                      acumulativo
                    </p>
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="d-flex">
                    <div class="symbol-img icn_change mr-2 ml-40">
                      <span class="symbol"
                        ><img src="@/assets/media/site-images/icn_change.png"
                      /></span>
                    </div>
                    <div class="d-flex">
                      <span class="font-weight-bold">Trocar de Plano</span>
                    </div>
                  </div>
                  <!-- <div class="text-right icn_change">
                                    <span class="symbol"><img src="assets/media/site-images/icn_change.png"></span>
                                    <span class="">Trocar de Plano</span>
                                    </div> -->
                  <div class="form-group">
                    <div class="radio-list mt-25">
                      <label class="radio auth-radio p-5">
                        <input type="radio" checked="checked" name="radios1" />
                        <span></span>
                        <div class="d-flex flex-column flex-grow-1">
                          <p>plano Anual</p>
                          <span class="R$">R$ 1.050,00 / mês</span>
                          <span class="Economize"
                            >Economize R$ 200,00 no pagamento anual</span
                          >
                        </div>
                      </label>
                      <label class="radio auth-radio p-5">
                        <input type="radio" name="radios1" />
                        <span></span>
                        <div class="d-flex flex-column flex-grow-1">
                          <p>Plano Mensal</p>
                          <span class="R$">R$ 1.250,00 / mês</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-12">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>