import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // prettier-ignore
      monsters: [
        {id: 'oodsd3', name: 'Frunk'},
        {id: 's1d2sd', name: 'Jude'},
        {id: 'g234df',name: 'Andrew'},
        {id: 'abccx3',name: 'Tom'}
      ],
      searchString: '',
      img: 'old'
    }
  }
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(dog => {
        this.setState(() => {
          return { img: dog.message }
        })
      })
  }

  // TIP 优化1：抽离出函数，这样 rerender 的时候就不会再声明一次这个函数了
  onInputChange = event => {
    const searchString = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchString }
    })
  }

  render() {
    // TIP 优化2：提高可读性
    const { searchString, monsters } = this.state
    const { onInputChange } = this
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchString)
    })

    return (
      <div className='App'>
        <input className='search' placeholder='search monsters' onChange={onInputChange} />
        {filteredMonsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    )
  }
}

export default App
