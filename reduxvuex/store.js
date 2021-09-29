import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex)

const store = new Store({
    states: {
        firstName: 'John',
        lastName: 'Doe'
    },
actions: {
    soreUser({commit}, {firstName, lastName}){
        setTimeout(() => {
            commit('user', {firstName, lastName})
        }, 2000)
    }
},
mutations: {
    user(state, {firstName, lastName}){
        state.firstName = firstName
        state.lastName = lastName
    }
},
getters: {
    user: state => `${state.firstName} ${state.lastName}`
}

})