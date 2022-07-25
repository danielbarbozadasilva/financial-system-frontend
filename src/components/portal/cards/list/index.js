import { Card } from 'react-bootstrap'
import { SCard } from './styled'
import { navigate } from '@reach/router'

const CardFinancial = (props) => {
  const { name, description, bvmf, count } = props.item
  return (
    <div className={'container-fluid'}>
      <SCard style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Descrição: {description}</Card.Text>
          <Card.Text className="m-3 text-muted">BVMF: {bvmf}</Card.Text>
          <Card.Text className="m-3 text-muted">Adiquirido: {count}</Card.Text>
          <Card.Link onClick={() => navigate(`/signin`)}>Acessar</Card.Link>
        </Card.Body>
      </SCard>
    </div>
  )
}
export default CardFinancial
