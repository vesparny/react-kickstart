import React from 'react';
import { Link } from 'react-router';

export default class Header {

  render() {

    return (
      <header>
        <nav className="clearfix">
          <div>
            <Link
              to="home"
              activeClassName="is-active"
              className="button py2 button-transparent"
            >
              Home
            </Link>
            <Link
              to="counter"
              activeClassName="is-active"
              className="button py2 button-transparent"
            >
              Counter
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
