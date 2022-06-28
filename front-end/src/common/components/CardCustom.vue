<template>
  <div class="col-md-4 col-12">
    <div class="card card-custom">
      <div class="d-flex row">
        <div class="symbol-img flash p-5 pl-10 pt-10">
          <span class="symbol"
            ><img :src="image" height="128" width="128"
          /></span>
        </div>
        <div class="p-5 flash_txt">
          <span class="mr-1">{{ price }}</span
          ><span class="bill">{{ bill }}</span>
          <p>{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    bill: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
