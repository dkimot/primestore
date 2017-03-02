<template>
  <div class="mt-2">
    <h3>Filter by Category</h3>

    <toggle
      :data="category"
      :action="toggleCategory"
      v-for="category in categories"
      :key="category.id">
    ></toggle>
  </div>
</template>

<script>
import Toggle from './../shared/Toggle'
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState({
    categories: state => state.categories.all
  }),
  methods: mapActions([
    'getCategories',
    'toggleCategory'
  ]),
  components: { Toggle },
  created () {
    this.getCategories()
  }
}
</script>
