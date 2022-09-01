import TYPES from '../types'
import { toastr } from 'react-redux-toastr'
import {
  listAllAssetService,
  listByIdAssetService,
  listTop05AssetService,
  createAssetService,
  updateAssetService,
  deleteAssetService
} from '../../services/financial_assets.service'

export const listAllAssetAction = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.FINANCIAL_LOADING, status: true })
    try {
      const result = await listAllAssetService()
      dispatch({ type: TYPES.FINANCIAL_ALL, data: result.data.data })
    } catch (error) {}
  }
}

export const listTop05AssetAction = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.FINANCIAL_LOADING, status: true })
    try {
      const result = await listTop05AssetService()
      dispatch({ type: TYPES.FINANCIAL_TOP5_USER, data: result.data.data })
    } catch (error) {}
  }
}

export const createAssetAction = (data) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: function (progressEvent) {
        const percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        dispatch({
          type: TYPES.FINANCIAL_UPDATE,
          upload: {
            finish: percent === 100,
            percent: percent
          }
        })
      }
    }
    try {
      const formData = new FormData()
      Object.keys(data).map((k) => formData.append(k, data[k]))
      const result = await createAssetService(formData, config)
      dispatch({ type: TYPES.FINANCIAL_CREATE, data: result.data })
      dispatch(listAllAssetAction())
      toastr.success(
        `Ativo ${result.data.data.name}`,
        'cadastrado com sucesso!'
      )
    } catch (error) {
      toastr.error('Ativo', 'preencha todos os campos!')
    }
  }
}

export const editAssetAction = (id) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.FINANCIAL_UPLOAD,
      upload: 0
    })
    try {
      const result = await listByIdAssetService(id)
      dispatch({ type: TYPES.FINANCIAL_EDIT, data: result.data.data })
    } catch (error) {}
  }
}

export const updateAssetAction = (id, { ...data }) => {
  return (dispatch) => {
    dispatch({ type: TYPES.FINANCIAL_LOADING, status: true })
    dispatch({
      type: TYPES.FINANCIAL_UPLOAD,
      upload: 0
    })
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        dispatch({
          type: TYPES.FINANCIAL_UPLOAD,
          upload: percentCompleted
        })
      }
    }

    const formData = new FormData()
    Object.keys(data).map((k) => formData.append(k, data[k]))

    updateAssetService(id, formData, config)
      .then((result) => {
        dispatch(editAssetAction(id))
        dispatch(listAllAssetAction())
        toastr.success(
          `Ativo ${result.data.data.name}`,
          'atualizado com sucesso!'
        )
        return true
      })
      .catch((error) => {
        dispatch({ type: TYPES.FINANCIAL_LOADING, status: false })
        dispatch({ type: TYPES.SIGN_ERROR, data: error })
        const { data } = error.response
        toastr.error('Erro', data.message)
      })
      .finally(() => {
        dispatch({ type: TYPES.FINANCIAL_LOADING, status: false })
      })
  }
}

export const deleteAssetAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.FINANCIAL_LOADING, status: true })
    try {
      const result = await deleteAssetService(id)
      dispatch({ type: TYPES.FINANCIAL_REMOVE, data: result.data })
      dispatch(listAllAssetAction())
      toastr.success('Ativo', 'removido com sucesso')
    } catch (error) {
      const { data } = error.response
      toastr.error('Erro', data.message)
    }
  }
}
