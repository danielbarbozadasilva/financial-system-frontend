import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import DataList from '../../datagrid/index'

const ListFinancialAssets = ({ open, close, assets }) => {
  const columnTransactionDetails = [
    {
      field: 'name',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 340,
      disableColumnMenu: true
    },
    {
      field: 'bvmf',
      headerName: 'Bvmf',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 340,
      disableColumnMenu: true
    }
  ]

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Ativos adquiridos</DialogTitle>
      <DialogContent style={{ width: '500px ' }}>
        <DataList data={assets} columns={columnTransactionDetails} loading={false} />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color='primary' autoFocus>
          fechar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ListFinancialAssets
