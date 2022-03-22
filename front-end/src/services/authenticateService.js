const axios = require("axios");

export async function getAuthentication(credentials) {
	const response = await axios.post("/login", { credentials });
	return response.data;
}

export async function signUp(user) {
	const response = await axios.post("/register", user);
	return response.data;
}

export async function getAllProducts() {
	console.log("getAllProducts api called!!");
	const response = await axios.get("/products");
	return response.data;
}
