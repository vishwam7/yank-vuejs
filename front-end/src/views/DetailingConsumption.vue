<template>
  <div class="info-box">
    <div class="row mt-5">
      <Voltar route="/service-panel-detailing" />
      <div class="col-md-8 col-12">
        <div class="card card-custom Detailing p-7">
          <FlightTickets
            image="media/site-images/travel"
            link="Pesquisa de passagem aérea"
            paragraph="Deixe uma pesquisa configurada e receba notificação sobre as alterações de valores de acordo com uma faixa de valor pré determinada. Você define o destino e a faixa de preço esperada e encontramos as melhores opções de datas e companhias aéreas. Existe a opção de você definir o destino e a data e retornarmos as melhores opções de preços e vôos."
            after="R$ 0,67 / Requisição"
            before="R$ 1,10"
            discount="20% OFF"
            category="Viagem"
          />
          <TestForm :warning="true">
            <div class="form-group Detailing_form mt-10">
              <label><span class="text-danger">*</span>Origem:</label>
              <input
                type="email"
                class="form-control form-control-solid"
                placeholder="Ex: Manager"
              />
            </div>
            <div class="form-group Detailing_form mt-10">
              <label><span class="text-danger">*</span>Destino:</label>
              <input
                type="email"
                class="form-control form-control-solid"
                placeholder="Ex: Rio de Janeiro, RJ, Brazil"
              />
            </div>

            <div class="d-flex row form-group">
              <div class="col-lg-6">
                <label>Data de ida:</label>
                <div class="input-group date">
                  <input
                    type="text"
                    class="form-control"
                    id="kt_datepicker_2"
                    readonly="readonly"
                    placeholder="Select date"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <label>Date de volta:</label>
                <div class="input-group date">
                  <input
                    type="text"
                    class="form-control"
                    id="kt_datepicker_2"
                    readonly="readonly"
                    placeholder="Select date"
                  />
                </div>
              </div>
            </div>

            <div class="form-group Detailing_form row">
              <div class="col-lg-6">
                <label><span class="text-danger">*</span>Valor máximo:</label>
                <input
                  type="email"
                  class="form-control form-control-solid"
                  placeholder="R$ 100,00"
                />
              </div>
              <div class="col-lg-6">
                <label><span class="text-danger">*</span>Valor mínimo:</label>
                <input
                  type="email"
                  class="form-control form-control-solid"
                  placeholder="R$ 80,00"
                />
              </div>
            </div>
          </TestForm>
        </div>
        <RobotDocumentation>
          <div class="form-group Detailing_form mt-10">
            <label><span class="text-danger">*</span>Origem:</label>
            <input
              type="email"
              class="form-control form-control-solid"
              placeholder="Ex: Manager"
            />
          </div>
          <div class="form-group Detailing_form mt-10">
            <label><span class="text-danger">*</span>Destino:</label>
            <input
              type="email"
              class="form-control form-control-solid"
              placeholder="Ex: Rio de Janeiro, RJ, Brazil"
            />
          </div>

          <div class="d-flex row form-group">
            <div class="col-lg-6">
              <label>Data de ida:</label>
              <div class="input-group date">
                <input
                  type="text"
                  class="form-control"
                  id="kt_datepicker_2"
                  readonly="readonly"
                  placeholder="Select date"
                />
                <!-- <div class="input-group-append">
                                             <span class="input-group-text">
                                                <i class="la la-calendar-check-o"></i>
                                             </span>
                                          </div> -->
              </div>
            </div>
            <div class="col-lg-6">
              <label>Date de volta:</label>
              <div class="input-group date">
                <input
                  type="text"
                  class="form-control"
                  id="kt_datepicker_2"
                  readonly="readonly"
                  placeholder="Select date"
                />
                <!-- <div class="input-group-append">
                                             <span class="input-group-text">
                                                <i class="la la-calendar-check-o"></i>
                                             </span>
                                          </div> -->
              </div>
            </div>
          </div>

          <div class="form-group Detailing_form row">
            <div class="col-lg-6">
              <label><span class="text-danger">*</span>Valor máximo:</label>
              <input
                type="email"
                class="form-control form-control-solid"
                placeholder="R$ 100,00"
              />
            </div>
            <div class="col-lg-6">
              <label><span class="text-danger">*</span>Valor mínimo:</label>
              <input
                type="email"
                class="form-control form-control-solid"
                placeholder="R$ 80,00"
              />
            </div>
          </div>
        </RobotDocumentation>
      </div>
      <div class="col-md-4 col-12">
        <ConsumptionSimulator />
        <RobotActivate />
      </div>
    </div>
  </div>
</template>

<script>
import FlightTickets from "@/common/components/FlightTickets";
import TestForm from "@/common/components/TestForm";
import RobotDocumentation from "@/common/components/RobotDocumentation";
import ConsumptionSimulator from "@/common/components/ConsumptionSimulator";
import RobotActivate from "@/common/components/RobotActivate";
import Voltar from "@/common/components/layout/Voltar";

export default {
  components: {
    FlightTickets,
    TestForm,
    RobotDocumentation,
    ConsumptionSimulator,
    RobotActivate,
    Voltar,
  },
};
</script>

<style></style>
