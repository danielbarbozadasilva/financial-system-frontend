import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { signInAction } from '../../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import {
  SForm,
  SColFooter,
  STextForm,
  SButtonSignIn,
  STextLink
} from '../styled'
import Loading from '../../../components/loading'
import InputMask from 'react-input-mask'

const SignIn = (props) => {
  const dispatch = useDispatch()
  const [hasError, setHasError] = useState(false)
  const error = useSelector((state) => state.auth.error)
  const loading = useSelector((state) => state.auth.loading)

  const [form, setForm] = useState({
    cpf: '',
    password: ''
  })

  const handleChange = (props) => {
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = async (event) => {
    event.preventDefault()
    dispatch(await signInAction(form))
  }

  const isNotValid = () => form.cpf.length === 0 || form.password.length === 0

  useEffect(() => {
    setHasError(error.length > 0)
  }, [error])

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SForm>
            <STextForm>Login</STextForm>
            <Form.Group className="mb-3">
              <Form.Label>CPF:</Form.Label>
              <InputMask
                mask="999.999.999-99"
                disabled={false}
                maskChar=" "
                value={form.cpf || ''}
                onChange={handleChange}
              >
                {() => (
                  <Form.Control
                    disabled={loading}
                    type="text"
                    id="cpf"
                    value={form.cpf || ''}
                    onChange={handleChange}
                    name="cpf"
                    placeholder="Informe o seu cpf"
                  />
                )}
              </InputMask>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                disabled={loading}
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={form.password || ''}
                placeholder="Informe a sua senha"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Lembrar credenciais" />
            </Form.Group>
            <SButtonSignIn
              type="button"
              disabled={isNotValid()}
              onClick={submitForm}
            >
              {loading ? (
                <>
                  <Loading />
                </>
              ) : (
                'Entrar'
              )}

              <i className="icon-angle-right ml-2" />
            </SButtonSignIn>
            <SColFooter>
              Não tem Cadastro?{' '}
              <STextLink href="/signup">Cadastre-se</STextLink>
            </SColFooter>
          </SForm>
        </Col>
      </Row>
    </Container>
  )
}
export default SignIn
