import React, { useEffect, useCallback } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {
  listAllUserAssetAction,
  listByIdUserAssetAction
} from '../../../store/transaction/transaction.action'
import Title from '../../../components/title/index'
import DataList from '../../../components/admin/transaction/datagrid/index'

const TransactionDetails = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.transaction.all)
  const selected = useSelector((state) => state.transaction.selected)

  const loading = useSelector((state) => state.transaction.loading)
  const idUser = useSelector((state) => state.auth.user.id)
  const typeUser = useSelector((state) => state.auth.user.type)

  const callTransaction = useCallback(() => {
    if (typeUser === 1) {
      dispatch(listAllUserAssetAction())
    } else {
      dispatch(listByIdUserAssetAction(idUser))
    }
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
          <DataList data={typeUser === 1 ? data : selected} loading={loading} />
        </Grid>
      </Grid>
    </>
  )
}

export default TransactionDetails
