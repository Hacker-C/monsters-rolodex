import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { useState, useEffect } from 'react'
import './App.css'

// TIP functional component
const App = () => {
  const [searchString, setsearchString] = useState('')
  const [robots, setRobots] = useState([])
  const [filteredRobots, setFilteredRobots] = useState(robots)
  console.log('render')
  useEffect(() => {
    // BUGFIX: http https 请求问题，前后端全部改为 http
    // TIP 函数副作用，影响了外部的状态，依赖值为空，说明无论如何只执行一次，即使本组件 rerender 了
    fetch('http://124.222.44.115:3001')
      .then(_ => _.json())
      .then(data => {
        setRobots(data.data)
      })
  }, [])

  useEffect(() => {
    // TIP 只有当这个函数的依赖参数变了，这里面的代码才会执行，利用函数的副作用
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchString)
    })
    setFilteredRobots(filteredRobots)
  }, [searchString, robots])

  const onInputChange = event => {
    const inputString = event.target.value.toLowerCase()
    setsearchString(inputString)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Robots Rolodex</h1>
      <SearchBox
        className='search-box'
        placeholder='search robots'
        onChangeHandler={onInputChange}
      />
      <CardList robots={filteredRobots} />
      <footer>
        &copy;MurphyChen 2022 |{' '}
        <a href='https://beian.miit.gov.cn/' target='_blank' rel='noreferrer'>
          湘ICP备 2022004296号
        </a>
      </footer>
    </div>
  )
}

export default App
