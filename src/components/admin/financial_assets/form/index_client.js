import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { LinearProgress, Button } from '@material-ui/core'
import {
  calcSubTotal,
  calcTotal
} from '../../../../util/validations/price-validation'
import { SInput, SBox, STable } from './FormElements'

const FormClient = ({ submit, ...props }) => {
  const [form, setForm] = useState({})

  const current_price = props.data.current_price
  const percent = useSelector((state) => state.financial.upload?.percent || 0)

  const handleSubmit = () => {
    const newForm = {
      ...form
    }
    submit(newForm)
  }

  const handleChange = (props) => {
    const { value, name } = props?.target
    if (name === 'quantity') {
      var subTotal = calcSubTotal(value, current_price)
      var total = calcTotal(subTotal)
      setForm({
        current_price: current_price,
        subtotal_price: subTotal,
        total_price: total,
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
                <SInput
                  style={{ border: '0.5px solid grey' }}
                  type="number"
                  name="quantity"
                  onChange={handleChange}
                  min="1"
                  max="5"
                  defaultValue={'1'}
                />
              </TableCell>
              <TableCell align="right">{current_price}</TableCell>
              <TableCell align="right">
                <SInput
                  size="small"
                  margin="normal"
                  name="subtotal_price"
                  type="text"
                  value={form.subtotal_price || current_price}
                  disabled
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <STable>
          <TableRow>
            <TableCell>Subtotal</TableCell>
            <TableCell align="right">
              <SInput
                size="small"
                margin="normal"
                name="subtotal_price"
                type="text"
                value={form.subtotal_price || current_price}
                disabled
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Taxas</TableCell>
            <TableCell>
              <SInput
                size="small"
                margin="normal"
                name="current_tax"
                type="text"
                value={'5%'}
                disabled
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Total</strong>
            </TableCell>
            <TableCell>
              <SInput
                size="small"
                margin="normal"
                name="total_price"
                type="text"
                value={form.total_price || calcTotal(current_price)}
                disabled
              />
            </TableCell>
          </TableRow>
          <SBox>
            <Button
              size="small"
              type="submit"
              variant="contained"
              onClick={handleSubmit}
            >
              Adquirir
            </Button>
          </SBox>
        </STable>
        <LinearProgress variant="determinate" value={percent} />
      </TableContainer>
    </>
  )
}

export default FormClient
