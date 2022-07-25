import TYPES from '../types'
import { getUser } from '../../config/auth'
import {
  listAllAccountService,
  listByIdAccountService,
  checkBalanceService
} from '../../services/account.service'

export const checkBalanceAction = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.ACCOUNT_LOADING, status: true })
    try {
      const clientid = getUser().id
      const result = await checkBalanceService(clientid)
      dispatch({ type: TYPES.ACCOUNT_BALANCE, data: result.data.data })
    } catch (error) {}
  }
}

export const listAllAccountAction = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.ACCOUNT_LOADING, status: true })
    try {
      const result = await listAllAccountService()
      dispatch({ type: TYPES.ACCOUNT_ALL, data: result.data.data })
    } catch (error) {}
  }
}

export const editAccountAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await listByIdAccountService(id)
      dispatch({ type: TYPES.ACCOUNT_EDIT, data: result.data.data })
    } catch (error) {}
  }
}
