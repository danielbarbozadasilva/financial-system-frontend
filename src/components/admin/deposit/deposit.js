import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useSelector } from 'react-redux'
import DataList from '../../datagrid/index'

const ListDeposits = ({ ...props }) => {
  const transactions = useSelector((state) => state.transaction.deposit)

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
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'deposit_value',
      headerName: 'Valor',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    }
  ]

  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Depósitos recebidos</DialogTitle>
      <DialogContent style={{ width: '600px' }}>
        <DataList
          data={transactions}
          columns={columnsDetails}
          loading={false}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close} color="primary" autoFocus>
          fechar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ListDeposits
