<template>
  <div class="mt-2">
    <h3>Sort Products</h3>

    <sort-toggle
      :data="sort"
      :action="sortBy"
      v-for="sort in sorts"
      :key="sort.id">
    ></sort-toggle>
  </div>
</template>

<script>
import SortToggle from './../shared/Toggle'
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState({
    sorts: state => [{'title': 'Price', 'id': 1}]
  }),
  methods: mapActions([
    'getCategories',
    'sortBy'
  ]),
  components: { SortToggle },
  created () {
    this.getCategories()
  }
}
</script>
