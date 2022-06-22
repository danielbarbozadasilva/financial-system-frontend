import http from '../config/http'
const baseUrl = '/transaction'

export const createTransactionService = (user_id, asset_id, data) =>
  http.post(`${baseUrl}/user/${user_id}/asset/${asset_id}`, data)

export const listAllUserTransactionService = () => http.get(`${baseUrl}/client`)

export const listByIdUserTransactionService = (clientid) =>
  http.get(`${baseUrl}/client/${clientid}`)
