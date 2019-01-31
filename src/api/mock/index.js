import products from './data/products'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchproducts() {
    return fetch(products, 2000) // wait 1s before returning posts
  }
}