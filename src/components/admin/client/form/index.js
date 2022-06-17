import React, { useEffect, useState } from 'react'
import {
  TextField,
  Button,
  Grid,
  LinearProgress,
  Select
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Submit } from './FormElements'
import InputMask from 'react-input-mask'
import ufCityFile from '../../../../util/state-city.json'
import * as moment from 'moment'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

const FormClient = ({ submit, ...props }) => {
  const classes = useStyles()

  const [form, setForm] = useState({})
  const [isEdit, setEdit] = useState(false)

  const loading = useSelector((state) => state.financial.loading)
  const percent = useSelector((state) => state.financial.upload?.percent || 0)
  const [formValidate, setFormValidate] = useState({})
  const [uf, setUf] = useState([])
  const [city, setCity] = useState([])

  if (Object.keys(props).length > 0 && !isEdit) {
    setForm(props.data)
    setEdit(true)
  }

  const handleChange = (props) => {
    const { value, name } = props.target
    fieldValidate(name, value)
    setForm({
      ...form,
      [name]: value
    })
  }

  const isNotValid = () => {
    const inputs = [
      'name',
      'email',
      'cpf',
      'gender',
      'birth_date',
      'password',
      'confirmPassword',
      'phone',
      'address',
      'uf',
      'city',
      'zip_code'
    ]
    const invalid = (label) =>
      !Object.keys(form).includes(label) || form[label].length === 0

    const validations =
      Object.values(formValidate).filter((item) => item !== '').length > 0

    return inputs.some((item) => invalid(item)) || validations
  }

  useEffect(() => {
    const localization = ufCityFile.states.map(({ name, uf }) => ({ name, uf }))
    setUf(localization)
  }, [])

  useEffect(() => {
    const result = ufCityFile.states.find((item) => item.uf === form.uf)
    if (result) {
      setCity(result.city)
    }
  }, [form.uf])

  const fieldValidate = (name, value) => {
    let message = ''
    let regex = ''
    switch (name) {
      case 'name':
        regex = /\d/g
        if (regex.test(value)) {
          message += 'Não pode conter números!'
        } else if (value.trim() === '') {
          message += 'Não pode ser vazio!'
        } else if (value.length <= 4) {
          message += 'Acima de 4 caracteres!'
        }
        break

      case 'email':
        regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!regex.test(value)) {
          message += 'E-mail inválido!'
        } else if (value.trim() === '') {
          message += 'Campo em branco!'
        }
        break

      case 'cpf':
        if (value.trim().length < 14) {
          message += 'CPF inválido!'
        }
        break

      case 'gender':
        if (value === '0') {
          message += 'Selecione um sexo!'
        }
        break

      case 'birth_date':
        var datanasc = value.replaceAll('-', '/')
        var dataAtual = moment().format('YYYY/MM/DD')

        if (!moment(datanasc).isValid) {
          message += 'Data inválida!'
        } else if (moment(datanasc).isAfter(dataAtual)) {
          message += 'Data maior que a atual!'
        } else if (moment().diff(moment(datanasc), 'years') < 18) {
          message += 'O usuário precisa ter no mínimo 18 anos!'
        }
        break

      case 'password':
        if (value.length < 6) {
          message += 'Acima de 6 caracteres!'
        }
        break

      case 'confirmPassword':
        if (value?.length !== form.password?.length) {
          message += 'Senhas não conferem!'
        } else if (form.password !== value) {
          message += 'Senhas não conferem!'
        }
        break

      case 'phone':
        regex =
          /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

        if (!regex.test(value)) {
          message += 'Número de telefone inválido!'
        } else if (value.trim() === '') {
          message += 'Campo em branco!'
        }
        break

      case 'address':
        if (value.trim() === '') {
          message += 'Não pode ser vazio!'
        } else if (value.length <= 4) {
          message += 'Precisa ter mais que 4 caracteres!'
        }
        break

      case 'uf':
        if (value === '') {
          message += 'Selecione uma uf!'
        }
        break

      case 'city':
        if (value === '') {
          message += 'Selecione uma cidade!'
        }
        break

      case 'zip_code':
        if (value.trim() === '') {
          message += 'Não pode ser vazio!'
        } else if (value.trim().length !== 9) {
          message += 'Precisa ter 9 caracteres!'
        }
        break
    }

    setFormValidate({ ...formValidate, [name]: message })
  }

  const handleSubmit = () => {
    const newForm = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      gender: form.gender === '1' ? 'M' : 'F',
      birth_date: form.birth_date,
      password: form.password,
      phone: form.phone,
      cod_address: form.id,
      address: form.address,
      uf: form.uf,
      city: form.city,
      zip_code: form.zip_code,
      complement: form.complement
    }
    submit(newForm)
  }
  return (
    <Box>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          size="small"
          margin="normal"
          error={!!formValidate.name}
          id="standard-error-helper-text"
          label="Nome"
          name="name"
          autoFocus
          value={form.name || ''}
          onChange={handleChange}
          helperText={formValidate.name || ''}
          disabled={loading}
        />
        <TextField
          size="small"
          margin="normal"
          error={!!formValidate.email}
          id="standard-error-helper-text"
          label="E-mail"
          name="email"
          autoFocus
          value={form.email || ''}
          onChange={handleChange}
          helperText={formValidate.email || ''}
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
              size="small"
              margin="normal"
              id="standard-error-helper-text"
              invalid={formValidate.cpf}
              disabled={loading}
              type="text"
              value={form.cpf || ''}
              onChange={handleChange}
              name="cpf"
              placeholder="Informe o seu cpf"
            />
          )}
        </InputMask>

        <Select
          native
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          value={form.gender === 'M' ? '1' : '2'}
          onChange={handleChange}
          inputProps={{
            name: 'gender',
            id: 'outlined-native-simple'
          }}
        >
          <option value="0">selecione</option>
          <option value="1">M</option>
          <option value="2">F</option>
        </Select>

        <TextField
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          name="birth_date"
          label="Data de nascimento"
          InputLabelProps={{ shrink: true, required: true }}
          type="date"
          value={
            form.birth_date
              ? moment(form.birth_date)
                  .format('YYYY/MM/DD')
                  .replaceAll('/', '-')
              : ''
          }
          onChange={handleChange}
          helperText={formValidate.birth_date || ''}
          disabled={loading}
        />

        <TextField
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          error={!!formValidate.password}
          label="Senha"
          name="password"
          autoFocus
          value={form.password || ''}
          onChange={handleChange}
          helperText={formValidate.password || ''}
          disabled={loading}
        />
        <TextField
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          error={!!formValidate.confirmPassword}
          label="Confirmar senha"
          name="confirmPassword"
          autoFocus
          value={form.confirmPassword || ''}
          onChange={handleChange}
          helperText={formValidate.confirmPassword || ''}
          disabled={loading}
        />

        <InputMask
          mask="+55 (99) 9999-9999"
          disabled={false}
          maskChar=" "
          value={form.phone || ''}
          onChange={handleChange}
        >
          {() => (
            <TextField
              size="small"
              margin="normal"
              id="standard-error-helper-text"
              error={!!formValidate.phone}
              name="phone"
              label="Telefone"
              type="text"
              value={form.phone || ''}
              onChange={handleChange}
              helperText={formValidate.phone || ''}
              disabled={loading}
            />
          )}
        </InputMask>
        <TextField
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          error={!!formValidate.address}
          label="Endereço"
          name="address"
          autoFocus
          value={form.address || ''}
          onChange={handleChange}
          helperText={formValidate.address || ''}
          disabled={loading}
        />

        <Select
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          native
          value={form.uf || ''}
          onChange={handleChange}
          inputProps={{
            name: 'uf',
            id: 'outlined-native-simple'
          }}
        >
          <option value="">selecione</option>
          {uf?.map(({ name, uf }, i) => (
            <option key={i} value={uf}>
              {uf}
            </option>
          ))}
        </Select>

        <Select
          native
          size="small"
          margin="normal"
          value={form.city || ''}
          onChange={handleChange}
          inputProps={{
            name: 'city',
            id: 'outlined-native-simple'
          }}
        >
          <option value="">selecione</option>

          {city?.map((city, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </Select>

        <InputMask
          mask="99999-999"
          disabled={false}
          maskChar=" "
          value={form.zip_code || ''}
          onChange={handleChange}
        >
          {() => (
            <TextField
              invalid={formValidate.zip_code}
              disabled={loading}
              type="text"
              id="zip_code"
              value={form.zip_code || ''}
              onChange={handleChange}
              name="zip_code"
              placeholder="Informe o seu zip_code"
            />
          )}
        </InputMask>

        <TextField
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          invalid={formValidate.complement}
          disabled={loading}
          type="text"
          value={form.complement || ''}
          onChange={handleChange}
          name="complement"
          placeholder="Informe o seu complemento"
        />
        <Submit>
          <Button
            size="small"
            className={
              isNotValid() || loading
                ? 'buttonSubmit button-style-disable'
                : 'buttonSubmit button-style'
            }
            disabled={isNotValid()}
            type="submit"
            variant="contained"
            onClick={handleSubmit}
          >
            Atualizar
          </Button>
          <Grid container direction="column">
            <LinearProgress variant="determinate" value={percent} />
          </Grid>
        </Submit>
      </form>
    </Box>
  )
}
export default FormClient
