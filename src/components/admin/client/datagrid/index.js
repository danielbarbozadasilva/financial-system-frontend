import React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'
import { More as MoreIcon } from '@mui/icons-material'
import { FiEdit } from 'react-icons/fi'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import {
  setStatusClient
} from '../../../../store/client/client.action'
import Loading from '../../../loading/index'
import { BoxTable } from './DatagridElements'
import ListFinancialAssets from '../../../admin/client/financial_assets'
import ListFinancialTransaction from '../../../admin/client/financial_transaction'
import ListClientDetails from '../../../admin/client/clients_details'

const DataList = ({ data, modal, loading }) => {
  const dispatch = useDispatch()
  const [modalTransaction, setModalTransaction] = React.useState({})
  const [modalAssets, setModalAssets] = React.useState(false, {})
  const [modalDetails, setModalDetails] = React.useState(false, {})

  const toggleActive = (id, status) => {
    dispatch(setStatusClient(id, status))
  }

  function openTransaction(row) {
    setModalTransaction({ open: true, data: row })
  }

  function openClientDetails(row) {
    setModalDetails({ open: true, data: row })
  }

  function openAssetsClient(row) {
    setModalAssets({ open: true, data: row })
  }

  const actionModalAssets = ({ row }) => {
    const assets = row?.transaction_details !== 0
    return (
      <>
        <Tooltip title="Ativos">
          <IconButton
            className={assets ? 'iconeStar' : 'doNotShow'}
            onClick={() => openAssetsClient(row?.transaction_details)}
            color="primary"
          >
            <MoreIcon />
          </IconButton>
        </Tooltip>
      </>
    )
  }

  const actionModalTransaction = ({ row }) => {
    const transactions = row?.total_quantity !== 0
    return (
      <>
        <Tooltip title="Listar ativos">
          <IconButton
            className={transactions ? 'iconeStar' : 'doNotShow'}
            onClick={() => openTransaction(row?.transaction)}
            color="primary"
          >
            <MoreIcon />
          </IconButton>
        </Tooltip>
      </>
    )
  }

  const actionModalDetails = ({ row }) => {
    const details = row?.address !== 0
    return (
      <>
        <Tooltip title="Listar Endereço">
          <IconButton
            className={details ? 'iconeStar' : 'doNotShow'}
            onClick={() => openClientDetails(row?.address)}
            color="primary"
          >
            <MoreIcon />
          </IconButton>
        </Tooltip>
      </>
    )
  }

  const actionModalStatus = ({ id, row }) => {
    const status = row.status === 'Ativo'
    return (
      <>
        <Tooltip title={status ? 'Ativar' : 'Desativar'}>
          <IconButton
            onClick={() => toggleActive(id, status ? 0 : 1)}
            color="primary"
          >
            <>{status ? <BsToggleOn /> : <BsToggleOff />}</>
          </IconButton>
        </Tooltip>
      </>
    )
  }

  const actionEdit = ({ id, row }) => {
    return (
      <>
        <IconButton onClick={() => modal(1, id)} color="primary" size="small">
          <FiEdit />
        </IconButton>
      </>
    )
  }
  const columns = [
    {
      field: 'name',
      headerName: 'Nome',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'email',
      headerName: 'E-mail',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'cpf',
      headerName: 'CPF',
      width: 150,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'actionModalAssets',
      headerName: 'Ativos Adquiridos',
      renderCell: actionModalAssets,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'actionModalTransaction',
      headerName: 'Transações Realizadas',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: actionModalTransaction,
      disableColumnMenu: true
    },
    {
      field: 'actionModalDetails',
      headerName: 'Endereço',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: actionModalDetails,
      disableColumnMenu: true
    },
    {
      field: 'actionEdit',
      headerName: 'Editar',
      renderCell: actionEdit,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'actionModalStatus',
      headerName: 'Status',
      align: 'center',
      headerAlign: 'center',
      renderCell: actionModalStatus,
      flex: 1,
      GridColDef: 'center',
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
      <ListFinancialTransaction
        open={modalTransaction.open}
        transactions={modalTransaction.data}
        close={() => setModalTransaction({ ...modalTransaction, open: false })}
      />
      <ListClientDetails
        open={modalDetails.open}
        details={modalDetails.data}
        close={() => setModalDetails({ ...modalDetails, open: false })}
      />
      <ListFinancialAssets
        assets={modalAssets.data}
        open={modalAssets.open}
        close={() => setModalAssets({ ...modalAssets, open: false })}
      />
    </>
  )
}

export default DataList
