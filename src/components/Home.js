// @flow
import React, {Component} from 'react'
import {Box, Flex} from 'reflexbox'
import s from 'styled-components'
import Counter from '../components/Counter'
import {
  version,
  dependencies,
  homepage,
  devDependencies
} from '../../package.json'
import colors from '../colors'

const Wrapper = s(Box)`
  color: ${colors.black}
  text-align: center
`

const Column = s(Box)`
  color: ${colors.grey}
`
const Container = s(Flex)`
  width: 60%
  margin: 0 auto
`

class Home extends Component {
  state: {
    counter: number
  }
  state = {
    counter: 0
  }
  increment () {
    this.setState((prevState, props) => {
      const count = prevState.counter += 1
      return {
        counter: count
      }
    })
  }

  render () {
    const {counter} = this.state
    const deps = Object.keys(dependencies)
      .map((dep, i) => <li key={i}><b>{dep}</b> : {dependencies[dep]}</li>)
    const devDeps = Object.keys(devDependencies)
      .map((dep, i) => <li key={i + 10}><b>{dep}</b> : {devDependencies[dep]}</li>)

    return (
      <Wrapper>
        <div>
          <h1>
            <a href={homepage}>react-kickstart</a>
          </h1>
          <h2 className>version {version}</h2>
          With  💙 by <a href='https://twitter.com/vesparny'>@vesparny</a>
          <p>
            <a href='https://david-dm.org/vesparny/react-kickstart' title='Dependency status'><img alt='Dependency status' src='https://david-dm.org/vesparny/react-kickstart/status.svg' /></a>
            <a href='https://david-dm.org/vesparny/react-kickstart#info=devDependencies' title='Dev dependency status'><img alt='Dev dependency status' src='https://david-dm.org/vesparny/react-kickstart/dev-status.svg' /></a>
          </p>
          <Counter
            count={counter}
            onIncrement={() => this.increment()}
          />
          <h3>Powered by:</h3>
          <Container wrap>
            <Column sm={12} md={6}>
              <h4> DEPENDENCIES:</h4>
              <ul>{deps}</ul>
            </Column>
            <Column sm={12} md={6}>
              <h4> DEV-DEPENDENCIES:</h4>
              <ul>{devDeps}</ul>
            </Column>
          </Container>
        </div>
      </Wrapper>
    )
  }
}

export default Home
