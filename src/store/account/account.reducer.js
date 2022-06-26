import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  balance: [],
  all: [],
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
    case TYPES.ACCOUNT_ALL:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.ACCOUNT_ID:
      state.selected = action.data
      state.loading = false
      return state
    case TYPES.ACCOUNT_EDIT:
      state.selected = action.data
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
