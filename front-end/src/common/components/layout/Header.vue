<template>
  <div id="kt_header" class="header header-fixed">
    <!--begin::Container-->
    <div class="container d-flex align-items-stretch justify-content-between">
      <!--begin::Header Menu Wrapper-->
      <div
        class="header-menu-wrapper header-menu-wrapper-left"
        id="kt_header_menu_wrapper"
      >
        <!--begin::Header Menu-->
        <div
          id="kt_header_menu"
          class="header-menu header-menu-mobile header-menu-layout-default"
        >
          <ul class="menu-nav">
            <li
              class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here"
            >
              <a onclick="openNav()">   <i class="icon-2x text-dark-50 ki ki-menu"></i></a>
            </li>
            <li
              class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here"
            >
              <a href="#"> <img src="@/assets/media/logos/site-logo.png"/></a>
            </li>
          </ul>
        </div>
        <!--end::Header Menu-->
      </div>
      <!--end::Header Menu Wrapper-->
      <!--begin::Topbar-->
      <div class="topbar">
        <!--begin::Search-->
        <div class="dropdown" v-if="display === 'button'">
          <!--begin::Toggle-->
          <div
            class="topbar-item"
            data-toggle="dropdown"
            data-offset="10px,0px"
            aria-expanded="false"
          >
            <button class="btn btn-orange">COMPRAR CRÉDITOS</button>
          </div>
          <!--end::Toggle-->
          <!--begin::Dropdown-->

          <!--end::Dropdown-->
        </div>
         <div class="dropdown" v-if="display === 'robots'">
									<!--begin::Toggle-->
									<div class="topbar-item" data-toggle="" data-offset="10px,0px" aria-expanded="false">
										
                              
                                 <div>
                                 <router-link to="/customer-service-panel-home"><img src="@/assets/media/site-images/icn_bot.png"><span class="ml-3 mr-10">Robôs</span></router-link>
                                 </div>
											<div>
                                 <router-link to="/consumption"><img src="@/assets/media/site-images/icn_history1.png"><span class="ml-3 mr-20">Históricos</span></router-link>
                                 </div>
                                 <div class="d-flex align-items-center mr-5">
                                       <div class=" mr-4">
                                       <span class=""><img src="@/assets/media/site-images/icn_plan.png"></span>
                                       </div>
                                       <div class="d-flex flex-column flex-grow-1 ">
                                       <span class="color-blue">PLANO PRO</span>
                                       <span class="color-skyblue">15% OFF</span>
                                       </div>
                                       
                                       </div>
									
									</div>
									<!--end::Toggle-->
									<!--begin::Dropdown-->
								
									<!--end::Dropdown-->
								</div>
        <div class="dropdown">
          <!--begin::Toggle-->
          <div
            class="topbar-item"
            data-toggle="dropdown"
            data-offset="10px,0px"
            aria-expanded="false"
          >
            <div
              class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary"
            >
              <span class="svg-icon svg-icon-xl svg-icon-primary">
                <i class="icon-xl fas fa-bell"></i>
              </span>
              <span class="pulse-ring"></span>
            </div>
          </div>
          <!--end::Toggle-->
          <!--begin::Dropdown-->

          <!--end::Dropdown-->
        </div>
        <!--end::Quick panel-->
        <!--end::Chat-->
        <!--begin::User-->
        <div class="topbar-item">
          <div
            class="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
            @click="showSideNav"
          >
            <span class="symbol symbol-lg-40 symbol-25 symbol-light-success">
              <img
                class="rounded-circle rounded-circle border  border-dark p-2px"
                src="@/assets/media/users/300_21.jpg"
              />
            </span>
          </div>
        </div>
        <!--end::User-->
      </div>
      <!--end::Topbar-->
    </div>
    <!--end::Container-->
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      display: 'empty'
    }
  },
  mounted() {
    // console.log(this.$route)
  },
  watch: {
    $route(newRoute) {
      console.log(newRoute.meta.header);
      this.display = newRoute.meta.header
    }
  },
  methods: {
    showSideNav() {
      this.$emit('showSideNav');
    }
  }
}
</script>

<style></style>
