<template>
  <div class="card card-custom  Detailing Detailing-card-4 p-7 mt-3 mb-5">
    <div class="Detailing-card-4_1">
      <h2>Ativar Robô</h2>
      <div class="form-group">
        <span class="switch switch-sm">
          <label>
            <input type="checkbox" checked="checked" name="select" />
            <span></span>
          </label>
        </span>
      </div>
    </div>
    <p class="pb-3">
      Para utilizar esta API basta ativar e já poderá iniciar as consultas. Caso
      queira parar as consultas basta desativar e imediatamente o consumo é
      pausado.
    </p>

    <div class="Detailing-card-4_2">
      <div class="Zoom d-flex row">
        <div>
          <img src="@/assets/media/site-images/icn_reload.png" />
        </div>
        <div>
          <router-link to="consumption"
            ><img src="@/assets/media/site-images/icn_open.png"
          /></router-link>
        </div>
      </div>
      <div class="Detailing-card-4_empty">
        <h5>Histórico de Consumo</h5>
        <span>Este é o seu consumo deste robô neste mês</span>

        <div id="example-two">Loading...</div>

        <div class="simple-bar-graph__column" style="width: 4.16%;">
          <div
            class="simple-bar-graph__bar"
            style="height: 65.54%; background-color: rgb(61, 153, 112);"
            data-height="65.54%"
          >
            <div class="simple-bar-graph__popup">78</div>
          </div>
        </div>
      </div>

      <div class="Detailing-card-4-list mt-10">
        <div class="text-center">
          <span>Requisições</span>
          <p>Resultado das últimas requisições feitas para este robô</p>
        </div>

        <ul class="mt-5 ul_list">
          <ConsumptionSmallCard
            v-for="card in consumptionSmallCardData"
            :key="card.id"
            :id="card.id"
            :image="card.image"
            :text="card.text"
            :time="card.time"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import consumptionSmallCardData from "@/static/consumptionSmallCard.js";
import ConsumptionSmallCard from "@/common/components/ConsumptionSmallCard";
export default {
  data() {
    return {
      consumptionSmallCardData,
    };
  },
  mounted() {
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
      height: "200px",
      rowCaptionsWidth: "24px",
      barsColor: "#3D9970",
    });
    $("[data-action=random]").click(function() {
      $("#example-two").simpleBarGraph({
        data: randomData(),
        rowsCount: 8,
        height: "200px",
        rowCaptionsWidth: "24px",
        barsColor: "#3D9970",
      });
    });

    // try {
    //   fetch(
    //     new Request(
    //       "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    //       { method: "HEAD", mode: "no-cors" }
    //     )
    //   )
    //     .then(function(response) {
    //       return true;
    //     })
    //     .catch(function(e) {
    //       var carbonScript = document.createElement("script");
    //       carbonScript.src =
    //         "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
    //       carbonScript.id = "_carbonads_js";
    //       document.getElementById("carbon-block").appendChild(carbonScript);
    //     });
    // } catch (error) {
    //   console.log(error);
    // }

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
    console.log('done')

  },
  components: {
    ConsumptionSmallCard,
  },
};
</script>

<style></style>
