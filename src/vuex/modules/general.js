import axios from 'axios'
import { makeMutations } from '../helpers'
import * as Config from '../../config'

const state = {
}


const mutations = {

  ...makeMutations([
    'CHECK_LOGIN',
    'LOGIN',
    'REGISTER',
    'UPDATE_PROFILE',
    'LOAD_ADMIN_DASHBOARD',
    'SALES_LAST_30_DAYS',
    'statisticSales',
    'LOAD_USERS',
    'LOAD_USER',
    'UPDATE_USER',
    'DELETE_USER',
    'STATUS_USER',
    'FINISH_CONFIRMATION',
    'LOAD_NEW_MEMBER',
    'ORDER',
    'CONTRACTOR',
    'CONTRACTS',
    'AGREEMENT',
    'LOAD_SELLERS',
    'SELLERS',
    'SELLERDETAIL',
    'REPORTS',
    'REPORTS_DETAIL',
    'HISTORY',
    'LAST20_SALES',
    'SALES_STATUS',
    'PAY',
    'STATUS',
    'LOAD_SELLERS_NUMBER'
  ], (state) => {
    state.loading = true
  }),

  ...makeMutations([
    'STOP_LOADING',
    'CHECK_LOGIN_OK',
    'CHECK_LOGIN_FAIL',
    'LOGIN_OK',
    'LOGIN_FAIL',
    'REGISTER_OK',
    'REGISTER_FAIL',
    'UPDATE_PROFILE_OK',
    'UPDATE_PROFILE_FAIL',
    'LOAD_ADMIN_DASHBOARD_FAIL',
    'SALES_LAST_30_DAYS_FAIL',
    'LOAD_USERS_OK',
    'LOAD_USERS_FAIL',
    'LOAD_USER_OK',
    'LOAD_USER_FAIL',
    'UPDATE_USER_OK',
    'UPDATE_USER_FAIL',
    'DELETE_USER_OK',
    'DELETE_USER_FAIL',
    'STATUS_USER_OK',
    'STATUS_USER_FAIL',
    'LOAD_NEW_MEMBER_OK',
    'LOAD_NEW_MEMBER_FAIL',
    'FINISH_CONFIRMATION_OK',
    'FINISH_CONFIRMATION_FAIL',
    'ORDER_OK',
    'ORDER_FAIL',
    'CONTRACTOR_OK',
    'CONTRACTOR_FAIL',
    'CONTRACTS_OK',
    'CONTRACTS_FAIL',
    'AGREEMENT_OK',
    'AGREEMENT_FAIL',
    'LOAD_SELLERS_OK',
    'LOAD_SELLERS_FAIL',
    'SELLERS_OK',
    'SELLERS_FAIL',
    'SELLERDETAIL_OK',
    'SELLERDETAIL_FAIL',
    'REPORTS_OK',
    'REPORTS_FAIL',
    'REPORTS_DETAIL_OK',
    'REPORTS_DETAIL_FAIL',
    'HISTORY_OK',
    'HISTORY_FAIL',
    'LAST20_SALES_OK',
    'LAST20_SALES_FAIL',
    'SALES_STATUS_OK',
    'SALES_STATUS_FAIL',
    'STATUS_OK',
    'STATUS_FAIL',
    'PAY_OK',
    'PAY_FAIL',
    'LOAD_SELLERS_NUMBER_OK',
    'LOAD_SELLERS_NUMBER_FAIL'
  ], (state) => {
    state.loading = false
  }),


  LOAD_ADMIN_DASHBOARD_OK (state, dashboard) {
    state.admin_dashboard = dashboard
    state.loading = false
  },
  SALES_LAST_30_DAYS_OK (state, sales) {
    state.sales_last_30_days = sales
    state.loading = false
  },
  T_SALE_OK (state, sales) {
    state.total_sale = sales
  },
  T_COMPLETE_OK (state, complete) {
    state.total_complete = complete
  },
  T_P_COMPLETE_OK (state, Pcomplete) {
    state.total_percent_complete = Pcomplete
  },
  T_PENDING_OK (state, pending) {
    state.total_pending = pending
  },
  T_P_PENDING_OK (state, Ppending) {
    state.total_percent_pending = Ppending
  },
  T_DENY_OK (state, deny) {
    state.total_deny = deny
  },
  T_P_DENY_OK (state, Pdeny) {
    state.total_percent_deny = Pdeny
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}
