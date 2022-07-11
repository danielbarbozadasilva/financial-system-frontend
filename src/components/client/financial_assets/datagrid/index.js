import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { BoxTable, SImg } from '../../../datagrid/styled'
import { IconButton } from '@material-ui/core'
import Loading from '../../../loading/index'
import { BsFillCartFill } from 'react-icons/bs'

const DataList = ({ data, modal, loading }) => {
  
  const thumb = ({ formattedValue }) => {
    return <SImg src={formattedValue} />
  }

  const actionBuy = ({ id, row }) => {
    return (
      <>
        <IconButton onClick={() => modal(4, id)} color="primary" size="small">
          <BsFillCartFill />
        </IconButton>
      </>
    )
  }

  const columns = [
    {
      field: 'image',
      headerName: 'Imagem',
      width: 140,
      align: 'center',
      headerAlign: 'center',
      renderCell: thumb,
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
      field: 'description',
      headerName: 'Descrição',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'bvmf',
      headerName: 'Bvmf',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'current_price',
      headerName: 'Preço Atual',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'actionEdit',
      headerName: 'Adiquirir',
      renderCell: actionBuy,
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
