import http from '../config/http'
const baseUrl = '/financial'

export const listAllAssetService = () => http.get(baseUrl)
export const listByIdAssetService = (financialid) => http.get(`${baseUrl}/${financialid}`)
export const createAssetService = (data, config) => http.post(baseUrl, data, config)
export const updateAssetService = (financialid, data, config) => http.put(`${baseUrl}/${financialid}`, data, config)
export const deleteAssetService = (financialid) => http.delete(`${baseUrl}/${financialid}`)
