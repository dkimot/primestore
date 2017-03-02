import axios from 'axios'

const profile = {
  'firstName': 'Joe',
  'lastName': 'Montana',
  'limit': 850.00
}

let products = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2, 'shipping': 15.00, 'category': { 'id': 1, 'title': 'Electronics' } },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10, 'shipping': 5.00, 'category': { 'id': 2, 'title': 'Clothing' } },
  { 'id': 3, 'title': 'Nirvana - LP', 'price': 19.99, 'inventory': 3, 'shipping': 22.50, 'category': { 'id': 3, 'title': 'Music' } },
  { 'id': 4, 'title': 'Licensed Steel Gloves', 'price': 30.99, 'inventory': 5, 'shipping': 9.00, 'category': { 'id': 2, 'title': 'Clothing' } },
  { 'id': 5, 'title': 'Rustic Granite Car', 'price': 487.00, 'inventory': 1, 'shipping': 35.00, 'category': { 'id': 4, 'title': 'Other' } },
  { 'id': 6, 'title': 'Fantastic Cotton Pants', 'price': 59.59, 'inventory': 6, 'shipping': 11.00, 'category': { 'id': 2, 'title': 'Clothing' } },
  { 'id': 7, 'title': 'Tasty Wooden Pizza', 'price': 29.00, 'inventory': 2, 'shipping': 18.00, 'category': { 'id': 4, 'title': 'Other' } },
  { 'id': 8, 'title': 'Delicious Concrete Fish', 'price': 12.99, 'inventory': 4, 'shipping': 6.00, 'category': { 'id': 4, 'title': 'Other' } },
  { 'id': 9, 'title': 'Granite Computer', 'price': 109.10, 'inventory': 10, 'shipping': 22.70, 'category': { 'id': 1, 'title': 'Electronics' } },
  { 'id': 10, 'title': 'Handcrafted Soft Salad', 'price': 13.99, 'inventory': 3, 'shipping': 3.50, 'category': { 'id': 4, 'title': 'Other' } },
  { 'id': 11, 'title': 'Incredible Steel Bacon', 'price': 30.99, 'inventory': 5, 'shipping': 7.90, 'category': { 'id': 4, 'title': 'Other' } },
  { 'id': 12, 'title': 'Tasty Plastic Bike', 'price': 75.00, 'inventory': 5, 'shipping': 25.00, 'category': { 'id': 4, 'title': 'Other' } }
]

const promotions = [
    { 'id': 1, 'title': '30% OFF' },
    { 'id': 2, 'title': '$100.00 Discount' },
    { 'id': 3, 'title': 'Free Shipping' },
    { 'id': 4, 'title': '+ $100.00 on limit' }
]

let categories = [
  { 'id': 1, 'title': 'Components', 'active': false },
  { 'id': 2, 'title': 'Desktops', 'active': false },
  { 'id': 3, 'title': 'Drives', 'active': false },
  { 'id': 4, 'title': 'Accessories', 'active': false },
  { 'id': 5, 'title': 'Laptops', 'active': false }
]

let modal = {
  showModal: false,
  data: null
}

// Get products
const liveProducts = () => {
  axios.get('http://54.218.222.109:3030/products')
    .then((res) => {
      products = res.data.data
      products.splice(0, 1)
      products.forEach((e) => {
        e.id = e.barcodeId
        e.title = e.slug
        if (!e.price) {
          // Find average cost
          let total = { t: 0, i: 0 }
          e.stockArray.forEach((e) => {
            total.t += e.cost
            total.i++
          })
          let av = total.t / total.i
          e.price = (Math.ceil((av * e.info.markup * 0.01 + av) / 10) * 10) - 1
        }
      })
    }).catch((err) => {
      console.error(err)
    })
}

// Get promotions

export default {
  getProfile (cb) {
    setTimeout(() => cb(profile), 200)
  },

  getProducts (cb) {
    liveProducts()
    setTimeout(() => cb(products), 600)
  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200)
  },

  getCategories (cb) {
    setTimeout(() => cb(categories), 100)
  },

  getModal (cb) {
    setTimeout(() => cb(modal), 100)
  }
}
