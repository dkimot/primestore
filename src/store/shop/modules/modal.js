const state = {
  showModal: true,
  data: {}
}

const mutations = {
  RECEIVE_MODAL (state, modal) {
    state.showModal = modal.showModal
    state.data = modal.data
  },

  OPEN_MODAL (state, data) {
    state.showModal = true
    state.data = data
  },

  CLOSE_MODAL (state) {
    state.showModal = false
  }
}

export default {
  state,
  mutations
}
