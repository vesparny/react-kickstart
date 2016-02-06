import React, {Component} from 'react'
import Counter from './Counter'
import {
    version,
    dependencies,
    homepage,
    devDependencies
  } from '../../package.json'
import style from './Home.css'

export default class Home extends Component {
  constructor () {
    super()
    this.increment = this.increment.bind(this)
    this.state = {
      counter: 0
    }
  }

  getVersion () {
    return version
  }

  increment () {
    this.setState({
      counter: this.state.counter += 1
    })
  }

  render () {
    const deps = Object.keys(dependencies)
      .map((dep, i) => <li key={i}><b>{dep}</b> : {dependencies[dep]}</li>)
    const devDeps = Object.keys(devDependencies)
      .map((dep, i) => <li key={i + 10}><b>{dep}</b> : {devDependencies[dep]}</li>)

    return (
      <section className={style.section}>
        <div>
          <h1>
            <a href={homepage}>&#9883; react-kickstart</a>
          </h1>
          <h2 className={style.h2} >version {version}</h2>
          With 💖by <a href='https://twitter.com/vesparny'>@vesparny</a>
          <Counter
            count={this.state.counter}
            onIncrement={this.increment}
          />
          <h3>Powered by:</h3>
          <div className={style.block}>
            <h4> DEPENDENCIES:</h4>
            <ul>{deps}</ul>
          </div>
          <div className={style.block}>
            <h4> DEV-DEPENDENCIES:</h4>
            <ul>{devDeps}</ul>
          </div>
        </div>
      </section>
    )
  }
}
