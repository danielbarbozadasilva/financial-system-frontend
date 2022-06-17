import TYPES from '../types'
import { toastr } from 'react-redux-toastr'
import {
  listAllClientService,
  listByIdClientService,
  updateClientService,
  changeStatusService
} from '../../services/client.service'

export const listAllClientAction = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CLIENT_LOADING, status: true })
    try {
      const result = await listAllClientService()
      dispatch({ type: TYPES.CLIENT_ALL, data: result.data.data })
    } catch (error) {}
  }
}

export const editClientAction = (id) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.CLIENT_UPLOAD,
      upload: 0
    })
    try {
      const result = await listByIdClientService(id)
      dispatch({ type: TYPES.CLIENT_EDIT, data: result.data.data })
    } catch (error) {}
  }
}

export const updateClientAction = (id, { ...data }) => {
  return (dispatch) => {
    dispatch({ type: TYPES.CLIENT_LOADING, status: true })
    dispatch({
      type: TYPES.CLIENT_UPLOAD,
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
          type: TYPES.CLIENT_UPLOAD,
          upload: percentCompleted
        })
      }
    }

    updateClientService(id, data, config)
      .then((result) => {
        dispatch(editClientAction(id))
        dispatch(listAllClientAction())
        toastr.success(
          `Cliente ${result.data.data.name}`,
          'atualizado com sucesso!'
        )
        return true
      })
      .catch((error) => {
        dispatch({ type: TYPES.CLIENT_LOADING, status: false })
        const { data } = error.response
        toastr.error('Erro', ...data.message.details)
      })
      .finally(() => {
        dispatch({ type: TYPES.CLIENT_LOADING, status: false })
      })
  }
}

export const setStatusClient = (id, status) => {
  return async (dispatch, getState) => {
    try {
      const result = await changeStatusService(id, status)
      var msg = status ? 'Ativado' : 'Desativado'
      toastr.success(
        `Cliente ${result.data.data.name}`,
        `${msg} com sucesso`
      )
      const all = getState().client.all
      const index = all.findIndex((item) => item.id === id)
      all[index].status = result.data.data.status
      dispatch({ type: TYPES.CLIENT_ALL, data: [...all] })
    } catch (err) {}
  }
}
