const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    price: {
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
    header: {
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
    favorite: {
      type: Boolean,
      default: false,
      required: true,
    },
    activeProduct: {
      type: Boolean,
      default: false,
      required: true,
    },
    /**
     * @description Determines the stripe product id
     */
    stripeProductID: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
