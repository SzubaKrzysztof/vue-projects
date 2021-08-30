import authRepository from '@/repositories/authRepository'
import clientRepository from '@/repositories/repository'
import Cookies from 'js-cookie'

export default {
    setToken(accessToken) {
        authRepository.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        clientRepository.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    },
    getToken() {
        return Cookies.get('access-token')
    },
    removeToken() {
        Cookies.remove('access-token')
        delete authRepository.defaults.headers.common['Authorization']
        delete clientRepository.defaults.headers.common['Authorization']
    },
    saveToken(accessToken, expires) {
        Cookies.set('access-token', accessToken, {expires})
        this.setToken(accessToken)
    }
}