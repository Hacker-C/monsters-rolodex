import { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // prettier-ignore
      robots: [],
      searchString: '',
      img: 'old'
    }
  }
  componentDidMount() {
    // BUGFIX: http https 请求问题，已解决，前后端全部改为 http
    fetch('http://124.222.44.115:3001')
      .then(_ => _.json())
      .then(data => {
        this.setState(() => {
          return {
            robots: data.data
          }
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
    const { searchString, robots } = this.state
    const { onInputChange } = this
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchString)
    })

    return (
      <div className='App'>
        <h1 className='app-title'>Robots Rolodex</h1>
        <SearchBox
          className='search-box'
          placeholder='search robots'
          onChangeHandler={onInputChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App
