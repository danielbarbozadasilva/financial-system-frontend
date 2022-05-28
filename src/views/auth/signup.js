import React, { useEffect, useState } from 'react'
import * as moment from 'moment'
import { signUpAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Select } from '@material-ui/core'
import ufCityFile from '../../util/state-city.json'
import InputMask from 'react-input-mask'
import styled from 'styled-components'

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
    fieldValidate(name, value)
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
        regex = /[^0-9.]/
        if (filtraCpf.test(valor)) {
          menssage += 'CPF inválido'
        } else if (valor.trim() === '') {
          menssage += 'Não pode ser vazio!'
        } else if (valor.length < 11) {
          menssage += 'CPF inválido!'
        }
        break

      case 'gender':
        if (value === 'gender') {
          message += 'Selecione uma sexo!'
        }
        break

      case 'birthDate':
        var datanasc = value.replaceAll('-', '/')
        var dataAtual = moment().format('YYYY/MM/DD')

        if (!moment(datanasc).isValid) {
          message += 'Data inválida!'
        } else if (moment(datanasc).isAfter(dataAtual)) {
          message += 'Data maior que a atual!'
        }
        break

      case 'password':
        if (value.length < 6) {
          message += 'Acima de 6 caracteres!'
        }
        break

      case 'confirmPassword':
        if (form.password !== value) {
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
        regex = /\d/g
        if (regex.test(value)) {
          message += 'Não pode conter números!'
        } else if (value.trim() === '') {
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

      case 'cep':
        regex = /\d/g
        if (regex.test(value)) {
          message += 'Não pode conter números!'
        } else if (value.trim() === '') {
          message += 'Não pode ser vazio!'
        } else if (value.length !== 9) {
          message += 'Precisa ter 9 caracteres!'
        }
        break

      case 'complement':
        regex = /\d/g
        if (regex.test(value)) {
          message += 'Não pode conter números!'
        } else if (value.trim() === '') {
          message += 'Não pode ser vazio!'
        } else if (value.length <= 4) {
          message += 'Precisa ter mais que 4 caracteres!'
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
      'cep',
      'complement'
    ]
    const invalid = (label) =>
      !Object.keys(form).includes(label) || form[label].length === 0

    const validacoes =
      Object.values(formValidate).filter((item) => item !== '').length > 0

    return inputs.some((item) => invalid(item)) || validacoes
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

  const insertData = () => {
    const nform = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      gender: form.gender,
      birthDate: form.birthDate,
      password: form.password,
      confirmPassword: form.confirmPassword,
      phone: form.phone,
      address: form.address,
      uf: form.uf,
      city: form.city,
      cep: form.cep,
      complement: form.complement
    }

    dispatch(signUpAction(nform)).then(() => {
      setDisableInit(true)
    })
  }

  return (
    <SForm>
      <STextForm>Cadastre-se</STextForm>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label> Nome:</Form.Label>
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
          <Form.Label>E-mail:</Form.Label>
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
          <Form.Label>CPF:</Form.Label>
          <Form.Control
            invalid={formValidate.cpf}
            disabled={loading}
            type="text"
            id="cpf"
            value={form.cpf || ''}
            onChange={handleChange}
            name="cpf"
            placeholder="000.000.000-00"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Sexo</Form.Label>
          <Form.Select value={form.gender || ''} defaultValue="Selecione...">
            <option>M</option>
            <option>F</option>
          </Form.Select>
          <Form.Control.Feedback type="text">
            {formValidate.gender || ''}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Data de nascimento:</Form.Label>
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
          <Form.Label>Senha:</Form.Label>
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
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Confirmar senha:</Form.Label>
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
          <Form.Label>Telefone:</Form.Label>
          <InputMask
            mask="+55 (99) 9999-9999"
            disabled={false}
            maskChar=" "
            value={form.phone || ''}
            onChange={handleChange}
          >
            {() => (
              <Form.Control
                invalid={formValidate.phone}
                disabled={loading}
                type="text"
                id="phone"
                value={form.phone || ''}
                onChange={handleChange}
                name="phone"
                placeholder="Informe o seu telefone"
              />
            )}
          </InputMask>
          <Form.Control.Feedback type="text">
            {formValidate.phone || ''}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Endereço:</Form.Label>
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
          <Form.Label>Uf:</Form.Label>
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
            <Form.Control.Feedback type="text">
              {formValidate.uf || ''}
            </Form.Control.Feedback>
          </Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Cidade:</Form.Label>
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
          <Form.Label>CEP:</Form.Label>
          <Form.Control
            invalid={formValidate.cep}
            disabled={loading}
            type="text"
            id="cep"
            value={form.cep || ''}
            onChange={handleChange}
            name="cep"
            placeholder="Informe o seu cep"
          />
          <Form.Control.Feedback type="text">
            {formValidate.cep || ''}
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
          <Form.Control.Feedback type="text">
            {formValidate.complement || ''}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button
        id="buttonFormClient"
        className={
          isNotValid() || loading ? 'style-button-disable' : 'style-button'
        }
        disabled={isNotValid()}
        size="md"
        block
        onClick={insertData}
      >
        {loading ? (
          <>
            <Spinner size="sm" color="light" /> Carregando...
          </>
        ) : (
          'Cadastrar'
        )}
      </Button>
    </SForm>
  )
}

export default SignUp

const SForm = styled(Form)`
  background-color: #fafafa;
  box-shadow: 0px 2px 15px 6px rgba(0, 0, 0, 0.11);
  padding: 50px;
  position: center;
  margin: 80px 0px;
`

const SColFooter = styled(Col)`
  line-height: 1.5;
  font-weight: 500;
  color: #000;
  padding: 20px 0;
`

const STextForm = styled.h2`
  line-height: 1.5;
  font-weight: 500;
  color: #000;
  padding: 20px 0;
`
