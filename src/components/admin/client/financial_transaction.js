import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useSelector } from 'react-redux'
import DataList from '../../datagrid/index'

const ListFinancialTransaction = ({ ...props }) => {
  const transactions = useSelector((state) => state.transaction.selected)

  const columnsTransactions = [
    {
      field: 'total_quantity',
      headerName: 'Quantidade total',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 340,
      disableColumnMenu: true
    },
    {
      field: 'total_price',
      headerName: 'Preço total',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 340,
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
      <DialogTitle id="alert-dialog-title">Lista de Transações</DialogTitle>
      <DialogContent style={{ width: '500px' }}>
        <DataList
          data={transactions}
          columns={columnsTransactions}
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

export default ListFinancialTransaction
