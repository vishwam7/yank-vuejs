<template>
              <div class="card card-custom Authorized p-7">
              <div class="d-flex align-items-center">
                <div class="symbol-img">
                  <!-- <img src="@/assets/media/site-images/Authorized.png" /> -->
                  <img :src="require('@/assets/' + image + '.png')" />
                </div>
                <div class="d-flex flex-column  pl-7 pb-10  auth-planostxt">
                  <span><h3>Planos e Preços</h3></span>
                  <span class="text-muted"
                    >Escolha o melhor plano para suas automações</span
                  >
                </div>
              </div>
            </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>