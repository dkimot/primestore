<template>
  <div class="card text-xs-center">
    <img class="card-img-top" src="http://placehold.it/253x200" :alt="product.title">
    <div class="card-block">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">{{product.price | formatMoney}} </p><!--- Stock: {{product.inventory}}</p>-->
      <add-to-cart :product="product"></add-to-cart>
      <p class="card-subheading">{{product.category}} | {{product.subCategory}}</p>
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  props: {
    product: Object
  },
  components: { AddToCart }
}
</script>
