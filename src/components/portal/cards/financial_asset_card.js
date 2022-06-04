import { Col, Card } from 'react-bootstrap'

const CardFinancial = (props) => {
  const { name, description, bvmf, current_price, quantity, image } = props.item
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Nome: {name}</Card.Title>
            <Card.Text>Descrição: {description}</Card.Text>
            <Card.Text>BVMF: {bvmf}</Card.Text>
            <Card.Text>Preço: {current_price}</Card.Text>
            <Card.Text>Quantidade: {quantity}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
export default CardFinancial
