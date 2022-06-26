import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.TRANSACTION_LOADING:
      state.error = []
      state.loading = action.status
      return state
    case TYPES.TRANSACTION_ALL_USER:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.TRANSACTION_USER_ID:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.TRANSACTION_CREATE:
      state.loading = false
      return state
    case TYPES.TRANSACTION_BANK_DEPOSIT:
      state.loading = false
      return state
    default:
      return state
  }
}

export default reducer
