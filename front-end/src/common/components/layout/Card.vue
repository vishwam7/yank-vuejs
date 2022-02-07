<template>
  <div class="card card-custom h-100">
     <slot></slot>
    <div
      id="kt_aside_menu"
      class="aside-menu my-4 scroll ps ps--active-y"
      data-menu-vertical="1"
      data-menu-scroll=""
      data-menu-dropdown-timeout="500"
      style=" overflow: hidden;"
    >
      <!--begin::Menu Nav-->
      <ul class="menu-nav">
        <li class="menu-section mt-0">
          <h4 class="menu-text">Filtros</h4>
          <i class="menu-icon ki ki-bold-more-hor icon-md"></i>
        </li>
        <li
          class="menu-item"
          aria-haspopup="true"
          @click="filterFavorite()"
          :class="{'menu-item-active': favoriteActive}"
        >
          <a class="menu-link">
            <span class="svg-icon menu-icon">
              <i class="fas fa-star"  :style="{color: favoriteActive ? '#269DFF' : '#B5B5C3'}"></i>
              <!--end::Svg Icon-->
            </span>
            <span class="menu-text">Favoritos</span>
          </a>
        </li>
        <li class="menu-item" aria-haspopup="true">
          <a href="#" class="menu-link">
            <span class="svg-icon menu-icon">
              <span class="switch switch-sm">
                <label>
                  <input type="checkbox" name="select" />
                  <span></span>
                </label>
              </span>

              <!--end::Svg Icon-->
            </span>
            <span class="menu-text">Robôs Ativos</span>
          </a>
        </li>
        <li class="menu-section">
          <h4 class="menu-text">Custom</h4>
          <i class="menu-icon ki ki-bold-more-hor icon-md"></i>
        </li>
        <Category
          v-for="category in categories"
          :key="category.name"
          :name="category.name"
          :active="category.active"
          @click="filterCategory(category.name)"
        />

        <li class="menu-section">
          <h4 class="menu-text">Custom</h4>
          <i class="menu-icon ki ki-bold-more-hor icon-md"></i>
        </li>
        <li class="menu-item menu-item-submenu">
          <a href="#" class="menu-link">
            <span class="menu-text">SAP</span>
          </a>
        </li>
        <li class="menu-item menu-item-submenu">
          <a href="#" class="menu-link">
            <span class="menu-text">Totvs</span>
          </a>
        </li>
        <li class="menu-item menu-item-submenu">
          <a href="#" class="menu-link">
            <span class="menu-text">Domínio</span>
          </a>
        </li>
        <li class="menu-item menu-item-submenu">
          <a href="#" class="menu-link">
            <span class="menu-text">Outlook</span>
          </a>
        </li>
        <li class="menu-item menu-item-submenu">
          <a href="#" class="menu-link">
            <span class="menu-text">Benner</span>
          </a>
        </li>
        <li class="menu-item menu-item-submenu">
          <a href="#" class="menu-link">
            <span class="menu-text">Espaider</span>
          </a>
        </li>
        <li class="menu-item menu-item-submenu">
          <a href="#" class="menu-link">
            <span class="menu-text">O9 Itaú</span>
          </a>
        </li>
        <li class="menu-item menu-item-submenu">
          <a href="#" class="menu-link">
            <span class="menu-text">BJ Itaú</span>
          </a>
        </li>
        <li class="menu-item menu-item-submenu">
          <a href="#" class="menu-link">
            <span class="menu-text">Extranet Bradesco</span>
          </a>
        </li>
      </ul>
      <!--end::Menu Nav-->
      <div class="ps__rail-x" style="left: 0px; bottom: -15px;">
        <div
          class="ps__thumb-x"
          tabindex="0"
          style="left: 0px; width: 0px;"
        ></div>
      </div>
      <div class="ps__rail-y" style="top: 15px; height: 335px; right: 4px;">
        <div
          class="ps__thumb-y"
          tabindex="0"
          style="top: 4px; height: 93px;"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "@/common/components/Category";
export default {
  components: {
    Category,
  },
  methods: {
     filterCategory(name) {
        this.$emit('filterCategory', name)
     },
     filterFavorite() {
        this.$emit('filterFavorite');
     }
  },
  props: ["categories", "favoriteActive"],
  watch: {
    favoriteActive(val) {
      console.log(typeof val);
    }
  },
  mounted() {
    console.log(this.favoriteActive);
  }
};
</script>

<style></style>
