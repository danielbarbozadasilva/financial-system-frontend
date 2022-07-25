import React, { useEffect, useCallback } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {
  listAllAccountAction,
  editAccountAction
} from '../../../store/account/account.action'
import { createDepositAction } from '../../../store/transaction/transaction.action'
import { listBanksAction } from '../../../store/bank/bank.action'
import Title from '../../../components/title/index'
import DialogModal from '../../../components/dialog'
import FormDeposit from '../../../components/admin/deposit/form/index'
import DataList from '../../../components/admin/deposit/datagrid/index'
import Form from '../../../components/admin/deposit/deposit'

const Account = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = React.useState({})

  const banks = useSelector((state) => state.bank.all)
  const account = useSelector((state) => state.account.all)
  const selected = useSelector((state) => state.account.selected)
  const loading = useSelector((state) => state.account.loading)

  const callClient = useCallback(() => {
    dispatch(listAllAccountAction())
  }, [dispatch])

  useEffect(() => {
    callClient()
  }, [callClient])

  const toogleModal = (type = 1, id = null) => {
    dispatch(editAccountAction(id)).then(
      () => dispatch(listBanksAction()),
      setModal({ type, id, status: true })
    )
  }

  const closeModal = () => setModal({ status: false, type: 1 })

  const submitForm = (form) => {
    dispatch(createDepositAction(form))
    setModal(false)
  }

  const actions = () => null

  return (
    <>
      <Title
        title="Contas"
        subTitle="Página de Contas de Clientes"
        actions={actions}
      />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          <DataList data={account} loading={loading} modal={toogleModal} />
        </Grid>
      </Grid>
      <DialogModal
        title="Depositar"
        open={modal.status || false}
        close={closeModal}
      >
        <>
          {modal.type === 1 ? (
            <FormDeposit submit={submitForm} data={selected} banks={banks} />
          ) : (
            <Form data={selected} />
          )}
        </>
      </DialogModal>
    </>
  )
}

export default Account
