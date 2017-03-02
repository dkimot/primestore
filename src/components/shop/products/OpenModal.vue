<template>
  <button type="button" class="btn btn-link btn-sm"
    @click="openModal(product)">
    Learn More
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    product: Object
  },
  methods: mapActions([
    'openModal'
  ])
}
</script>
