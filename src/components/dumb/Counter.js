import React from 'react';
import './Counter.styl';

export default class Counter {

  render() {
    const { count, handleClick } = this.props

    return (
      <div className="Counter px2 py4">
        <h1 className="h1 h0-responsive caps mt4 mb0 regular">Count: {count}</h1>
        <p className="h3">Click the button to increment the counter</p>
        <a
          onClick={handleClick}
          className="h3 button button-big mb4"
        >
          Increment
        </a>
      </div>
    );
  }
}
