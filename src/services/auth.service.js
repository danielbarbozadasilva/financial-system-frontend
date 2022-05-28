import http from '../config/http'

const authService = (data) => http.post('/auth', data)
const registerService = (data) => http.post('/register', { ...data, auth: true })

export {
  authService,
  registerService
}
