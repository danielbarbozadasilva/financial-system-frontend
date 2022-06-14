import { Card } from 'react-bootstrap'
import { SCardImg, SCard, SButton } from './ElementsCards'
import { navigate } from '@reach/router'

const CardFinancial = (props) => {
  const { name, description, bvmf, current_price, quantity, image } = props.item
  return (
    <div>
      <SCard>
        {image?.length > 0 ? <SCardImg src={image} /> : ''}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Descrição: {description}</Card.Text>
          <Card.Text>BVMF: {bvmf}</Card.Text>
          <Card.Text>Preço: {current_price}</Card.Text>
          <Card.Text>Quantidade: {quantity}</Card.Text>
          <SButton onClick={() => navigate(`/signin`)}>
            Inscreva-se
          </SButton>
        </Card.Body>
      </SCard>
    </div>
  )
}
export default CardFinancial
