import TYPES from '../types'
import { checkBalanceService } from '../../services/account.service'
import { getUser } from '../../config/auth'

export const checkBalanceAction = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.ACCOUNT_LOADING, status: true })
    try {
      var user_id = getUser().id
      const result = await checkBalanceService(user_id)
      dispatch({ type: TYPES.ACCOUNT_BALANCE, data: result.data.data })
    } catch (error) {}
  }
}
