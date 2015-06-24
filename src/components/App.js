import React, { PropTypes } from 'react';
import { RouteHandler } from 'react-router';

export default class App {

  static propTypes = {
    pathname: PropTypes.string.isRequired
  };

  render() {
    let { pathname } = this.props;

    return (
      <div>
        <RouteHandler {...this.props} key={pathname} />
      </div>
    );
  }
}
