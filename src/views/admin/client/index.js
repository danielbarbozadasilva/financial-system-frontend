import React, { useEffect, useCallback } from 'react'
import { Grid, IconButton, Tooltip } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { More as MoreIcon } from '@material-ui/icons'
import Title from '../../../components/title/index'
import DataList from '../../../components/datagrid/index'
import {
  listAllClientAction,
  setStatusClient
} from '../../../store/client/client.action'
import ListFinancialAssets from '../../../components/admin/client/financial_assets'
import ListFinancialTransaction from '../../../components/admin/client/financial_transaction'
import ListClientDetails from '../../../components/admin/client/clients_details'

const Client = () => {
  const dispatch = useDispatch()
  const [modalTransaction, setModalTransaction] = React.useState({})
  const [modalAssets, setModalAssets] = React.useState(false, {})
  const [modalDetails, setModalDetails] = React.useState(false, {})

  const client = useSelector((state) => state.client.all)
  const loading = useSelector((state) => state.client.loading)

  const callClient = useCallback(() => {
    dispatch(listAllClientAction())
  }, [dispatch])

  useEffect(() => {
    callClient()
  }, [callClient])

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
            onClick={() => toggleActive(id, status ? 'Desativar' : 'Ativar')}
            color="primary"
          >
            <>{status ? <BsToggleOn /> : <BsToggleOff />}</>
          </IconButton>
        </Tooltip>
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
      headerName: 'Ativos',
      renderCell: actionModalAssets,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'actionModalTransaction',
      headerName: 'Transações',
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

  const actions = () => null

  return (
    <>
      <Title title="Clientes" subTitle="Página de Clientes" actions={actions} />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          <DataList data={client} columns={columns} loading={loading} />
        </Grid>
      </Grid>
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

export default Client
