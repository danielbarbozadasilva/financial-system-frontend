import React, { useState } from 'react'
import { Grid, LinearProgress, Select } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Box, Submit, SButton, SInputLabel } from './styled'
import InputMask from 'react-input-mask'
import {
  getMoney,
  getTotalDeposit
} from '../../../../util/validations/price-validation'
import {
  isNotValid,
  fieldValidate
} from '../../../../util/validations/form-deposit'

const FormDeposit = ({ submit }) => {
  const [form, setForm] = useState({})
  const banks = useSelector((state) => state.bank.all)
  const listBanks = banks.map((item) => item.name)
  const percent = useSelector((state) => state.financial.upload?.percent || 0)
  const loading = useSelector((state) => state.financial.loading)
  const [formValidate, setFormValidate] = useState({})

  const handleChange = (props) => {
    const { value, name } = props.target
    const message = fieldValidate(name, value)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = () => {
    const newForm = {
      origin_cpf: form.cpf,
      total: getTotalDeposit(form.total),
      bank_id: banks.find((banks) => banks.name === form.bank).cod_bank
    }
    submit(newForm)
  }

  return (
    <Box>
      <form noValidate autoComplete="off">
        <div>
          <SInputLabel>Banco</SInputLabel>
          <Select
            fullWidth
            native
            id="standard-error-helper-text"
            margin="none"
            size="small"
            value={form.bank || ''}
            onChange={handleChange}
            inputProps={{
              name: 'bank',
              id: 'outlined-native-simple'
            }}
          >
            <option value="selecione">selecione</option>
            {listBanks?.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <div className="mt-1">
            <p className="text-danger">{formValidate.bank}</p>
          </div>
        </div>

        <div>
          <SInputLabel>Cpf</SInputLabel>
          <InputMask
            mask="999.999.999-99"
            className="form-control"
            name="cpf"
            value={form.cpf || ''}
            onChange={handleChange}
            disabled={loading}
          />
          <div className="mt-1">
            <p className="text-danger">{formValidate.cpf}</p>
          </div>
        </div>

        <div>
          <SInputLabel>Valor</SInputLabel>
          <input
            className="form-control"
            maxLength="10"
            disabled={loading}
            type="text"
            value={getMoney(form.total) || ''}
            onChange={handleChange}
            name="total"
            placeholder="Informe o valor"
          />
          <div className="mt-1">
            <p className="text-danger">{formValidate.total}</p>
          </div>
        </div>
        <Submit>
          <SButton
            variant="contained"
            size="small"
            type="submit"
            onClick={submitForm}
            disabled={isNotValid(form, formValidate)}
          >
            Confirmar
          </SButton>
          <Grid container direction="column">
            <LinearProgress variant="determinate" value={percent} />
          </Grid>
        </Submit>
      </form>
    </Box>
  )
}

export default FormDeposit
