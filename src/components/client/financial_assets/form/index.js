import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { LinearProgress, Button } from '@material-ui/core'
import {
  calcSubTotal,
  calcTotalTransfer,
  formatPrice
} from '../../../../util/validations/price-validation'
import { SInput, SBox, STable } from './styled'

const FormClient = ({ submit, ...props }) => {
  const [form, setForm] = useState({})

  const current_price = props.data.current_price
  const percent = useSelector((state) => state.financial.upload?.percent || 0)

  const handleSubmit = () => {
    let value = 1
    var subTotal = calcSubTotal(value, current_price)
    var total = calcTotalTransfer(subTotal)
    const newForm = {
      current_price: formatPrice(form.current_price || current_price),
      subtotal_price: formatPrice(form.subtotal_price || subTotal),
      total_price: formatPrice(form.total_price || total),
      quantity: Number(form.quantity) || value
    }
    submit(newForm)
  }

  const handleChange = (props) => {
    const { value, name } = props?.target
    if (name === 'quantity') {
      var subTotal = calcSubTotal(value, current_price)
      var total = calcTotalTransfer(subTotal)
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
            <TableCell align="right" style={{ paddingLeft: '70px' }}>
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
            <TableCell align="right" style={{ paddingLeft: '90px' }}>
              {current_price}
            </TableCell>
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
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Subtotal</TableCell>
              <TableCell>
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
                  value={form.total_price || calcTotalTransfer(current_price)}
                  disabled
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </STable>
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
      <LinearProgress variant="determinate" value={percent} />
    </>
  )
}

export default FormClient
