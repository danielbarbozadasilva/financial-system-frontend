import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid, LinearProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { getMoney } from '../../../../util/validations/price-validation'
import { Box, Submit } from './styled'
import { Select } from '@material-ui/core'
import InputMask from 'react-input-mask'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

const FormDeposit = ({ submit, ...props }) => {
  const classes = useStyles()
  
  const banks = props.banks
  const user = props.data.id_user
  const [bank, setBank] = useState([])
  const [form, setForm] = useState({})
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

  useEffect(() => {
    const listBanks = banks.map((item) => item.name)
    setBank(listBanks)
  }, [])

  const fieldValidate = (nome, value) => {
    let menssage = ''

    switch (nome) {
      case 'bank':
        if (value.trim() === '') {
          menssage += 'Não pode ser vazio!'
        }
        break

      case 'branch':
        if (value.trim() === '') {
          menssage += 'Agência não pode ser vazio!'
        }
        break

      case 'cpf':
        if (value.trim().length < 14) {
          menssage += 'Cpf inválido!'
        }
        break
    }
    setFormValidate({ ...formValidate, [nome]: menssage })
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
      value: getMoney(form.value).replace('R$', '').replace(',', '.'),
      bank_id: banks.find((banks) => banks.name === form.bank).cod_bank
    }
    submit(newForm)
  }

  return (
    <Box>
      <form className={classes.root} noValidate autoComplete="off">
        <Select
          required
          fullWidth
          native
          variant="outlined"
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          value={form.bank || ''}
          onChange={handleChange}
          inputProps={{
            name: 'bank',
            id: 'outlined-native-simple'
          }}
        >
          <option value="">Selecione um Banco</option>
          {bank?.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </Select>

        <TextField
          required
          size="small"
          error={!!formValidate.branch}
          margin="normal"
          name="branch"
          label="Agência"
          type="text"
          id="standard-error-helper-text"
          value={form.branch || ''}
          onChange={handleChange}
          helperText={formValidate.branch || ''}
          placeholder="Informe a agência"
          disabled={loading}
        />

        <InputMask
          mask="999.999.999-99"
          disabled={false}
          maskChar=" "
          value={form.cpf || ''}
          onChange={handleChange}
        >
          {() => (
            <TextField
              required
              size="small"
              error={!!formValidate.cpf}
              margin="normal"
              name="cpf"
              label="Cpf"
              type="text"
              id="standard-error-helper-text"
              value={form.cpf || ''}
              onChange={handleChange}
              helperText={formValidate.cpf || ''}
              placeholder="Informe o cpf"
              disabled={loading}
            />
          )}
        </InputMask>

        <TextField
          required
          label="Valor"
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          invalid={formValidate.value}
          disabled={loading}
          type="text"
          value={getMoney(form.value) || ''}
          onChange={handleChange}
          name="value"
          placeholder="Informe o valor"
        />

        <Submit>
          <Button
            size="small"
            disabled={isNotValid()}
            type="submit"
            variant="contained"
            onClick={handleSubmit}
          >
            Confirmar
          </Button>
          <Grid container direction="column">
            <LinearProgress variant="determinate" value={percent} />
          </Grid>
        </Submit>
      </form>
    </Box>
  )
}

export default FormDeposit
