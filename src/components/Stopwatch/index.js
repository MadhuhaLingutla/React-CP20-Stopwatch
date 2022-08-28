// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    lapsedseconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  displaytimer = () => {
    const {lapsedseconds} = this.state

    const minutes = Math.floor(lapsedseconds / 60)
    const seconds = lapsedseconds - minutes * 60

    const stringifiedminutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedseconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedminutes}:${stringifiedseconds}`
  }

  start = () => {
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {lapsedseconds} = this.state
    this.setState(prevstate => ({lapsedseconds: prevstate.lapsedseconds + 1}))
  }

  stop = () => {
    clearInterval(this.timerID)
  }

  reset = () => {
    clearInterval(this.timerID)
    this.setState({lapsedseconds: 0})
  }

  render() {
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <h2 className="timer-heading">Timer</h2>
            </div>
            <h1 className="timer-display">{this.displaytimer()}</h1>
            <div className="controls-container">
              <button
                className="control-button start"
                type="button"
                onClick={this.start}
              >
                Start
              </button>
              <button
                className="control-button stop"
                type="button"
                onClick={this.stop}
              >
                Stop
              </button>
              <button
                className="control-button reset"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png"
            className="design-image"
            alt="design"
          />
        </div>
      </div>
    )
  }
}

export default Stopwatch
