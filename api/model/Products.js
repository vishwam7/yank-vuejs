const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	id: { type: Number, required: true },
	image: { type: String, required: true },
	category: { type: String, required: true },
	header: { type: String, required: true },
	link: { type: String, required: true },
	paragraph: { type: String, required: true },
	favorite: { type: Boolean, default: false, required: true },
	online: { type: Boolean, default: false, required: true },
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
