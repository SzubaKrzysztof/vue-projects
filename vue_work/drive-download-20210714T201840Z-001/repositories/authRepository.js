import axios from 'axios'

const authServer = 'https://10.1.10.201:44341/';

const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

const axiosAuth = axios.create( {
    baseURL: authServer,
    headers: customHeaders,
    withCredentials: true
} );

export const doLogin = async (payload, headers) => {
    const { data } = await axiosAuth.post('/connect/token', payload, { headers })
    return data
}

export const getUser = async () => {
    const user = await axiosAuth.get('/api/identity/my-profile')
    return user.data
}


const responseInterceptor = axiosAuth.interceptors.response.use(
    (response) => {
      // Do something with response data
      return response
    },
    async (error) => {
      if (error.response.status !== 401) {
        return Promise.reject(error)
      }
      // To do: use refresh token to receive token and replace to existing

      // axios.interceptors.response.eject(responseInterceptor)
  
      // try {
      //   const accessToken = localStorage.getItem('access-token')
  
      //   error.response.config.headers['Authorization'] = `Bearer ${accessToken}`
      //   console.log(error.response)
  
      //   return axios(error.response.config)
      // } catch (e) {
      //   await logout()
      //   await router.push({ name: 'SigninPage' })
  
      //   return Promise.reject(error)
      // }
    }
  )

export default axiosAuth