import './card.styles.css'

const Card = ({ robot }) => {
  const { id, name, email } = robot
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${id}?set=set1`} alt={id} />
      <h2 key={id}>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card
