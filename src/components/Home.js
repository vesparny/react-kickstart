import React, { Component } from 'react'
import Counter from '../components/Counter'
import {
  version,
  dependencies,
  homepage,
  devDependencies
} from '../../package.json'

class Home extends Component {
  constructor () {
    super()
    this.increment = this.increment.bind(this)
    this.state = {
      counter: 0
    }
  }

  increment () {
    this.setState((prevState, props) => {
      const count = prevState.counter += 1
      return {
        counter: count
      }
    })
  }

  getVersion () {
    return version
  }

  render () {
    const {counter} = this.state
    const deps = Object.keys(dependencies)
      .map((dep, i) => <li key={i}><b>{dep}</b> : {dependencies[dep]}</li>)
    const devDeps = Object.keys(devDependencies)
      .map((dep, i) => <li key={i + 10}><b>{dep}</b> : {devDependencies[dep]}</li>)

    return (
      <section className='center w-60 tc cf'>
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
            onIncrement={this.increment}
          />
          <h3>Powered by:</h3>
          <div className='fl w-50'>
            <h4> DEPENDENCIES:</h4>
            <ul>{deps}</ul>
          </div>
          <div className='fl w-50'>
            <h4> DEV-DEPENDENCIES:</h4>
            <ul>{devDeps}</ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
