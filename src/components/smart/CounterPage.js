import React, { Component } from 'react';
import Counter from '../dumb/Counter';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment(){
    this.setState({
      counter: this.state.counter+=1
    });
  }

  render() {
    return (
      <Counter
        count={this.state.counter}
        handleClick={::this.increment}
      />
    );
  }
}
