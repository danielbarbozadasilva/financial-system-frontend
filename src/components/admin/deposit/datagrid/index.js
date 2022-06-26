import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { BsFillCartFill } from 'react-icons/bs'
import { BoxTable } from './DatagridElements'
import { IconButton } from '@material-ui/core'
import Loading from '../../../loading/index'

const DataList = ({ data, modal, loading }) => {
  const actionDeposit = ({ id, row }) => {
    return (
      <>
        <IconButton onClick={() => modal(1, id)} color="primary" size="small">
          <BsFillCartFill />
        </IconButton>
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
    <BoxTable>
      <DataGrid rows={data} columns={columns} pageSize={10} />
    </BoxTable>
  )
}

export default DataList
