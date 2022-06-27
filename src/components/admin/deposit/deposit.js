import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import DataList from '../../datagrid/index'

const ListDeposits = ({ data, open, close }) => {
  const columnsDetails = [
    {
      field: 'current_date',
      headerName: 'Data',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'origin_cpf',
      headerName: 'Cpf',
      width: 130,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    }, 
    {
      field: 'branch',
      headerName: 'Agência',
      width: 120,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'deposit_value',
      headerName: 'Valor',
      width: 100,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    }
  ]

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>Depósitos recebidos</DialogTitle>
      <DialogContent style={{ width: '600px'}}>
        <DataList data={data} columns={columnsDetails} loading={false} />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color='primary' autoFocus>
          fechar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ListDeposits
