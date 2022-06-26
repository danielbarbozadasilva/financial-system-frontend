import TYPES from '../types'
import { listBanks } from '../../services/bank.service'

export const listBanksAction = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.BANK_LOADING, status: true })
    try {
      const result = await listBanks()
      dispatch({ type: TYPES.ALL_BANK, data: result.data.data })
    } catch (error) {}
  }
}

