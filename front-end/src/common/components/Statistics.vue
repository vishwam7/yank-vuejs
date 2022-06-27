<template>
  <CardCustom image="media/site-images/flash" price="55" bill="mi" paragraph="requisições neste mês" />
  <CardCustom image="media/site-images/bill" price="R$ 3.650" bill=",86" paragraph="requisições neste mês" />
  <CardCustom image="media/site-images/refund" price="R$ 506" bill=",00" paragraph="requisições neste mês" />
  <div class="col-md-12 col-12">
    <div class="card card-custom mt-5">
      <div class="card-header w-100">
        <div class="d-flex row Consumption-card_2">
          <div class="col-sm-8 col-12">
            <div class="mt-7 txt_consumo">
              <span class="">Consumo de Serviços</span>
            </div>
          </div>
          <div class="col-sm-4 col-12">
            <div class="input-group date mt-5 ml-30 date_picker">
              <div class="input-group-append">
                <span class="input-group-text date_picker_border">
                  <i class="la la-calendar-check-o"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control  date_picker_border"
                id="kt_datepicker_2"
                readonly="readonly"
                placeholder="Últimos 15 dias"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex row">
          <div class="col-md-7 col-12">
            <div class="graph-txt">
              <span>Requisições por dia</span>
            </div>
            <div id="example-two">Loading...</div>

            <div class="simple-bar-graph__column" style="width: 4.16%;"></div>
          </div>
          <div class="col-md-5 col-12">
            <div class="graph-txt">
              <span>Consumo de Créditos</span>
            </div>

            <div id="chart_13" style="min-height: 328.7px;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCustom from '@/common/components/CardCustom';
export default {
  mounted() {
      let apexcharts = document.createElement('script')
      apexcharts.setAttribute('src', 'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/js/pages/crud/forms/widgets/bootstrap-datepicker.js?v=7.2.6')
      document.head.appendChild(apexcharts);
    $("#example-one").simpleBarGraph({
      data: [
        { key: "jQuery", value: 100 },
        { key: "JavaScript", value: 95 },
        { key: "HTML", value: 96 },
        { key: "CSS", value: 44 },
        { key: "AngularJS", value: 32 },
        { key: "ReactJS", value: 55 },
        { key: "VueJS", value: 91 },
      ],
      height: "200px",
      barsColor: "#222",
    });
    var randomData = function() {
      return [
        {
          key: "01",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "02",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "03",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "04",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "05",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "06",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "07",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "08",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "09",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "10",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "11",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "12",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "13",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "14",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "15",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "16",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "17",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "18",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "19",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "20",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "21",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "22",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "23",
          value: Math.floor(100 * Math.random() + 20),
        },
        {
          key: "24",
          value: Math.floor(100 * Math.random() + 20),
        },
      ];
    };
    $("#example-two").simpleBarGraph({
      data: randomData(),
      rowsCount: 8,
      height: "300px",
      rowCaptionsWidth: "24px",
      barsColor: "#3D9970",
    });

    $("[data-action=random]").click(function() {
      $("#example-two").simpleBarGraph({
        data: randomData(),
        rowsCount: 8,
        height: "300px",
        rowCaptionsWidth: "24px",
        barsColor: "#3D9970",
      });
    });
    var _gaq = _gaq || [];
    _gaq.push(["_setAccount", "UA-36251023-1"]);
    _gaq.push(["_setDomainName", "jqueryscript.net"]);
    _gaq.push(["_trackPageview"]);
    (function() {
      var ga = document.createElement("script");
      ga.type = "text/javascript";
      ga.async = true;
      ga.src =
        ("https:" == document.location.protocol
          ? "https://ssl"
          : "http://www") + ".google-analytics.com/ga.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(ga, s);
    })();
    console.log('done');

  },
  components: {
    CardCustom
  }
};
</script>

<style>
      @import '../../assets/css/jquery.simple-bar-graph.min.css';
      @import 'http://www.shieldui.com/shared/components/latest/css/light/all.min.css';
</style>
