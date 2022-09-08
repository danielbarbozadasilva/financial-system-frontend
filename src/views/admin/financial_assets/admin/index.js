import React, { useEffect, useCallback } from 'react'
import { Grid, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {
  listAllAssetAction,
  createAssetAction,
  editAssetAction,
  updateAssetAction,
  deleteAssetAction
} from '../../../../store/financial_assets/financial_assets.action'
import DialogModal from '../../../../components/dialog'
import DataList from '../../../../components/admin/financial_assets/datagrid/index'
import Remove from '../../../../components/admin/financial_assets/remove'
import Title from '../../../../components/title/index'
import FormAdm from '../../../../components/admin/financial_assets/form/index'

const Financial = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = React.useState({})

  const financial = useSelector((state) => state.financial.all)
  const selected = useSelector((state) => state.financial.selected)
  const loading = useSelector((state) => state.financial.loading)

  const callFinancial = useCallback(() => {
    dispatch(listAllAssetAction())
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

      default:
        return false
    }
  }

  const actions = () => (
    <Button
      onClick={() => toogleModal(1, null)}
      variant="contained"
      color="primary"
      size="small"
    >
      Novo
    </Button>
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
        title={'Ativo Financeiro'}
        open={modal.status || false}
        close={closeModal}
      >
        <>
          {modal.type === 1 ? <FormAdm submit={submitForm} /> : null}
          {modal.type === 2 ? (
            <FormAdm submit={submitForm} data={selected} />
          ) : null}
          {modal.type === 3 ? (
            <Remove open={!!modal} close={closeModal} remove={submitForm} />
          ) : null}
        </>
      </DialogModal>
    </>
  )
}

export default Financial
