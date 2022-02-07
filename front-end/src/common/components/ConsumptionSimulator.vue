<template>
  <div class="card card-custom Detailing p-7 detailing-car_2">
    <div>
      <h4>Simulador de Consumo</h4>
      <p>Qual será o seu consumo deste serviço por mês</p>
      <br />
      <span class="txt-blue">50.000 / Requisições</span>

      <form class="multi-range-field my-5 pb-5">
        <input id="multi1" class="multi-range" type="range" />
      </form>

      <span class="txt-orange">R$ 33.500,00</span>
      <p>valor aproximado considerando o plano atual</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
