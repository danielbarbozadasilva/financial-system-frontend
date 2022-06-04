import http from '../config/http'

export const listAllAssetService = () => http.get('/financial')
export const createAssetService = (data) => http.post('/financial', data)