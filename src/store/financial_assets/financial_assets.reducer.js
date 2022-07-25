import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  upload: {},
  selected: {},
  top05: [],
  dataById: []
}

const reducer = ({...state} = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FINANCIAL_LOADING:
      state.error = []
      state.loading = action.status
      return state
    case TYPES.FINANCIAL_ALL:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.FINANCIAL_TOP5_USER:
      state.top05 = action.data
      state.loading = false
      return state
    case TYPES.FINANCIAL_EDIT:
      state.selected = action.data
      state.loading = false
      return state
    case TYPES.FINANCIAL_REMOVE:
      state.selected = action.data
      state.loading = false
      return state
    case TYPES.FINANCIAL_ID:
      state.dataById = action.data
      state.loading = false
      return state
    case TYPES.FINANCIAL_UPLOAD:
      state.upload = action.upload
      return state
    case TYPES.FINANCIAL_CREATE:
      state.loading = false
      return state
    default:
      return state
  }
}

export default reducer
