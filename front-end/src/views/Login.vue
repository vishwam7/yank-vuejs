<template>
	<div class="vue-tempalte">
		<center>
			<form style="width: 50%">
				<h3 style="margin-top: 65px">Sign In</h3>
				<div class="form-group">
					<label>Email address</label>
					<input
						type="email"
						v-model="email"
						class="form-control form-control-lg"
					/>
				</div>
				<div class="form-group">
					<label>Password</label>
					<input
						type="password"
						class="form-control form-control-lg"
						v-model="password"
					/>
				</div>
				<button
					type="submit"
					v-on:click="signIn(email, password)"
					class="btn btn-dark btn-lg btn-block"
				>
					Sign In
				</button>
				<p
					class="forgot-password text-right mt-2 mb-4"
					style="margin-bottom: 65px"
				>
					<router-link to="/forgot-password"
						>Forgot password ?</router-link
					>
				</p>
			</form>
		</center>
	</div>
</template>
<script>
import axios from "axios";

export default {
	data() {
		return {
			email: "",
			password: "",
			errors: [],
		};
	},
	methods: {
		signIn: function (email, password) {
			axios
				.post(`http://localhost:5000/api/login`, {
					email,
					password,
				})
				.then((response) => {})
				.catch((e) => {
					this.errors.push(e);
				});
		},
	},
};
</script>
