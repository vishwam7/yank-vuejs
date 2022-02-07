<template>
  <div class="card card-custom  Detailing Detailing-card-4 p-7 mt-3 mb-5">
    <div class="Detailing-card-4_1">
      <h2>Ativar Robô</h2>
      <div class="form-group">
        <span class="switch switch-sm">
          <label>
            <input type="checkbox" checked="checked" name="select" />
            <span></span>
          </label>
        </span>
      </div>
    </div>
    <p class="pb-3">
      Para utilizar esta API basta ativar e já poderá iniciar as consultas. Caso
      queira parar as consultas basta desativar e imediatamente o consumo é
      pausado.
    </p>

    <div class="Detailing-card-4_2">
      <div class="Detailing-card-4_empty">
        <h5>Histórico de Consumo</h5>
        <span>Este é o seu consumo deste robô neste mês</span>
        <div class="symbol-img mt-5 mb-10">
          <img src="@/assets/media/site-images/empty.png" />
        </div>
      </div>
      <h2>Ops! nenhum resultado encontrado.</h2>
      <span
        >O que eu faço?Parece que este robô não foi ativado neste ultimo mês,
        caso queira utilizá-lo é só clicar no botão ativar acima.</span
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
