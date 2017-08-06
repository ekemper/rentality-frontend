import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import RentalHelpers from './rentalHelpers'

let rentalHelpers = new RentalHelpers()

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    rentalsById: {}
  },
  actions: {
    LOAD_RENTAL_LIST: function ({ commit }) {
      axios.get('http://localhost:2222/rentals').then((response) => {
        let parsedRentalsObject = rentalHelpers.parseQueryResponse(response)
        commit('SET_RENTALS_BY_ID', parsedRentalsObject)
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    SET_RENTALS_BY_ID: (state, obj) => {
      state.rentalsById = obj
    }
  },
  getters: {
    rentalsById: state => {
      return state.rentalsById
    }
  }
})
