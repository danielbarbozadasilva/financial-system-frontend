import React, { useEffect, useCallback } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { listByIdUserAssetAction } from '../../../../store/transaction/transaction.action'
import Title from '../../../../components/title/index'
import DataList from '../../../../components/admin/transaction/datagrid/index'

const TransactionDetails = () => {
  const dispatch = useDispatch()

  const selected = useSelector((state) => state.transaction.selected)
  const loading = useSelector((state) => state.transaction.loading)
  const idUser = useSelector((state) => state.auth.user.id)

  const callTransaction = useCallback(() => {
    dispatch(listByIdUserAssetAction(idUser))
  }, [dispatch])

  useEffect(() => {
    callTransaction()
  }, [callTransaction])

  const actions = () => null

  return (
    <>
      <Title
        title="Transações realizadas"
        subTitle="Página de Transações"
        actions={actions}
      />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          <DataList data={selected} loading={loading} />
        </Grid>
      </Grid>
    </>
  )
}

export default TransactionDetails
