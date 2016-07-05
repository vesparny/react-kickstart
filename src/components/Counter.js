import React, { PropTypes, Component } from 'react'
import {StyleSheet, css} from 'aphrodite'
import colors from '../colors'

const styles = StyleSheet.create({
  counter: {color: colors.green},
  button: {border: 'none', padding: '1em'}
})

class Counter extends Component {

  increment (text, e) {
    // maybe I'd like to do something here
    // for the moment I just call the callback passed from the parent
    return this.props.onIncrement()
  }

  render () {
    const {count} = this.props
    const boundClick = this.increment.bind(this, 'clicking')

    return (
      <div className={css(styles.counter)}>
        <h1>Count: {count}</h1>
        <p>Click the button to increment the counter</p>
        <button className={css(styles.button)} onClick={boundClick}>
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

export default Counter
