<template>
  <li
    :class="
      text === 'Crédito'
        ? 'color-blue'
        : text === '401 - Unauthorized'
        ? 'color-orange'
        : 'color-green'
    "
  >
    <span class=""
      ><img :src="require('@/assets/' + image + '.png')" class="mr-3" />{{
        text
      }}</span
    >
    <span class="text-muted">{{ time }}</span>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
