const Products = require("./../model/Products");

exports.getAll = async function (req, res) {
	console.log("get all products called!!");
	const products = await Products.find();
	res.send(products);
};
