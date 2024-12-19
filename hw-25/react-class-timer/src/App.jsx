import { Component } from 'react'
import Timer from "./components/Timer/Timer"

class App extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      showTime: true
    }
  }
  
  handleToggle = () => {
    this.setState((prevState) => {
      return {
        showTime: !prevState.showTime
      }
    })
  }

  render() {
      return (
    <>
      <main className="container">
            {this.state.showTime ? <Timer /> : null}
            <button onClick={this.handleToggle}>Toggle timer</button>
      </main>
    </>
  )
  }

}

export default App
