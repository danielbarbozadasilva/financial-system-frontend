import { removeToken, saveAuth } from '../../config/auth'
import { authService } from '../../services/auth.service'
import http from '../../config/http'
import { navigate } from '@reach/router'
import { toastr } from 'react-redux-toastr'
import TYPES from '../types'

export const signInAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.SIGN_LOADING, status: true })

    try {
      const result = await authService(data)
      if (result.data) {
        saveAuth(result.data.data)
        http.defaults.headers.token = result.data.data.token
        dispatch({ type: TYPES.SIGN_IN, data: result.data?.data })
        navigate('/admin')
        toastr.success('Seja Bem-vindo!')
      }
    } catch (error) {
      toastr.error('Usuário ou senha incorretos!')
      dispatch({ type: TYPES.SIGN_ERROR, data: error })
    }
  }
}

export const logoutAction = (data) => {
  return async (dispatch) => {
    removeToken()
    dispatch({ type: TYPES.SIGN_OUT })
    navigate('/auth')
  }
}
