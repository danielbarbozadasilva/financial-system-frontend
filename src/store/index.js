import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import { reducer as toastrReducer } from 'react-redux-toastr'
import SignReducer from './auth/auth.reducer'
import financialReducer from './financial_assets/financial_assets.reducer'
import clientReducer from './client/client.reducer'
import transactionReducer from './transaction/transaction.reducer'
import accountReducer from './account/account.reducer'

const reducers = combineReducers({
  auth: SignReducer,
  financial: financialReducer,
  client: clientReducer,
  transaction: transactionReducer,
  account: accountReducer,
  toastr: toastrReducer
})

const middlewares = [thunk, multi]

const compose = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(reducers, compose)

export default store
