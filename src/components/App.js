import React from 'react';
import { RouteHandler } from 'react-router';


export default class App {

  render() {
    const { pathname } = this.props;

    return (
      <div>
        <RouteHandler {...this.props} key={pathname} />
      </div>
    );
  }
}
