import axios from 'axios'
import * as Config from '../../config'
import api from '@/api'
import mock from '../helpers/mock'

let apiProducts = api.getAllProducts()
let apiTopSellingProducts = api.getTopSellingProducts()


const state = {
  cartProducts: []
}

const getters = {
  cartProducts: state => {
    return state.cartProducts
  }
}

const mutations = {
  ADD_CART_LOCAL: (state, product) => {
    state.cartProducts.push(product)
    localStorage.setItem("botanica-cart", JSON.stringify(state.cartProducts))
  },

  SET_CART_PRODUCTS: (state, products) => {
    state.cartProducts = []
    state.cartProducts = products
  }
}

const actions = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
