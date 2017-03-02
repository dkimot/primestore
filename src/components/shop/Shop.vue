<template>
  <div>
    <page-header></page-header>

    <div class="container">
      <coupons></coupons>
      <filter-products></filter-products>

      <div class="row mt-2">
        <div class="col-sm-9">
          <product-list></product-list>
        </div>
        <div class="col-sm-3">
          <shopping-cart></shopping-cart>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import PageHeader from './../shared/PageHeader'
import Coupons from './Coupons'
import ProductList from './products/ProductList'
import ShoppingCart from './shopping-cart/ShoppingCart'
import FilterProducts from './FilterProducts'

export default {
  name: 'shop',
  components: {
    PageHeader,
    Coupons,
    ProductList,
    ShoppingCart,
    FilterProducts
  }
}
</script>
