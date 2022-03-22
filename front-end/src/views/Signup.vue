<template>
	<div class="vue-tempalte">
		<center>
			<form style="width: 50%">
				<h3 style="margin-top: 65px">Sign Up</h3>
				<div class="form-group">
					<label>Full Name</label>
					<input type="text" class="form-control form-control-lg" />
				</div>
				<div class="form-group">
					<label>Email address</label>
					<input type="email" class="form-control form-control-lg" />
				</div>
				<div class="form-group">
					<label>Password</label>
					<input
						type="password"
						class="form-control form-control-lg"
					/>
				</div>
				<button type="submit" class="btn btn-dark btn-lg btn-block">
					Sign Up
				</button>
				<p
					class="forgot-password text-right"
					style="margin-bottom: 65px"
				>
					Already registered
					<router-link :to="{ name: 'login' }">sign in?</router-link>
				</p>
			</form>
		</center>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
};
</script>
