const state = {
  all: [],
  filtered: [],
  filtering: {}
}

const mutations = {
  RECEIVE_PRODUCTS (state, products) {
    state.all = products
    state.filtered = products
  },

  ADD_TO_CART (state, productId) {
    state.all
      .find(product => product.id === productId)
      .inventory--
  },

  REMOVE_FROM_CART (state, removedProduct) {
    state.all
      .find(product => product.id === removedProduct.id)
      .inventory += removedProduct.quantity
  },

  TOGGLE_CATEGORY (state, category) {
    // Toggle, or add, category to filtering object
    if (state.filtering[category.title]) {
      state.filtering[category.title].active = !state.filtering[category.title].active
    } else {
      category.active = true
      state.filtering[category.title] = category
    }
    state.filtered = []
    for (let i = 0; i < state.all.length; i++) {
      let temp = state.all[i]
      if (state.filtering[temp.category]) {
        console.log(true)
        if (state.filtering[temp.category].active) {
          console.log(state.filtering[temp.category].active)
          state.filtered.push(temp)
        }
      }
    }
  }
}

export default {
  state,
  mutations
}
