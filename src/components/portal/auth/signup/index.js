import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as moment from 'moment'
import { Col, Form } from 'react-bootstrap'
import InputMask from 'react-input-mask'
import { Select } from '@material-ui/core'
import ufCityFile from '../../../../util/state-city.json'
import { SForm, SRow, SFormGroup, STextForm, SButton } from '../styled'
import Loading from '../../../loading/form/index'
import {
  fieldValidate,
  isNotValid
} from '../../../../util/validations/form-signup'

const SignUp = ({ submit }) => {
  const registered = useSelector((state) => state.auth.registered)
  const loading = useSelector((state) => state.auth.loading)
  const [uf, setUf] = useState([])
  const [city, setCity] = useState([])
  const [formValidate, setFormValidate] = useState({})
  const [form, setForm] = useState({})

  const handleChange = (props) => {
    const { value, name } = props.target
    const message = fieldValidate(name, value, form)
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

  useEffect(() => {
    if (registered) {
      setForm({})
    }
  }, [registered])

  const submitForm = () => {
    const nform = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      gender: form.gender,
      birth_date: form.birth_date,
      password: form.password,
      phone: form.phone,
      address: form.address,
      uf: form.uf,
      city: form.city,
      zip_code: form.zip_code,
      complement: form.complement
    }
    submit(nform)
  }

  return (
    <SForm autoComplete="off">
      <STextForm>Cadastre-se</STextForm>
      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*Nome:</Form.Label>
          <Form.Control
            autoFocus
            disabled={loading}
            type="text"
            id="name"
            value={form.name || ''}
            onChange={handleChange}
            name="name"
            placeholder="Insira o seu nome"
            invalid={!!formValidate.name}
          />
          <Form.Control.Feedback type="text">
            {formValidate.name || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*E-mail:</Form.Label>
          <Form.Control
            disabled={loading}
            type="email"
            id="email"
            value={form.email || ''}
            onChange={handleChange}
            name="email"
            placeholder="Insira seu email"
            invalid={!!formValidate.email}
          />
          <Form.Control.Feedback type="text">
            {formValidate.email || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
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
            disabled={loading}
            invalid={!!formValidate.cpf}
          />
          <Form.Control.Feedback type="text">
            {formValidate.cpf || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
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
            <option value="selecione">selecione</option>
            <option value="M">M</option>
            <option value="F">F</option>
          </Select>
          <Form.Control.Feedback type="text">
            {formValidate.gender || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>

      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*Data de nascimento:</Form.Label>
          <Form.Control
            disabled={loading}
            type="date"
            id="birth_date"
            value={
              form.birth_date
                ? moment(form.birth_date)
                    .format('YYYY/MM/DD')
                    .replaceAll('/', '-')
                : ''
            }
            onChange={handleChange}
            name="birth_date"
            invalid={!!formValidate.birth_date}
          />
          <Form.Control.Feedback type="text">
            {formValidate.birth_date || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Senha:</Form.Label>
          <Form.Control
            disabled={loading}
            type="password"
            id="password"
            value={form.password || ''}
            onChange={handleChange}
            name="password"
            placeholder="Insira a sua senha"
            invalid={!!formValidate.password}
          />
          <Form.Control.Feedback type="text">
            {formValidate.password || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Confirmar senha:</Form.Label>
          <Form.Control
            disabled={loading}
            type="password"
            id="confirmPassword"
            value={form.confirmPassword || ''}
            onChange={handleChange}
            name="confirmPassword"
            placeholder="Confirme a sua senha"
            invalid={!!formValidate.confirmPassword}
          />
          <Form.Control.Feedback type="text">
            {formValidate.confirmPassword || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>

      <SRow>
        <SFormGroup as={Col}>
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
        </SFormGroup>

        <SFormGroup as={Col}>
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
        </SFormGroup>

        <SFormGroup as={Col}>
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
            <option value="selecione">selecione</option>
            {uf?.map(({ name, uf }, i) => (
              <option key={i} value={uf}>
                {uf}
              </option>
            ))}
          </Select>
          <Form.Control.Feedback type="text">
            {formValidate.uf || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>

      <SRow>
        <SFormGroup as={Col}>
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
            <option value="selecione">selecione</option>
            {city?.map((city, i) => (
              <option key={i} value={city}>
                {city}
              </option>
            ))}
          </Select>
          <Form.Control.Feedback type="text">
            {formValidate.city || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
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
        </SFormGroup>

        <SFormGroup as={Col}>
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
        </SFormGroup>
      </SRow>
      {loading ? (
        <Loading />
      ) : (
        <SButton
          type="button"
          onClick={submitForm}
          disabled={isNotValid(form, formValidate)}
        >
          Cadastrar
        </SButton>
      )}
    </SForm>
  )
}

export default SignUp
