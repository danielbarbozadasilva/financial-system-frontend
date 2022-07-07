import React, { useEffect, useState } from 'react'
import * as moment from 'moment'
import { signUpAction } from '../../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form } from 'react-bootstrap'
import InputMask from 'react-input-mask'
import { Select } from '@material-ui/core'
import ufCityFile from '../../../util/state-city.json'
import { SForm, STextForm, SButton, SDesabledButton } from '../styled'
import Loading from '../../../components/loading'

const SignUp = () => {
  const dispatch = useDispatch()

  const [hasError, setHasError] = useState(false)
  const [success, setSuccess] = useState(false)
  const error = useSelector((state) => state.auth.error)
  const registered = useSelector((state) => state.auth.registered)
  const loading = useSelector((state) => state.auth.loading)
  const [uf, setUf] = useState([])
  const [city, setCity] = useState([])
  const [formValidate, setFormValidate] = useState({})
  const [form, setForm] = useState({})
  const [disableInit, setDisableInit] = useState(true)

  const handleChange = (props) => {
    setDisableInit(false)
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value
    })
    fieldValidate(name, value)
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
        if (value === '0') {
          message += 'Selecione um sexo!'
        }
        break

      case 'birthDate':
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
        let zip_code = value.trim().replaceAll('-', '').replaceAll('_', '')
        if (zip_code.length < 8) {
          message += 'Cep inválido!'
        }
        break
    }

    setFormValidate({ ...formValidate, [name]: message })
  }

  const isNotValid = () => {
    const inputs = [
      'name',
      'email',
      'cpf',
      'gender',
      'birthDate',
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
    if (error.length > 0) {
      setHasError(true)
    } else {
      setHasError(false)
    }

    if (registered) {
      setSuccess(true)
      setForm({})
    }
  }, [error, registered])

  const insertData = async () => {
    const nform = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      gender: form.gender,
      birth_date: form.birthDate,
      password: form.password,
      phone: form.phone,
      address: form.address,
      uf: form.uf,
      city: form.city,
      zip_code: form.zip_code,
      complement: form.complement,
      status: true
    }

    dispatch(await signUpAction(nform)).then(() => {
      setDisableInit(true)
    })
  }

  return (
    <SForm autoComplete="off">
      <STextForm>Cadastre-se</STextForm>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>*Nome:</Form.Label>
          <Form.Control
            autoFocus
            invalid={formValidate.name}
            disabled={loading}
            type="text"
            id="name"
            value={form.name || ''}
            onChange={handleChange}
            name="name"
            placeholder="Insira o seu nome"
          />
          <Form.Control.Feedback type="text">
            {formValidate.name || ''}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>*E-mail:</Form.Label>
          <Form.Control
            invalid={formValidate.email}
            disabled={loading}
            type="email"
            id="email"
            value={form.email || ''}
            onChange={handleChange}
            name="email"
            placeholder="Insira seu email"
          />
          <Form.Control.Feedback type="text">
            {formValidate.email || ''}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>*Cpf:</Form.Label>
          <InputMask
            mask="999.999.999-99"
            className="form-control"
            type="text"
            id="cpf"
            onChange={handleChange}
            name="cpf"
            value={form.cpf || ''}
            placeholder="Informe o seu cpf"
            invalid={formValidate.cpf}
            disabled={loading}
          />
          <Form.Control.Feedback type="text">
            {formValidate.cpf || ''}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>*Sexo</Form.Label>
          <Select
            fullWidth
            native
            value={form.gender || ''}
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
          <Form.Control.Feedback type="text">
            {formValidate.gender || ''}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>*Data de nascimento:</Form.Label>
          <Form.Control
            invalid={formValidate.birthDate}
            disabled={loading}
            type="date"
            id="birthDate"
            value={
              form.birthDate
                ? moment(form.birthDate)
                    .format('YYYY/MM/DD')
                    .replaceAll('/', '-')
                : ''
            }
            onChange={handleChange}
            name="birthDate"
          />
          <Form.Control.Feedback type="text">
            {formValidate.birthDate || ''}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>*Senha:</Form.Label>
          <Form.Control
            invalid={formValidate.password}
            disabled={loading}
            type="password"
            id="password"
            value={form.password || ''}
            onChange={handleChange}
            name="password"
            placeholder="Insira a sua senha"
          />
          <Form.Control.Feedback type="text">
            {formValidate.password || ''}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>*Confirmar senha:</Form.Label>
          <Form.Control
            invalid={formValidate.confirmPassword}
            disabled={loading}
            type="password"
            id="confirmPassword"
            value={form.confirmPassword || ''}
            onChange={handleChange}
            name="confirmPassword"
            placeholder="Confirme a sua senha"
          />
          <Form.Control.Feedback type="text">
            {formValidate.confirmPassword || ''}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>*Telefone:</Form.Label>
          <InputMask
            mask="(99)9999-9999"
            className="form-control"
            type="text"
            id="phone"
            onChange={handleChange}
            name="phone"
            value={form.phone || ''}
            placeholder="Informe o seu telefone"
            invalid={formValidate.phone}
            disabled={loading}
          />
          <Form.Control.Feedback type="text">
            {formValidate.phone || ''}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>*Endereço:</Form.Label>
          <Form.Control
            invalid={formValidate.address}
            disabled={loading}
            type="text"
            id="address"
            value={form.address || ''}
            onChange={handleChange}
            name="address"
            placeholder="Insira seu endereço"
          />
          <Form.Control.Feedback type="text">
            {formValidate.address || ''}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>*Uf:</Form.Label>
          <Select
            fullWidth
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
          <Form.Control.Feedback type="text">
            {formValidate.uf || ''}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>*Cidade:</Form.Label>
          <Select
            fullWidth
            native
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
          <Form.Control.Feedback type="text">
            {formValidate.city || ''}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>*Cep:</Form.Label>
          <InputMask
            mask="99999-999"
            className="form-control"
            type="text"
            id="zip_code"
            onChange={handleChange}
            name="zip_code"
            value={form.zip_code || ''}
            placeholder="Informe o seu telefone"
            invalid={formValidate.zip_code}
            disabled={loading}
          />
          <Form.Control.Feedback type="text">
            {formValidate.zip_code || ''}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Complemento:</Form.Label>
          <Form.Control
            invalid={formValidate.complement}
            disabled={loading}
            type="text"
            id="complement"
            value={form.complement || ''}
            onChange={handleChange}
            name="complement"
            placeholder="Informe o seu complemento"
          />
        </Form.Group>
      </Row>
      {isNotValid() || loading ? (
        <SDesabledButton
          type="button"
          disabled={isNotValid()}
          onClick={insertData}
        >
          Cadastrar
        </SDesabledButton>
      ) : (
        <SButton type="button" disabled={isNotValid()} onClick={insertData}>
          {loading ? (
            <>
              <Loading />
            </>
          ) : (
            'Cadastrar'
          )}
        </SButton>
      )}
    </SForm>
  )
}

export default SignUp
