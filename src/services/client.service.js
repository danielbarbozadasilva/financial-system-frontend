import http from '../config/http'
const baseUrl = '/client'

export const listAllClientService = () => http.get(baseUrl)
export const listByIdClientService = (clientid) => http.get(`${baseUrl}/${clientid}`)
export const updateClientService = (clientid, data, config) => http.put(`${baseUrl}/${clientid}`, data, config)
export const changeStatusService = (clientid, status) => http.put(`${baseUrl}/${clientid}/status/${status}`)
