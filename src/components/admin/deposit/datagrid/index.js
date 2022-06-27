import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'
import { BsFillCartFill } from 'react-icons/bs'
import { More as MoreIcon } from '@mui/icons-material'
import { IconButton, Tooltip } from '@material-ui/core'
import { BoxTable } from './DatagridElements'
import Loading from '../../../loading/index'
import Form from '../deposit'
import { listByIdUserDepositAction } from '../../../../store/transaction/transaction.action'

const DataList = ({ data, modal, loading }) => {
  const dispatch = useDispatch()
  
  const transactions = useSelector((state) => state.transaction.deposit)
  const [modalTransaction, setModalTransaction] = React.useState({})
  
  function openTransaction(row) {
    dispatch(listByIdUserDepositAction(row))
    setModalTransaction({ open: true, data: transactions })
  }

  const actionDeposit = ({ id, row }) => {
    return (
      <>
        <IconButton onClick={() => modal(1, id)} color="primary" size="small">
          <BsFillCartFill />
        </IconButton>
      </>
    )
  }

  const actionListDeposit = ({ id, row }) => {
     return (
      <>
        <Tooltip title="Listar ativos">
          <IconButton
            onClick={() => openTransaction(id)}
            color="primary"
          >
            <MoreIcon />
          </IconButton>
        </Tooltip>
      </>
    )
  }

  const columns = [
    {
      field: 'number',
      headerName: 'Número',
      width: 140,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'type',
      headerName: 'Tipo',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'name_branch',
      headerName: 'Agência',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'balance',
      headerName: 'Saldo',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'open_date',
      headerName: 'Abertura',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'name',
      headerName: 'Nome',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'cpf',
      headerName: 'Cpf',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'Listar Depósitos',
      headerName: 'Listar Depósitos',
      renderCell: actionListDeposit,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'Depositar',
      headerName: 'Depositar',
      renderCell: actionDeposit,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      disableColumnMenu: true
    }
  ]

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <BoxTable>
        <DataGrid rows={data} columns={columns} pageSize={10} />
      </BoxTable>
      <Form
        data={modalTransaction.data}
        open={modalTransaction.open}
        close={() => setModalTransaction({ ...modalTransaction, open: false })}
      />
    </>
  )
}

export default DataList
