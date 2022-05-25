import React, { useState, useEffect } from 'react'
import { Container, Alert, Row, Col, Form, Button, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
import { signInAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SignIn = (props) => {
  const dispatch = useDispatch()
  const [hasError, setHasError] = useState(false)
  const error = useSelector((state) => state.auth.error)
  const loading = useSelector((state) => state.auth.loading)

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (props) => {
    const { value, name } = props.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = (event) => {
    event.preventDefault()
    dispatch(signInAction(form))
  }

  const isNotValid = () => form.email.length === 0 || form.password.length === 0

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
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                disabled={loading}
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={form.email || ''}
                placeholder="Informe o seu E-mail"
              />
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
            <Button
              data-testing-id="funnel-survey-select_category-next"
              type="button"
              disabled={isNotValid()}
              size="sm"
              onClick={submitForm}
            >
              {loading ? (
                <>
                  <Spinner size="sm" animation="border" role="status">
                    {' '}
                    <span className="visually-hidden">Carregando...</span>
                  </Spinner>
                </>
              ) : (
                'Entrar'
              )}

              <i className="icon-angle-right ml-2" />
            </Button>
            <SColFooter>
              Não tem Cadastro? <Link to="/signup">Cadastre-se</Link>
            </SColFooter>
          </SForm>
        </Col>
      </Row>
    </Container>
  )
}
export default SignIn

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
