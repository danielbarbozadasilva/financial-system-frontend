import http from '../config/http'
const baseUrl = '/account'

export const listAllAccountService = () => http.get(`${baseUrl}`)
export const listByIdAccountService = (accountid) => http.get(`${baseUrl}/${accountid}`)
export const checkBalanceService = (clientid) => http.get(`${baseUrl}/client/${clientid}`)