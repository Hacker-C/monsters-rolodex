import { Component } from 'react'
import './card.styles.css'

class Card extends Component {
  render() {
    const { id, name, email } = this.props.robot
    return (
      <div className='card-container'>
        <img src={`https://robohash.org/${id}?set=set1`} alt={id} />
        <h2 key={id}>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card
