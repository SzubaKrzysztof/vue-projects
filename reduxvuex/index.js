import {createStore} from './createStore';

const storeDef = {
    state:{
        firstName: 'John',
        lastName: 'Doe'
    },
    actions:{
        storeUser({commit}, {firstName, lastName}){
            setTimeout(() => {
                commit('user', {firstName, lastName})
            }, 20000)
        }
    },
    mutations:{
        user(state, {firstName, lastName}){
            state.firstName = firstName
            state.lastName = lastName
        }
    },
    getters: {
        user: state => `${state.firstName}, ${state.lastName}`
    }
}

const store = createStore(storeDef)

export default store