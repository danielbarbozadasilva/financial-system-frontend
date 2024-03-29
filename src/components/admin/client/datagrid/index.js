import React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { More as MoreIcon } from '@mui/icons-material'
import { FiEdit } from 'react-icons/fi'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { setStatusClient } from '../../../../store/client/client.action'
import { listByIdUserAssetAction } from '../../../../store/transaction/transaction.action'
import Loading from '../../../loading/page/index'
import { BoxTable } from '../../../datagrid/styled'
import ListFinancialAssets from '../financial_assets'
import ListFinancialTransaction from '../financial_transaction'
import ListClientDetails from '../clients_details'

const DataList = ({ data, modal, loading }) => {
  const dispatch = useDispatch()

  const [modalTransaction, setModalTransaction] = React.useState({})
  const [modalAssets, setModalAssets] = React.useState(false, {})
  const [modalDetails, setModalDetails] = React.useState(false, {})

  const toggleActive = (id, status) => {
    dispatch(setStatusClient(id, status))
  }

  function openTransaction(row) {
    dispatch(listByIdUserAssetAction(row))
    setModalTransaction({ open: true })
  }

  function openClientDetails(row) {
    setModalDetails({ open: true, data: row })
  }

  function openAssetsClient(row) {
    dispatch(listByIdUserAssetAction(row)).then(setModalAssets({ open: true }))
  }

  const actionModalAssets = ({ id, row }) => {
    const assets = row?.transactiondetails?.length !== 0
    return (
      <>
        <Tooltip title="Ativos">
          <span>
            <IconButton
              onClick={() => openAssetsClient(id)}
              disabled={assets ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const actionModalTransaction = ({ id, row }) => {
    const transaction = Number(row?.transaction[0].total_quantity) !== 0
    return (
      <>
        <Tooltip title="Listar ativos">
          <span>
            <IconButton
              onClick={() => openTransaction(id)}
              disabled={transaction ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
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
            disabled={details ? false : true}
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
      <ListFinancialTransaction
        open={modalTransaction.open || false}
        close={() => setModalTransaction({ ...modalTransaction, open: false })}
      />
      <ListClientDetails
        open={modalDetails.open || false}
        details={modalDetails.data}
        close={() => setModalDetails({ ...modalDetails, open: false })}
      />
      <ListFinancialAssets
        open={modalAssets.open || false}
        close={() => setModalAssets({ ...modalAssets, open: false })}
      />
    </>
  )
}

export default DataList
