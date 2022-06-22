import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  upload: {},
  selected: {},
  dataById: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CLIENT_LOADING:
      state.error = []
      state.loading = action.status
      return state
    case TYPES.CLIENT_ALL:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.LIST_CLIENT_ASSET:
      state.selected = action.data
      state.loading = false
      return state
    case TYPES.CLIENT_EDIT:
      state.selected = action.data
      state.loading = false
      return state
    case TYPES.CLIENT_ID:
      state.dataById = action.data
      state.loading = false
      return state
    case TYPES.CLIENT_UPLOAD:
      state.upload = action.upload
      return state
    default:
      return state
  }
}

export default reducer
