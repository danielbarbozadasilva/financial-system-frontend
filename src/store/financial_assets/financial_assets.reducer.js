import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  upload: {},
  selected: {}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FINANCIAL_LOADING:
      state.error = []
      state.loading = action.status
      return state
    case TYPES.FINANCIAL_ALL:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.FINANCIAL_EDIT:
      state.selected = action.data
      state.loading = false
      return state
    case TYPES.FINANCIAL_UPDATE:
      state.upload = action.upload
      state.loading = false
      return state
    case TYPES.FINANCIAL_CREATE:
      state.loading = false
      return state
    default:
      return state
  }
}

export default reducer
