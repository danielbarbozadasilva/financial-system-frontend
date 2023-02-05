import React, { useEffect, useCallback } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction } from '../../../../store/transaction/transaction.action'
import { listAllAssetAction, editAssetAction } from '../../../../store/financial_assets/financial_assets.action'
import { checkBalanceAction } from '../../../../store/account/account.action'
import DialogModal from '../../../../components/dialog'
import DataList from '../../../../components/client/financial_assets/datagrid/index'
import Title from '../../../../components/title/index'
import FormClient from '../../../../components/client/financial_assets/form/index'

const FinancialClient = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = React.useState({})
  const financial = useSelector((state) => state.financial.all)
  const account = useSelector((state) => state.account.balance)
  const loading = useSelector((state) => state.financial.loading)

  const callFinancial = useCallback(() => {
    dispatch(listAllAssetAction())
    dispatch(checkBalanceAction())
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
    dispatch(createTransaction(modal.id, form))
    setModal(false)
  }

  const actions = () => (
    <div className="container">
      <div className="row">
        <div>
          <h6>Saldo em C/C: {account.balance}</h6>
          <h6>Patrimônio Investido: {account.total_assets}</h6>
          <h6>Patrimônio Total: {account.consolidated}</h6>
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
        title={'Adquirir ativo'}
        open={modal.status || false}
        close={closeModal}
      >
        <FormClient submit={submitForm} />
      </DialogModal>
    </>
  )
}

export default FinancialClient
