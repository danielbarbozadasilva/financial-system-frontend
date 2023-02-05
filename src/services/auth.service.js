import http from '../config/http'

export const authService = (data) => http.post('/auth', data)
export const registerService = (data) => http.post('/register', data)
