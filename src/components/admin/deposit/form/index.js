import React, { useEffect, useState } from 'react'
import { Grid, LinearProgress, Select } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { getMoney } from '../../../../util/validations/price-validation'
import { Box, Submit, SButton, SInputLabel } from './styled'
import InputMask from 'react-input-mask'

const FormDeposit = ({ submit, ...props }) => {
  const [form, setForm] = useState({})
  const user = props.data.id_user
  const listBanks = props.banks.map((item) => item.name)
  const percent = useSelector((state) => state.financial.upload?.percent || 0)
  const loading = useSelector((state) => state.financial.loading)
  const [formValidate, setFormValidate] = useState({})

  const handleChange = (props) => {
    const { value, name } = props.target
    fieldValidate(name, value)
    setForm({
      ...form,
      [name]: value
    })
  }

  const fieldValidate = (nome, value) => {
    let message = ''
    switch (nome) {
      case 'bank':
        if (value === 'selecione') {
          message += 'Não pode ser vazio!'
        }
        break

      case 'branch':
        if (value.trim() === '') {
          message += 'Agência não pode ser vazio!'
        }
        break

      case 'cpf':
        let cpf = value
          .trim()
          .replaceAll('-', '')
          .replaceAll('_', '')
          .replaceAll('.', '')
        if (cpf.length < 11) {
          message += 'CPF inválido!'
        }
        break
    }
    setFormValidate({ ...formValidate, [nome]: message })
  }

  const isNotValid = () => {
    const inputs = ['bank', 'branch', 'cpf']
    const invalid = (label) =>
      !Object.keys(form).includes(label) || form[label].length === 0

    const validate =
      Object.values(formValidate).filter((item) => item !== '').length > 0

    return inputs.some((item) => invalid(item)) || validate
  }

  const handleSubmit = () => {
    const newForm = {
      branch: form.branch,
      origin_cpf: form.cpf,
      user_id: user,
      value: getMoney(form.value).replace('R$', '').replace('.', '').replace(',','.'),
      bank_id: props.banks.find((banks) => banks.name === form.bank).cod_bank
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
          <SInputLabel>Agência</SInputLabel>
          <input
            className="form-control"
            name="branch"
            type="text"
            value={form.branch || ''}
            onChange={handleChange}
            placeholder="Informe a agência"
            disabled={loading}
          />
          <div className="mt-1">
            <p className="text-danger">{formValidate.branch}</p>
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
            value={getMoney(form.value) || ''}
            onChange={handleChange}
            name="value"
            placeholder="Informe o valor"
          />
          <div className="mt-1">
            <p className="text-danger">{formValidate.value}</p>
          </div>
        </div>

        <Submit>
          <SButton
            size="small"
            disabled={isNotValid()}
            type="submit"
            variant="contained"
            onClick={handleSubmit}
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
