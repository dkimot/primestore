<template>
  <div class="card text-xs-center">
    <img class="card-img-top" :src="product.imagePath" :alt="product.title">
    <div class="card-block">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text" v-if="!product.price">Please contact us for pricing. </p>
      <p class="card-text" v-else-if="product.category === 'Desktops'">Starting at: {{product.price | formatMoney}} </p>
      <p class="card-text" v-else>{{product.price | formatMoney}} </p><!--- Stock: {{product.inventory}}</p>-->
      <add-to-cart :product="product"></add-to-cart><br />
      <open-modal :product="product"></open-modal>
      <p class="card-subheading" v-if="product.subCategory">{{product.category}} | {{product.subCategory}}</p>
      <p class="card-subheading" v-if="!product.subCategory">{{product.category}}</p>
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'
import OpenModal from './OpenModal'

export default {
  props: {
    product: Object
  },
  components: { AddToCart, OpenModal }
}
</script>

<style scoped>
  img {
    width: 253px;
    height:200px;
    padding: 3px 3px;
  }
</style>
