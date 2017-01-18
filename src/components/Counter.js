// @flow
import React, {Component} from 'react'
import s from 'styled-components'
import Button from './Button'
import colors from '../colors'

const Wrapper = s.div`
  color: ${colors.green}
`

type Props = {
  count: number,
  onIncrement: () => void,
}

class Counter extends Component {
  props: Props
  increment (text: string, e: any) : void {
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

export default Counter
