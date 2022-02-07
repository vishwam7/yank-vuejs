<template>
  <div class="d-flex row">
    <div class="col-sm-6 col-12 ">
      <div class="symbol-img">
        <img :src="require('@/assets/' + image + '.png')"    />
      </div>
      <div class="d-flex flex-column align-items-center">
        <span
          ><h3>{{ category }}</h3></span
        >
      </div>
    </div>

    <div class="col-sm-6 col-12">
      <div class="Detailing_Recursos">
        <span
          ><h3>{{ link }}</h3></span
        >
        <p>{{ paragraph }}</p>
        <span class="mr-5"
          ><del>{{ before }}</del></span
        >
        <span class="off">{{ discount }}</span
        ><br />
        <span>{{ after }}</span>
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
    category: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
    before: {
      type: String,
      required: true,
    },
    after: {
      type: String,
      required: true,
    },
    link: {
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
