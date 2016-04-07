import React, {Component, PropTypes} from 'react'
import Counter from '../components/Counter'
import {
  version,
  dependencies,
  homepage,
  devDependencies
} from '../../package.json'

import * as counterActions from '../actions/counter'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import style from './Home.css'

class Home extends Component {

  getVersion () {
    return version
  }

  render () {
    const {counter, increment} = this.props
    const deps = Object.keys(dependencies)
      .map((dep, i) => <li key={i}><b>{dep}</b> : {dependencies[dep]}</li>)
    const devDeps = Object.keys(devDependencies)
      .map((dep, i) => <li key={i + 10}><b>{dep}</b> : {devDependencies[dep]}</li>)

    return (
      <section className={style.section}>
        <div>
          <h1>
            <a href={homepage}>react-kickstart</a>
          </h1>
          <h2 className={style.h2} >version {version}</h2>
          With 💖by <a href='https://twitter.com/vesparny'>@vesparny</a>
          <Counter
            count={counter}
            onIncrement={increment}
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

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

function mapStateToProps ({counter}) {
  return {counter}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(counterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
