import React, { useState } from 'react'
import { Container, Alert, Row, Col, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

const SignIn = (props) => {
  const [show, setShow] = useState(true)

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SForm>
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <div>
                <strong>OPS !!! </strong> Aconteceu um erro.
              </div>
              <small>Verifique CPF e senha</small>
            </Alert>
            <h2 tag="h4" className="text-login">
              Login
            </h2>
            <Form.Group className="mb-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="cpf" placeholder="Digite o seu CPF" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Lembrar credenciais" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
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
  margin-top: 80px;
`
