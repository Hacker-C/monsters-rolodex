import Card from '../card/card.component'
import './card-lis.styles.css'

const CardList = ({ robots }) => {
  return (
    <div className='card-list-container'>
      {robots.map(robot => (
        <Card robot={robot} key={robot.id} />
      ))}
    </div>
  )
}

export default CardList
