import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'
import { FiTrash2, FiEdit } from 'react-icons/fi'
import { BsFillCartFill } from 'react-icons/bs'
import { BoxTable, SImg } from '../../../datagrid/styled'
import { IconButton } from '@material-ui/core'
import Loading from '../../../loading/index'

const DataList = ({ data, modal, loading }) => {
  
  const typeUser = useSelector((state) => state.auth.user.type)

  const thumb = ({ formattedValue }) => {
    return <SImg src={formattedValue} />
  }

  const actionEdit = ({ id, row }) => {
    return (
      <>
        <IconButton onClick={() => modal(2, id)} color="primary" size="small">
          <FiEdit />
        </IconButton>
      </>
    )
  }

  const actionRemove = ({ id, row }) => {
    return (
      <>
        <IconButton onClick={() => modal(3, id)} color="primary" size="small">
          <FiTrash2 />
        </IconButton>
      </>
    )
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
      headerName: typeUser === 1 ? 'Editar' : 'Adiquirir',
      renderCell: typeUser === 1 ? actionEdit : actionBuy,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: '',
      headerName: typeUser === 1 ? 'Excluir' : '',
      renderCell: typeUser === 1 ? actionRemove : '',
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
