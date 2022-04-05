// start style
import "./assets/plugins/custom/fullcalendar/fullcalendar.bundle.css?v=7.2.3";
import "./assets/plugins/global/plugins.bundle.css";
import "./assets/plugins/custom/prismjs/prismjs.bundle.css?v=7.2.3";
import "./assets/css/style.bundle.css?v=7.2.3";
import "./assets/css/themes/layout/header/base/light.css?v=7.2.3";
import "./assets/css/themes/layout/header/menu/light.css?v=7.2.3";
import "./assets/css/themes/layout/brand/dark.css?v=7.2.3";
import "./assets/css/themes/layout/aside/dark.css?v=7.2.3";
import "./assets/css/custom.css";
// end style

//start scripts
//import $ from 'jquery';
// import './assets/js/config.js'
// import "https://fonts.gstatic.com";
import "./assets/plugins/global/plugins.bundle.js?v=7.2.3";
import "./assets/plugins/custom/prismjs/prismjs.bundle.js?v=7.2.3";
import "./assets/js/scripts.bundle.js?v=7.2.3";
import "./assets/plugins/custom/fullcalendar/fullcalendar.bundle?v=7.2.3";
import "./assets/js/pages/widgets.js?v=7.2.3";
import "./assets/js/jquery.simple-bar-graph.min.js";
import "./assets/js/pages/features/charts/apexcharts.js?v=7.2.6";
//end scripts
// import "./assets/css/style.bundle.css";
import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import Home from "@/views/Home.vue";
import CustomServicePanelHome from "@/views/CustomServicePanelHome.vue";
import Authorized from "@/views/Authorized";
import UnAuthorized from "@/views/UnAuthorized";
import Pricing from "@/views/Pricing";
import Payment from "@/views/Payment";
import Consumption from "@/views/Consumption";
import DetailingConsumption from "@/views/DetailingConsumption";
import ServicePanelDetailing from "@/views/ServicePanelDetailing";
import DetailingEmpty from "@/views/DetailingEmpty";
import Login from "@/views/Login";
import Signup from "@/views/Signup";
import ForgotPassword from "@/views/ForgotPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/main.css";
/* createWebHashHistory */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Home,
			name: "home",
			meta: {
				header: "button",
			},
		},
		{
			path: "/authorized",
			component: Authorized,
			name: "authorized",
			meta: {
				header: "empty",
			},
		},
		{
			path: "/unauthorized",
			component: UnAuthorized,
			name: "unauthorized",
			meta: {
				header: "empty",
			},
		},
		{
			path: "/pricing",
			component: Pricing,
			name: "pricing",
			meta: {
				header: "button",
			},
		},
		{
			path: "/customer-service-panel-home",
			component: CustomServicePanelHome,
			name: "customer-service-panel-home",
			meta: {
				header: "robots",
			},
		},
		{
			path: "/payment",
			component: Payment,
			name: "payment",
			meta: {
				header: "button",
			},
		},
		{
			path: "/consumption",
			component: Consumption,
			name: "consumption",
			meta: {
				header: "robots",
			},
		},
		{
			path: "/detailing-consumption",
			component: DetailingConsumption,
			name: "detailingconsumption",
			meta: {
				header: "robots",
			},
		},
		{
			path: "/service-panel-detailing",
			component: ServicePanelDetailing,
			name: "servicepaneldetailing",
			meta: {
				header: "button",
			},
		},
		{
			path: "/detailing-empty",
			component: DetailingEmpty,
			name: "detailingempty",
			meta: {
				header: "robots",
			},
		},
		{
			path: "/signup",
			name: "signup",
			component: Signup,
		},
		{
			path: "/login",
			name: "login",
			component: Login,
		},
		{
			path: "/forgot-password",
			name: "forgot-password",
			component: ForgotPassword,
		},
	],
});

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
