import TYPES from '../types'
import { toastr } from 'react-redux-toastr'
import { createTransactionService } from '../../services/transaction.service'
import { getUser } from '../../config/auth'

export const createTransaction = (asset_id, data) => {
  return async (dispatch) => {
    try {
      const user_id = getUser().id
      const result = await createTransactionService(user_id, asset_id, data)
      dispatch({ type: TYPES.TRANSACTION_CREATE, data: result.data?.data })
      toastr.success('Transação', 'realizada com sucesso!')
    } catch (error) {
      toastr.error('Ocorreu um erro', error)
    }
  }
}
