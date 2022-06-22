import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  balance: [],
  upload: {},
  selected: {}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ACCOUNT_LOADING:
      state.error = []
      state.loading = action.status
      return state
    case TYPES.ACCOUNT_BALANCE:
      state.balance = action.data
      state.loading = false
      return state
    case TYPES.ACCOUNT_ID:
      state.dataById = action.data
      state.loading = false
      return state
    case TYPES.ACCOUNT_UPLOAD:
      state.upload = action.upload
      return state
    default:
      return state
  }
}

export default reducer
