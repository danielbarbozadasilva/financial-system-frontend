import http from '../config/http'
const baseUrl = '/client'

export const checkBalanceService = (clientid) => http.get(`${baseUrl}/${clientid}/account`)