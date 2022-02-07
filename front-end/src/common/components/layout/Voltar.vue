<template>
        <div class="col-md-12">
        <div class="back-arrow">
          <router-link :to="route">
            <i class="icon-xl la la-arrow-left"></i>
            <span>Voltar</span>
          </router-link>
        </div>
      </div>
</template>

<script>
export default {
    props: {
        route: {
            type: String,
        }
    }
}
</script>

<style>

</style>