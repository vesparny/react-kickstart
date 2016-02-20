import React, {PropTypes, Component} from 'react'
import style from './Counter.css'

export default class Counter extends Component {
  increment (text, e) {
    // maybe I'd like to do something here
    // for the moment I just call the callback passed from the parent
    return this.props.onIncrement()
  }

  render () {
    const {count} = this.props
    const boundClick = this.increment.bind(this, 'clicking')

    return (
      <div className={style.counter}>
        <h1>Count: {count}</h1>
        <p>Click the button to increment the counter</p>
        <button className={style.button} onClick={boundClick}>
          Increment
        </button>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired
}
