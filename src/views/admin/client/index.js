import React, { useEffect, useCallback } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {
  listAllClientAction,
  editClientAction,
  updateClientAction
} from '../../../store/client/client.action'

import Title from '../../../components/title/index'
import DialogModal from '../../../components/dialog'
import FormClient from '../../../components/admin/client/form/index'
import DataList from '../../../components/admin/client/datagrid/index'

const Client = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = React.useState({})

  const client = useSelector((state) => state.client.all)
  const selected = useSelector((state) => state.client.selected)
  const loading = useSelector((state) => state.client.loading)

  const callClient = useCallback(() => {
    dispatch(listAllClientAction())
  }, [dispatch])

  useEffect(() => {
    callClient()
  }, [callClient])

  const toogleModal = (type = 1, id = null) => {
    if (id) {
      dispatch(editClientAction(id)).then(() =>
        setModal({ type, id, status: true })
      )
    } else {
      setModal({ type, id, status: true })
    }
  }

  const closeModal = () => setModal({ status: false, type: 1 })

  const submitForm = (form) => {
    dispatch(updateClientAction(modal.id, form))
    setModal(false)
  }

  const actions = () => null

  return (
    <>
      <Title title="Clientes" subTitle="Página de Clientes" actions={actions} />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          <DataList data={client} loading={loading} modal={toogleModal} />
        </Grid>
      </Grid>
      <DialogModal
        title="Cliente"
        open={modal.status || false}
        close={closeModal}
      >
        <>
          {modal.type === 1 ? (
            <FormClient submit={submitForm} data={selected} />
          ) : null}
        </>
      </DialogModal>
    </>
  )
}

export default Client
