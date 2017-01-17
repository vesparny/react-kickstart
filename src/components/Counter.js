import React, {PropTypes, Component} from 'react'
import s from 'styled-components'
import Button from './Button'
import colors from '../colors'

const Wrapper = s.div`
  color: ${colors.green}
`

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
      <Wrapper>
        <h1>Count: {count}</h1>
        <p>Click the button to increment the counter</p>
        <Button onClick={boundClick}>Increment</Button>
      </Wrapper>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired
}

export default Counter
