<template>
  <div class="info-box">
    <div class="row mt-5">
        <Voltar route="/" />
      <div class="col-md-8 col-12">
        <div class="card card-custom Detailing p-7">
          <FlightTickets
            image="media/site-images/Sevice _Panel_Detailing"
            link="Atualização de localização de veículo"
            paragraph="Receba atualizações de sua frota de veículo podendo acompanhar seu trajeto em tempo real. Possibilita gravar rota individualmente e trabalhar com mapa de calor."
            after="R$ 1,10 / Requisição"
            before=""
            discount=""
            category="Transporte e Logística"
          />
          <TestForm :warning="false">
              <div class="form-group Detailing_form mt-10">
                                          <label><span class="text-danger">*</span>Posição:</label>
                                          <input type="email" class="form-control form-control-solid" placeholder="Ex: Manager"/>
                                         </div>
          </TestForm>
        </div>
        <RobotDocumentation>
            <div class="form-group Detailing_form mt-10">
                                          <label><span class="text-danger">*</span>Posição:</label>
                                          <input type="email" class="form-control form-control-solid" placeholder="Ex: Manager"/>
                                         </div>
        </RobotDocumentation>
      </div>
      <div class="col-md-4 col-12">
        <ConsumptionSimulator>
            <a href="Pricing.html" class="btn Sevice_Detailing_btn">ATIVAR CRÉDITOS</a>
        </ConsumptionSimulator>
      </div>
    </div>
  </div>
</template>

<script>
import FlightTickets from "@/common/components/FlightTickets";
import TestForm from "@/common/components/TestForm";
import RobotDocumentation from "@/common/components/RobotDocumentation";
import ConsumptionSimulator from "@/common/components/ConsumptionSimulator";
import Voltar from "@/common/components/layout/Voltar";

export default {
  components: {
    FlightTickets,
    TestForm,
    RobotDocumentation,
    ConsumptionSimulator,
    Voltar
  },
};
</script>

<style></style>
