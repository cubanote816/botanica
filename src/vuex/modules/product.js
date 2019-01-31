import axios from 'axios'
import * as Config from '../../config'
import api from '@/api'
import mock from '../helpers/mock'
import { ID } from 'postcss-selector-parser';

let apiProducts = api.getAllProducts()
let apiTopSellingProducts = api.getTopSellingProducts()
let apiProductById = api.getProductById()
let apiSimilarProduct = api.getSimilarProduct()


const state = {
  products: [],
  bestProducts: [],
  productById: [],
  similarProduct: [],
  cartProducts: []
}

const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  quantity: state => {
    return state.products.quantity;
  },
  products: state => {
    return state.products
  },
  bestProducts: state => {
    return state.bestProducts
  },
  productDetail: state => {
    return state.productById
  },
  similarProduct: state => {
    return state.similarProduct
  },
  cartProducts: state => {
    return state.cartProducts
  }
}

const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setBestProducts(state, bestProducts) {
    state.bestProducts = bestProducts
  },
  setProductById(state, productById) {
    state.productById = productById
  },
  setSimilarProduct(state, similarProduct) {
    state.similarProduct = similarProduct
  },
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  ADD_CART_LOCAL: (state, product) => {
    state.cartProducts.push(product)
    localStorage.setItem("iki-cart", JSON.stringify(state.cartProducts))
  },

  SET_CART_PRODUCTS: (state, products) => {
    state.cartProducts = []
    state.cartProducts = products
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  }
}

const actions = {

  fetchProducts({ commit, dispatch }) {
    return mock.fetch(apiProducts, 2000)
      .then(products => commit('setProducts', products))
  },

  fetchBestProducts({ commit, dispatch }) {
    return mock.fetch(apiTopSellingProducts, 2000)
      .then(products => commit('setBestProducts', products))
  },

  fetchProductById({ commit, dispatch }, id) {
    return mock.fetch(api.getProductById(id), 2000)
      .then(products => commit('setProductById', products), console.log(id))
  },

  fetchSimilarProduct({ commit, dispatch }) {
    return mock.fetch(apiSimilarProduct, 2000)
      .then(products => commit('setSimilarProduct', products))
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}
