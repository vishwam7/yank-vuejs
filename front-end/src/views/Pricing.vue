<template>
  <!--begin::Aside-->
  <div class="info-box">
    <div class="row mt-5">
      <Voltar route="/" />
      <div class="col-xl-12">
        <div class="d-flex flex-column-fluid row">
          <div class="col-md-8 col-12">
            <Plans image="media/site-images/pricing" />
          </div>
          <div class="col-md-4 col-12">
            <Depositions />
          </div>
        </div>
      </div>
    </div>
    <PricePlan />

    <!--begin::Dashboard-->
    <!--end::Dashboard-->
  </div>
  <!--end::Container-->
</template>

<script>
import Depositions from '@/common/components/Depositions';
import Plans from '@/common/components/Plans';
import PricePlan from '@/common/components/PricePlan';
import Voltar from '@/common/components/layout/Voltar';

export default {
  components: {
    Depositions,
    Plans,
    PricePlan,
    Voltar,
  },
};
</script>

<style></style>
