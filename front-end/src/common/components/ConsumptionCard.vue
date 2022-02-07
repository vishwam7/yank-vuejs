<template>
  <li class="d-flex row Consumption_card_li">
    <div class="d-flex row">
      <div class=" mr-4">
        <span class="symbol"
          ><img :src="require('@/assets/' + image + '.png')"
        /></span>
      </div>
      <div class="d-flex flex-column flex-grow-1">
        <span class="">{{ link }}</span>
        <span class="font-weight-bold">{{ category }}</span>
      </div>
    </div>
    <div class="d-flex">
      <div class="mr-4 mt-3 color-orange">
        <span class="symbol">{{ discount }}</span>
      </div>
      <div class="d-flex flex-column flex-grow-1">
        <span class="text-muted"><del>{{ after }}</del></span>
        <span class="text-muted font-weight-bold">{{ before }}</span>
      </div>
    </div>
    <div class="d-flex row">
      <div class="d-flex flex-column flex-grow-1" :class="statusText === 'Crédito' ? 'color-blue' : statusText === '401 - Unauthorized' ? 'color-orange' : 'color-green'">
        <span :class="statusText === 'Crédito' && 'color-blue'">{{ statusText}}</span>
        <span class="text-muted Consumption-last_txt">{{ statusAt }}</span>
      </div>
      <div class="">
        <img :src="require('@/assets/' + statusImage + '.png')" class="ml-3 mt-2" />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
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
    statusText: {
      type: String,
      required: true,
    },
    statusImage: {
      type: String,
      required: true,
    },
    statusAt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
