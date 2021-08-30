import { doLogin, getUser } from '@/repositories/authRepository'
import querystring from 'querystring'
import tokenService from '@/utilities/token'

export const state = () => (
    {
        user: null,
    }
);

export const getters = {
    isLogged(state) {
        return !!state.user
    },
    currentUser(state) {
        return state.user
    }
}

export const actions = {
    async login ( { dispatch }, payload ) {
        const loginPayload = {
            ...payload,
            grant_type: "password",
            scope: "MarketPlace",
            client_id: "HelloAbp_App",
            client_secret: "1q2w3e*"
        }
        const data = await doLogin(querystring.stringify(loginPayload), {'Content-Type': 'application/x-www-form-urlencoded'})
        tokenService.saveToken(data.access_token, data.expires_in)
        dispatch('getUser')
    },
    logout ({ commit }) {
        tokenService.removeToken()
        commit('removeUser')
    },
    async getUser({ commit }) {
        const user = await getUser()
        commit('setUser', user)
    }
}

export const mutations = {
    removeUser(state) {
        state.user = null
    },
    setUser(state, payload) {
        state.user = payload
    },
}