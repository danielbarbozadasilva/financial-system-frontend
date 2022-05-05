import React from 'react'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa'
import { MdLocationOn, MdMailOutline, MdPhone } from 'react-icons/md'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = (props) => {
  return (
    <footer>
      <Row>
        <Col>
          <Col className="socialNetworks">
            <h3 className="titleSocialNetworks">Redes sociais</h3>
            <Col className="icons-socialNetworks">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare className="iconeFooter" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare className="iconeFooter" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+5521992690225"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsappSquare className="iconeFooter" />
              </a>
            </Col>
          </Col>
        </Col>
        <Col>
          <Col>
            <img className="imageFooter" alt="imagem do footer" />
            <h3 className="name-footer">Developed by Daniel Barboza</h3>
            <h3 className="name-footer">
              Copyright © 2022 - Todos os direitos reservados
            </h3>
          </Col>
        </Col>
        <Col className="info">
          <Col className="address">
            <h6>
              <MdLocationOn className="iconInfo" />
              Endereço: Rua Gomes Yunes, 225
            </h6>
          </Col>
          <Col className="email">
            <h6>
              <MdMailOutline className="iconInfo" />
              E-mail: contato@financial.com
            </h6>
          </Col>

          <Col className="phone">
            <h6>
              <MdPhone className="iconInfo" />
              Telefone: +55 (21) 2245-0548
            </h6>
          </Col>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
