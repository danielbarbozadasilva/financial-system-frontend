import React, { useEffect, useCallback } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {
  listAllUserAssetAction,
  listByIdUserAssetAction
} from '../../../store/transaction/transaction.action'
import Title from '../../../components/title/index'
import DataList from '../../../components/admin/transaction/datagrid/index'
import DataListDetails from '../../../components/admin/transaction/datagrid/user_transaction_details'

const TransactionDetails = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.transaction.all)
  const loading = useSelector((state) => state.transaction.loading)
  const idUser = useSelector((state) => state.auth.user.id)
  const typeUser = useSelector((state) => state.auth.user.type)

  const callFinancial = useCallback(() => {
    if (typeUser === 2) {
      dispatch(listByIdUserAssetAction(idUser))
    } else {
      dispatch(listAllUserAssetAction())
    }
  }, [dispatch])

  useEffect(() => {
    callFinancial()
  }, [callFinancial])

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
          {typeUser === 2? (
            <DataList data={data} loading={loading} />
          ):(
            <DataListDetails data={data} loading={loading} />
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default TransactionDetails
