import {
  listAllAssetService,
  createAssetService
} from '../../services/financial_assets.service'
import { toastr } from 'react-redux-toastr'
import TYPES from '../types'

export const listAllAssetAction = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.FINANCIAL_LOADING, status: true })
    try {
      const result = await listAllAssetService()
      dispatch({ type: TYPES.FINANCIAL_ALL, data: result.data.data })
    } catch (error) {}
  }
}

export const createAssetAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.FINANCIAL_LOADING, status: true })
    try {
      const result = await createAssetService(data)
      dispatch({ type: TYPES.FINANCIAL_CREATE, data: result.data?.data })
    } catch (error) {
      const { data } = error.response
      toastr.error('Erro', ...data.message.details)
    }
  }
}
