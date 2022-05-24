import axios from 'axios'
import { getToken } from './auth'
import history from './history'
import store from '../store'
import { logoutAction } from '../store/auth/auth.action'

const { REACT_APP_VERSION: version, REACT_APP_API: api } = process.env
const urlApi = api + version

const http = axios.create({
  baseURL: urlApi
})


http.defaults.headers['content-type'] = 'application/json'
if (getToken()) {
  http.defaults.headers.token = getToken()
}

http.interceptors.response.use((response) => {
  return response
}, function (error) {
  switch (error.response.status) {
    case 401:
      history.push('/signin')
      toastr.info('Token temporário expirado!')
      break
    case 500:
      store.dispatch(logoutAction())
      toastr.info('Faça o Login novamente!')
      break
  }
  return Promise.reject(error.response)
})

export default http
