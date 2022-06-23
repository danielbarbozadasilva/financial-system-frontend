import React, { useEffect, useCallback } from 'react'
import { Grid, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction } from '../../../store/transaction/transaction.action'
import {
  listAllAssetAction,
  createAssetAction,
  editAssetAction,
  updateAssetAction,
  deleteAssetAction
} from '../../../store/financial_assets/financial_assets.action'
import { checkBalanceAction } from '../../../store/account/account.action'
import DialogModal from '../../../components/dialog'
import FormAdm from '../../../components/admin/financial_assets/form/index_admin'
import FormClient from '../../../components/admin/financial_assets/form/index_client'
import DataList from '../../../components/admin/financial_assets/datagrid/index'
import Remove from '../../../components/admin/financial_assets/remove'
import Title from '../../../components/title/index'

const Financial = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = React.useState({})

  const financial = useSelector((state) => state.financial.all)
  const account = useSelector((state) => state.account.balance)

  const selected = useSelector((state) => state.financial.selected)
  const typeUser = useSelector((state) => state.auth.user.type)
  const loading = useSelector((state) => state.financial.loading)

  const callFinancial = useCallback(() => {
    if (typeUser === 1) {
      dispatch(listAllAssetAction())
    } else {
      dispatch(listAllAssetAction())
      dispatch(checkBalanceAction())
    }
  }, [dispatch])

  useEffect(() => {
    callFinancial()
  }, [callFinancial])

  const toogleModal = (type = 1, id = null) => {
    if (id) {
      dispatch(editAssetAction(id)).then(() =>
        setModal({ type, id, status: true })
      )
    } else {
      setModal({ type, id, status: true })
    }
  }

  const closeModal = () => setModal({ status: false, type: 1 })

  const submitForm = (form) => {
    switch (modal.type) {
      case 1:
        dispatch(createAssetAction(form))
        setModal(false)
        return

      case 2:
        dispatch(updateAssetAction(modal.id, form))
        setModal(false)
        return

      case 3:
        dispatch(deleteAssetAction(modal.id)).then(() => setModal(false))
        return

      case 4:
        dispatch(createTransaction(modal.id, form))
        setModal(false)
        return

      default:
        return false
    }
  }

  const actions = () =>
    typeUser === 1 ? (
      <Button
        onClick={() => toogleModal(1, null)}
        variant="contained"
        color="primary"
        size="small"
      >
        Novo
      </Button>
    ) : (
      <div class="container">
        <div class="row">
          <div>
            <h6>Saldo em C/C: {account.balance}</h6>
            <h6>Patrimônio Investido: {account.total_assets}</h6>
            <h6>Patrimônio Total: {account.consolidated}</h6>
            <Button
              onClick={() => toogleModal(1, null)}
              variant="contained"
              color="primary"
              size="small"
            >
              Realizar transaferência
            </Button>
          </div>
        </div>
      </div>
    )

  return (
    <>
      <Title
        title="Ativos Financeiros"
        subTitle="Página de Ativos"
        actions={actions}
      />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          <DataList data={financial} loading={loading} modal={toogleModal} />
        </Grid>
      </Grid>

      <DialogModal
        title="Ativo Financeiro"
        open={modal.status || false}
        close={closeModal}
      >
        <>
          {modal.type === 1 ? <FormAdm submit={submitForm} /> : null}
          {modal.type === 2 ? (
            <FormAdm submit={submitForm} data={selected} />
          ) : null}
          {modal.type === 3 ? (
            <Remove close={closeModal} remove={submitForm} />
          ) : null}
          {modal.type === 4 ? (
            <FormClient submit={submitForm} data={selected} />
          ) : null}
        </>
      </DialogModal>
    </>
  )
}

export default Financial
