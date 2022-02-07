<template>
  <form class="form">
    <div class="card-header Detailing_head">
      <span>Faça um teste</span>
    </div>
    <div class="card-body d-flex row">
      <div class="col-sm-6 col-12">
        <span
          >No formulário abaixo, você pode testar nossa API para ver o retorno
          de sua solicitação.</span
        >
        <slot></slot>
        <div class="Run-btn">
          <button class="btn btn-primary">RUN TEST</button>
        </div>
      </div>
      <div class="col-sm-6 col-12 mt-28 ">
        <div class="Detailing_form2">
          <div class="">
            <label class="mr-4">Nome:</label>
            <span>Evandro Soares</span>
          </div>
          <div class="">
            <label class="mr-4">Nome:</label>
            <span>Evandro Soares</span>
          </div>
          <div class="">
            <label class="mr-4">Nfefef:</label>
            <span>Evandro Soares</span>
          </div>
          <div class="">
            <label class="mr-4">Nome:</label>
            <span>Evandro Soares</span>
          </div>
          <div class="">
            <label class="mr-4">Nome:</label>
            <span>Evandro Soares</span>
          </div>
          <div class="">
            <label class="mr-4">Nome:</label>
            <span>Evandro Soares</span>
          </div>
          <div class="">
            <label class="mr-4">Nome:</label>
            <span>Evandro Soares</span>
          </div>
        </div>
        <div class="icon-alert mt-10 d-flex align-items-center" v-if="warning">
          <i class="fas fa-exclamation-triangle mr-5"></i>
          <span
            >Encontramos 60 resultados para esta pesquisa, no teste mostramos
            apenas 1 por vez.
          </span>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    warning: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style></style>
