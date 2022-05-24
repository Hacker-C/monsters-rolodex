import { Component } from 'react'

import Card from '../card/card.component'
import './card-lis.styles.css'

class CardList extends Component {
  render() {
    const { robots } = this.props
    return (
      <div>
        <div className='card-list-container'>
          {robots.map(robot => (
            <Card robot={robot} key={robot.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default CardList
