import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import RentalHelpers from './rentalHelpers'

let rentalHelpers = new RentalHelpers()

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    rentals: []
  },
  actions: {
    LOAD_RENTAL_LIST: function ({ commit }) {
      axios.get('http://localhost:2222/rentals').then((response) => {
        let parsedRentalList = rentalHelpers.parseQueryResponse(response)
        commit('SET_RENTALS_LIST', { list: parsedRentalList })
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    SET_RENTALS_LIST: (state, { list }) => {
      state.rentals = list
    }
  },
  getters: {
    rentals: state => {
      // return state.projects.filter(project => !project.completed)
      return state.rentals
    }
  }
})
export default store
