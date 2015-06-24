import React, { PropTypes, Component } from 'react';
import './Counter.css';

export default class Counter extends Component{

  static propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired
  };

  increment() {
    // maybe I do something here
    // for the moment I just call the callback passed from the parent
    return this.props.onIncrement();
  }

  render() {
    const { count } = this.props;

    return (
      <div className="Counter">
        <h1 className="h1 h0-responsive caps mt4 mb0 regular">Count: {count}</h1>
        <p className="h3">Click the button to increment the counter</p>
        <a
          onClick={::this.increment}
          className="h3 button button-big mb4"
        >
          Increment
        </a>
      </div>
    );
  }
}
