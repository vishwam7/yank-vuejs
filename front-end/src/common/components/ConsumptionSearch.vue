<template>
  <div class="card card-custom Consumption_search">
      <div class="d-flex row">
        <div class="col-md-7 col-12 pl-8">
          <div
            class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap mt-4"
          >
            <!--begin::Info-->
            <div class="d-flex align-items-center flex-wrap mr-2 w-100 mt-1">
              <!--begin::Page Title-->
              <div class="form-group mb-0 w-100 responsive-search">
                <div class="input-icon">
                  <input
                    type="text"
                    class="form-control rounded-0 Consumption_search_width"
                    placeholder="Qual robô deseja pesquisar?"
                  />
                  <span>
                    <i class="flaticon2-search-1 icon-md"></i>
                  </span>
                </div>
              </div>
              <!--end::Page Title-->
            </div>
            <!--end::Info-->
          </div>
        </div>
        <div class="col-md-5 col-12">
          <div class="input-group date mt-5 pr-5 responsive_date">
            <div class="input-group-append">
              <span class="input-group-text date_picker_border">
                <i class="la la-calendar-check-o"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control  date_picker_border text-right"
              id="kt_datepicker_2"
              readonly="readonly"
              placeholder="Select date"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>