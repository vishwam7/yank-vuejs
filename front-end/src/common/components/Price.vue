<template>
	<div class="price-box">
		<div class="price-tools">
			<i
				class="fas fa-star"
				v-bind:style="{ color: favorite ? '#269DFF' : '#B5B5C3' }"
			></i>
			<div class="form-group">
				<span class="switch switch-sm">
					<label>
						<input
							type="checkbox"
							checked="checked"
							name="select"
						/>
						<span></span>
					</label>
				</span>
			</div>
		</div>
		<div class="price-img">
			<img :src="require('@/assets/' + image + '.png')" /><br />
			<span>{{ category }}</span>
		</div>
		<br />
		<div class="price-info">
			<span
				><h4>{{ header }}</h4>
				<h4 class="home_txt">{{ link }}</h4></span
			><br />
			<p>{{ paragragh }}</p>
		</div>
		<div class="verRobos mb-5">
			<a
				href="#"
				@click="buyNow($event, id)"
				class="btn btn-white font-weight-bold btn-square mt-20"
				>SAIBA MAIS</a
			>
		</div>
	</div>
</template>

<script>
import axios from "axios";
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
		header: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
		paragragh: {
			type: String,
			required: true,
		},
		favorite: {
			type: Boolean,
			required: true,
		},
		online: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		buyNow(event, id) {
			console.log(event);
			console.log(id);
			axios
				.get(`http://localhost:5000/api/buyNow/${id}`)
				.then((response) => {
					// JSON responses are automatically parsed.
					console.log(response);
				})
				.catch((e) => {
					this.errors.push(e);
				});
		},
	},
};
</script>

<style></style>
