import TYPES from '../types'
import { toastr } from 'react-redux-toastr'
import {
  createTransactionService,
  listAllUserTransactionService,
  listByIdUserTransactionService,
  createDepositService,
  listByIdDepositTransactionService
} from '../../services/transaction.service'
import { getUser } from '../../config/auth'
import { listAllAccountAction, checkBalanceAction } from '../../store/account/account.action'

export const createTransaction = (asset_id, data) => {
  return async (dispatch) => {
    try {
      const userId = getUser().id
      const result = await createTransactionService(userId, asset_id, data)
      dispatch({ type: TYPES.TRANSACTION_CREATE, data: result.data?.data })
      toastr.success('Transação', 'realizada com sucesso!')
      dispatch(checkBalanceAction())
    } catch (error) {
      const { data } = error.response
      toastr.error('Erro', data.message)
    }
  }
}

export const createDepositAction = (clientid, data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.BANK_LOADING, status: true })
    try {
      const result = await createDepositService(clientid, data)
      dispatch({ type: TYPES.TRANSACTION_BANK_DEPOSIT, data: result.data.data })
      toastr.success('Depósito', 'realizado com sucesso!')
      dispatch(listAllAccountAction())
    } catch (error) {
      const { data } = error.response
      toastr.error('Erro', data.message)
    }
  }
}

export const listAllUserAssetAction = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.TRANSACTION_LOADING, status: true })
    try {
      const result = await listAllUserTransactionService()
      dispatch({ type: TYPES.TRANSACTION_ALL_USER, data: result.data.data })
    } catch (error) {}
  }
}

export const listByIdUserAssetAction = (clientid) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.TRANSACTION_LOADING, status: true })
    try {
      const result = await listByIdUserTransactionService(clientid)
      dispatch({ type: TYPES.TRANSACTION_USER_ID, data: result.data.data })
    } catch (error) {}
  }
}

export const listByIdUserDepositAction = (clientid) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.TRANSACTION_LOADING, status: true })
    try {
      const result = await listByIdDepositTransactionService(clientid)
      dispatch({
        type: TYPES.TRANSACTION_BANK_USER_DEPOSIT,
        data: result.data.data
      })
    } catch (error) {}
  }
}
