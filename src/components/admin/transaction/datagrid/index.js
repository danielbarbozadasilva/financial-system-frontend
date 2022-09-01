import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { BoxTable } from '../../../datagrid/styled'
import Loading from '../../../loading/page/index'

const DataList = ({ data, modal, loading }) => {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 140,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'name',
      headerName: 'Nome do ativo',
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
      field: 'purchase_price',
      headerName: 'Preço de compra',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'current_price',
      headerName: 'Preço atual',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'total_price',
      headerName: 'Preço total',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'total_quantity',
      headerName: 'Quantidade total',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'current_date',
      headerName: 'Data',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    }
  ]

  if (loading) {
    return <Loading />
  }

  return (
    <BoxTable>
      <DataGrid
        rows={data}
        columns={columns}
        loading={loading}
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
  )
}

export default DataList
