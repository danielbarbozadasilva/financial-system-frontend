import { removeToken, saveAuth } from '../../config/auth'
import { authService, registerService } from '../../services/auth.service'
import http from '../../config/http'
import { navigate } from '@reach/router'
import { toastr } from 'react-redux-toastr'
import TYPES from '../types'

export const signInAction = async (data) => {
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

export const signUpAction = async (data) => {
  try {
    const result = await registerService(data)
    if (result.data) {
      saveAuth(result.data.data)
      http.defaults.headers.token = result.data.data.token
    }
    dispatch({
      type: TYPES.SIGN_UP,
      data: result.data
    })
    toastr.success('Usuário', 'cadastrado com sucesso!')
    navigate('/admin')
  } catch (error) {
    toastr.error('Erro', 'Preencha todos os campos!')
    dispatch({ type: TYPES.SIGN_ERROR, data: error })
  }
}

export const logoutAction = (data) => {
  return async (dispatch) => {
    removeToken()
    dispatch({ type: TYPES.SIGN_OUT })
    navigate('/auth')
  }
}
