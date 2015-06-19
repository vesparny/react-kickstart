import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './dumb/Header';


export default class App {

  render() {
    const { pathname } = this.props;

    return (
      <div>
        <Header />
        <RouteHandler {...this.props} key={pathname} />
      </div>
    );
  }
}
