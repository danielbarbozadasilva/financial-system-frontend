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
import Loading from '../../../loading/form/index'
import {
  fieldValidate,
  isNotValid
} from '../../../../util/validations/form-client'

const FormClient = ({ submit }) => {
  const [button, setButton] = useState(false)
  const loading = useSelector((state) => state.financial.loading)
  const percent = useSelector((state) => state.financial.upload?.percent || 0)
  const selected = useSelector((state) => state.client.selected)
  const [form, setForm] = useState({ ...selected })
  const [formValidate, setFormValidate] = useState({})
  const [uf, setUf] = useState([])
  const [city, setCity] = useState([])

  const handleChange = (props) => {
    const { value, name } = props.target
    const message = fieldValidate(name, value)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
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

  return (
    <Container component="main" maxWidth="xs">
      <SignBox>
        <FormStyle noValidate>
          <div>
            <SInputLabel>Nome</SInputLabel>
            <TextField
              fullWidth
              size="small"
              id="standard-error-helper-text"
              name="name"
              value={form.name || ''}
              onChange={handleChange}
              helperText={formValidate.name || ''}
              disabled={loading}
              variant="outlined"
              error={!!formValidate.name}
            />
          </div>

          <div>
            <SInputLabel>E-mail</SInputLabel>
            <TextField
              fullWidth
              size="small"
              id="standard-error-helper-text"
              name="email"
              value={form.email || ''}
              onChange={handleChange}
              helperText={formValidate.email || ''}
              disabled={loading}
              variant="outlined"
              error={!!formValidate.email}
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
              disabled={loading}
              variant="outlined"
            />
            <div className="mt-1">
              <p className="text-danger">{formValidate.birth_date}</p>
            </div>
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
            <></>
          )}
          <SButton
            variant="contained"
            fullWidth
            size="small"
            margin="normal"
            onClick={() => setButton(!button)}
          >
            {button ? 'Ocultar campo' : 'Alterar senha'}
          </SButton>

          <Submit>
            {loading ? (
              <Grid container direction="column">
                <LinearProgress variant="determinate" value={percent} />
              </Grid>
            ) : (
              <SButton
                fullWidth
                size="small"
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                disabled={isNotValid(form, formValidate)}
              >
                Atualizar
              </SButton>
            )}
          </Submit>
        </FormStyle>
      </SignBox>
    </Container>
  )
}
export default FormClient
