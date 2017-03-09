<template>
  <nav class="navbar navbar-light bg-faded">
    <div class="container">
      <a class="navbar-brand" href="/products/">Welcome to the Prime Systems Products Catalog</a>
    </div>
  </nav>
</template>

<script>
import ShoppingCartLimit from './../shop/shopping-cart/ShoppingCartLimit'
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      profile: state => state.profile.data
    }),
    fullName () {
      return `${this.profile.firstName} ${this.profile.lastName}`
    }
  },
  methods: mapActions([
    'getProfile'
  ]),
  components: { ShoppingCartLimit },
  created () {
    this.getProfile()
  },
  props: {
    openDropdown: false
  }
}
</script>
