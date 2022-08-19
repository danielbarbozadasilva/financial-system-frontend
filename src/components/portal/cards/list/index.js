import { Card } from 'react-bootstrap'
import { SCard } from './styled'

const CardFinancial = (props) => {
  const { name, description, bvmf, count } = props.item
  return (
    <div className={'container-fluid'}>
      <SCard style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-muted">Descrição: {description}</Card.Text>
          <Card.Text className="text-muted">BVMF: {bvmf}</Card.Text>
          <Card.Text className="text-muted">
            Adiquirido por: {count} cliente(s)
          </Card.Text>
        </Card.Body>
      </SCard>
    </div>
  )
}
export default CardFinancial
