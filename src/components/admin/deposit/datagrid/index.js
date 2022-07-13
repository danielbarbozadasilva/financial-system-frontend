import React from 'react'
import { useDispatch } from 'react-redux'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { BsFillCartFill } from 'react-icons/bs'
import { More as MoreIcon } from '@mui/icons-material'
import { IconButton, Tooltip } from '@material-ui/core'
import { BoxTable } from '../../../datagrid/styled'
import Loading from '../../../loading/index'
import { listByIdUserDepositAction } from '../../../../store/transaction/transaction.action'
import Form from '../deposit'

const DataList = ({ data, modal, loading }) => {
  const dispatch = useDispatch()

  const [modalTransaction, setModalTransaction] = React.useState({})

  function openTransaction(row) {
    dispatch(listByIdUserDepositAction(row)).then(
      setModalTransaction({ open: true })
    )
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

  const actionListDeposit = ({ id }) => {
    return (
      <>
        <Tooltip title="Listar depósitos">
          <IconButton onClick={() => openTransaction(id)} color="primary">
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
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={10}
          disableColumnSelector
          disableDensitySelector
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 }
            }
          }}
        />
      </BoxTable>
      <Form
        open={modalTransaction.open || false}
        close={() => setModalTransaction({ ...modalTransaction, open: false })}
      />
    </>
  )
}

export default DataList
