<template>
  <div
    class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable"
  >
    <MobileHeader />
    <div class="d-flex flex-column flex-root">
      <!--begin::Page-->
      <div class="d-flex flex-row flex-column-fluid page">
        <Header @showSideNav="showSideNav" />
        <Sidebar @closeSideNav="closeSideNav" :sideNav="sideNav" />
      </div>
    </div>
    <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
      <!--begin::Content-->
      <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Subheader-->
        <!--end::Subheader-->
        <!--begin::Entry-->
        <div class="d-flex flex-column-fluid">
          <!--begin::Container-->
          <div class="container">
            <div class="sit-box">
              <!--begin::Aside-->
              <!-- <Home /> -->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavMenu />
  </div>
</template>

<script>
import MobileHeader from "@/common/components/layout/MobileHeader";
import Header from "@/common/components/layout/Header";
import Sidebar from "@/common/components/layout/Sidebar";
import NavMenu from "@/common/components/layout/NavMenu";

export default {
  data() {
    return {
      sideNav: false
    }
  },
  components: {
    Header,
    Sidebar,
    MobileHeader,
    NavMenu
  },
  methods: {
    showSideNav() {
      this.sideNav = !this.sideNav
    },
    closeSideNav() {
      this.sideNav = !this.sideNav
    }
  }
}

</script>

<style></style>
