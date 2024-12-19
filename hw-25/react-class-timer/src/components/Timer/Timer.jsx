import { Component } from 'react'

class Timer extends Component{
  constructor(props) {
    super(props)

    this.state = {
      date: new Date()
    }

    this.tick = this.tick.bind(this)
    this.timerId = null
  }

  componentDidMount() {
    // console.log('componentDidMount')
    this.timerId = setInterval(() => {
      // console.log('update')
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount')
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {

    return <div>
      Time: <p>{this.state.date.toLocaleTimeString()}</p>
      <button onClick={this.tick}>Update</button>
    </div>
  }
}

export default Timer