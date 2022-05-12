const Products = require("../model/Products");

exports.getAll = async function (req, res) {
	console.log("get all products called!!");
	const products = await Products.find();
	res.send(products);
};

exports.registerProduct = async function (req, res) {
	console.log("registering product is called!!");

	const newProduct = await Products.create({
		id: req.body.botId,
		price: req.body.botPrice,
		image: req.body.image,
		description: req.body.botDescription,
		favorite: req.body.favorite,
		activeProduct: req.body.activeProduct,
	});

	res.status(201).json({
		status: "success",
		data: {
			newProduct,
		},
	});
};

exports.buyNow = async function (req, res) {
	console.log(req.params);
};
