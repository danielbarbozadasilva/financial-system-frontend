import React, { useEffect, useState } from 'react'
import {
  TextField,
  Grid,
  LinearProgress,
  Select,
  Container
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Submit, SignBox, FormStyle, SInputLabel, SButton } from './styled'
import ufCityFile from '../../../../util/state-city.json'
import * as moment from 'moment'
import InputMask from 'react-input-mask'

const FormClient = ({ submit, ...props }) => {
  const [form, setForm] = useState({})
  const [isEdit, setEdit] = useState(false)
  const [button, setButton] = useState(false)

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
        let cpf = value
          .trim()
          .replaceAll('-', '')
          .replaceAll('_', '')
          .replaceAll('.', '')
        if (cpf.length < 11) {
          message += 'CPF inválido!'
        }
        break

      case 'gender':
        if (value === 'selecione') {
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

      case 'phone':
        let phone = value.trim().replaceAll('-', '').replaceAll('_', '')

        regex =
          /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

        if (!regex.test(phone)) {
          message += 'Número de telefone inválido!'
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
        if (value === 'selecione') {
          message += 'Selecione uma uf!'
        }
        break

      case 'city':
        if (value === 'selecione') {
          message += 'Selecione uma cidade!'
        }
        break

      case 'zip_code':
        let zip_code = value.trim().replaceAll('-', '').replaceAll('_', '')
        if (zip_code.length < 8) {
          message += 'Cep inválido!'
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
      gender: form.gender,
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

  const changeButton = () => {
    if (button) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <SignBox>
        <FormStyle noValidate>
          <div>
            <SInputLabel>Nome</SInputLabel>
            <TextField
              fullWidth
              size="small"
              error={!!formValidate.name}
              id="standard-error-helper-text"
              name="name"
              value={form.name || ''}
              onChange={handleChange}
              helperText={formValidate.name || ''}
              disabled={loading}
              variant="outlined"
            />
          </div>

          <div>
            <SInputLabel>E-mail</SInputLabel>
            <TextField
              fullWidth
              size="small"
              error={!!formValidate.email}
              id="standard-error-helper-text"
              name="email"
              value={form.email || ''}
              onChange={handleChange}
              helperText={formValidate.email || ''}
              disabled={loading}
              variant="outlined"
            />
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
            <SInputLabel>Sexo</SInputLabel>
            <Select
              native
              size="small"
              id="standard-error-helper-text"
              value={form.gender}
              onChange={handleChange}
              inputProps={{
                name: 'gender',
                id: 'outlined-native-simple'
              }}
            >
              <option value="selecione">selecione</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </Select>
            <div className="mt-1">
              <p className="text-danger">{formValidate.gender}</p>
            </div>
          </div>

          <div>
            <SInputLabel>Data de nascimento</SInputLabel>
            <TextField
              fullWidth
              id="standard-error-helper-text"
              name="birth_date"
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
              variant="outlined"
            />
          </div>

          <div>
            <SInputLabel>Telefone</SInputLabel>
            <InputMask
              mask="(99)9999-9999"
              className="form-control"
              name="phone"
              value={form.phone || ''}
              onChange={handleChange}
              disabled={loading}
            />
            <div className="mt-1">
              <p className="text-danger">{formValidate.phone}</p>
            </div>
          </div>

          <div>
            <SInputLabel>Endereço</SInputLabel>
            <TextField
              fullWidth
              size="small"
              id="standard-error-helper-text"
              error={!!formValidate.address}
              name="address"
              value={form.address || ''}
              onChange={handleChange}
              helperText={formValidate.address || ''}
              disabled={loading}
              variant="outlined"
            />
          </div>

          <div>
            <SInputLabel>Uf</SInputLabel>
            <Select
              native
              id="standard-error-helper-text"
              variant="outlined"
              size="small"
              value={form.uf || ''}
              onChange={handleChange}
              inputProps={{
                name: 'uf',
                id: 'outlined-native-simple'
              }}
            >
              <option value="selecione">selecione</option>
              {uf?.map(({ name, uf }, i) => (
                <option key={i} value={uf}>
                  {uf}
                </option>
              ))}
            </Select>
            <div className="mt-1">
              <p className="text-danger">{formValidate.uf}</p>
            </div>
          </div>

          <div>
            <SInputLabel>Cidade</SInputLabel>
            <Select
              fullWidth
              native
              id="standard-error-helper-text"
              variant="outlined"
              size="small"
              value={form.city || ''}
              onChange={handleChange}
              inputProps={{
                name: 'city',
                id: 'outlined-native-simple'
              }}
            >
              <option value="selecione">selecione</option>
              {city?.map((city, i) => (
                <option key={i} value={city}>
                  {city}
                </option>
              ))}
            </Select>
            <div className="mt-1">
              <p className="text-danger">{formValidate.city}</p>
            </div>
          </div>
          
          <div>
            <SInputLabel>Cep</SInputLabel>
            <InputMask
              mask="99999-999"
              className="form-control"
              name="zip_code"
              value={form.zip_code || ''}
              onChange={handleChange}
              disabled={loading}
            />
            <div className="mt-1">
              <p className="text-danger">{formValidate.zip_code}</p>
            </div>
          </div>

          <div>
            <SInputLabel>Complemento</SInputLabel>
            <TextField
              fullWidth
              size="small"
              id="standard-error-helper-text"
              invalid={formValidate.complement}
              disabled={loading}
              type="text"
              value={form.complement || ''}
              onChange={handleChange}
              name="complement"
              placeholder="Informe o seu complemento"
              variant="outlined"
            />
          </div>

          {button ? (
            <div>
              <SInputLabel>Nova senha</SInputLabel>
              <TextField
                fullWidth
                size="small"
                id="standard-error-helper-text"
                error={!!formValidate.password}
                name="password"
                onChange={handleChange}
                helperText={formValidate.password || ''}
                disabled={loading}
                variant="outlined"
              />
            </div>
          ) : (
            ''
          )}
          <SButton
            variant="contained"
            fullWidth
            size="small"
            margin="normal"
            onClick={() => changeButton()}
          >
            {button ? 'Ocultar campo' : 'Alterar senha'}
          </SButton>

          <Submit>
            <SButton
              required
              fullWidth
              size="small"
              disabled={isNotValid()}
              type="submit"
              variant="contained"
              onClick={handleSubmit}
            >
              Atualizar
            </SButton>
          </Submit>

          <Grid container direction="column">
            <LinearProgress variant="determinate" value={percent} />
          </Grid>
        </FormStyle>
      </SignBox>
    </Container>
  )
}
export default FormClient
