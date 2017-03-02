import api from 'src/api/fixtures'

export const getProfile = ({ commit }) => {
  api.getProfile(profile => {
    commit('RECEIVE_PROFILE', profile)
  })
}

export const getProducts = ({ commit }) => {
  api.getProducts(products => {
    commit('RECEIVE_PRODUCTS', products)
  })
}

export const getPromotions = ({ commit }) => {
  api.getPromotions(promotions => {
    commit('RECEIVE_PROMOTIONS', promotions)
  })
}

export const getCategories = ({ commit }) => {
  api.getCategories(categories => {
    commit('RECEIVE_CATEGORIES', categories)
  })
}

export const getModal = ({ commit }) => {
  api.getModal(modal => {
    commit('RECEIVE_MODAL', modal)
  })
}

export const addToCart = ({ commit }, product) => {
  /*
  if (product.inventory > 0) {
    commit('ADD_TO_CART', product.id)
  }
  */
  commit('ADD_TO_CART', product.id)
}

export const removeFromCart = ({ commit }, product) => {
  commit('REMOVE_FROM_CART', product)
}

export const toggleCoupon = ({ commit }, coupon) => {
  commit('TOGGLE_COUPON', coupon)
}

export const toggleCategory = ({ commit }, category) => {
  commit('TOGGLE_CATEGORY', category)
}

export const openModal = ({ commit }, product) => {
  commit('OPEN_MODAL', product)
}

export const closeModal = ({ commit }) => {
  commit('CLOSE_MODAL')
}

export const addClose = ({ commit }, id) => {
  commit('CLOSE_MODAL')
  commit('ADD_TO_CART', id)
}
