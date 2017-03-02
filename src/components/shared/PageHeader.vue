<template>
  <nav class="navbar navbar-light bg-faded">
    <div class="container">
      <a class="navbar-brand" href="/">Prime Systems Shop</a>

      <span class="navbar-text float-xs-right" v-if="profile.name">
        Hello <strong>{{fullName}}</strong>
      </span>
      <div v-else class="float-xs-right">
        <button class="btn btn-info" @click="openDropdown = !openDropdown">Log In/Sign Up</button>
        <span v-if="openDropdown" class="accountDropdown">
          <div class="form-group">
            <input type="text" class="form-control" id="email" placeholder="Email" /><br />
            <input type="password" class="form-control" id="pwd" placeholder="Password" />
          </div>
          <div class="btn-group">
            <button class="btn btn-info btn-xs">Log In</button>
            <button class="btn btn-info btn-xs">Sign Up</button>
          </div>
        </span>
      </div>
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
