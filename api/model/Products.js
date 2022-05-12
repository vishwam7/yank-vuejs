const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	id: { type: Number, required: true },
	price: { type: Number, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
	favorite: { type: Boolean, default: false, required: true },
	activeProduct: { type: Boolean, default: false, required: true },
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
