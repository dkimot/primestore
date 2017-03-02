const state = {
  all: []
}

const mutations = {
  RECEIVE_CATEGORIES (state, categories) {
    state.all = categories
  },

  TOGGLE_CATEGORY (state, category) {
    category.active = !category.active
  }
}

export default {
  state,
  mutations
}
