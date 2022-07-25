import http from '../config/http'
const baseUrl = '/bank'

export const listBanks = (data) => http.get(baseUrl, data)
