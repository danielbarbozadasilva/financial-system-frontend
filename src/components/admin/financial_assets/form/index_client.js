import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Grid, LinearProgress } from '@material-ui/core'
import { Submit } from './FormElements'
import { getMoney } from '../../../../util/validations/price-validation'

const FormClient = ({ submit, ...props }) => {
  const [form, setForm] = useState({})
  const percent = useSelector((state) => state.financial.upload?.percent || 0)

  const handleSubmit = () => {
    const newForm = {
      ...form
    }
    submit(newForm)
  }

  const calcSubTotal = (value) => {
    var resp = parseFloat(
      getMoney(props.data.current_price).replace('R$', '').replace(',', '.') *
        value
    ).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    return resp
  }

  const calcTotal = (current_price) => {
    const TAX_RATE = 5
    var price = parseFloat(
      getMoney(current_price ? current_price : props.data.current_price)
        .replace('R$', '')
        .replace(',', '.')
    )

    var resp = price + (price / 100) * TAX_RATE
    var convert = resp.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })

    if (!current_price) {
      setForm({
        total_price: convert
      })
    }

    return convert
  }

  const handleChange = (props) => {
    const { value, name } = props?.target
    if (name === 'quantity') {
      var subTotal = calcSubTotal(value)
      setForm({
        current_price: subTotal,
        total_price: calcTotal(subTotal),
        [name]: value
      })
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Qtd.</TableCell>
              <TableCell align="right">Unid.</TableCell>
              <TableCell align="right">Soma</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{props.data.bvmf}</TableCell>
              <TableCell align="right">
                <input
                  type="number"
                  name="quantity"
                  onChange={handleChange}
                  min="1"
                  max="9"
                  defaultValue={'1'}
                />
              </TableCell>
              <TableCell align="right">{props.data.current_price}</TableCell>
              <TableCell align="right">
                <input
                  size="small"
                  margin="normal"
                  name="current_price"
                  type="text"
                  value={form.current_price || props.data.current_price}
                  disabled
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={1} />
              <TableCell>Subtotal</TableCell>
              <TableCell align="right">
                <input
                  size="small"
                  margin="normal"
                  name="current_price"
                  type="text"
                  value={form.current_price || props.data.current_price}
                  disabled
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={1} />
              <TableCell>Taxas</TableCell>
              <TableCell align="right">
                <input
                  size="small"
                  margin="normal"
                  name="current_price"
                  type="text"
                  value={'5%'}
                  disabled
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={1} />
              <TableCell>
                <strong>Total</strong>
              </TableCell>
              <TableCell align="right">
                <input
                  size="small"
                  margin="normal"
                  name="total_price"
                  type="text"
                  value={form.total_price || calcTotal(this)}
                  disabled
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Submit>
        <Button
          align="right"
          size="small"
          type="submit"
          variant="contained"
          onClick={handleSubmit}
        >
          Adquirir
        </Button>
        <Grid container direction="column">
          <LinearProgress variant="determinate" value={percent} />
        </Grid>
      </Submit>
    </>
  )
}

export default FormClient
