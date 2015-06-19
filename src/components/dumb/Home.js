import React from 'react';
import {
    version,
    dependencies,
    homepage,
    devDependencies
  } from '../../../package.json';

export default class Home {

  render() {

    const deps = Object.keys(dependencies).map((dep, i) => <li key={i}><b>{dep}</b> : {dependencies[dep]}</li>);
    const devDeps = Object.keys(devDependencies).map((dep, i) => <li key={i + 10}><b>{dep}</b> : {devDependencies[dep]}</li>);

    return (
      <section className="container px2 py3">
      <div className="clearfix mxn2 center">
        <h1>
          <a href={homepage}>&#9883; react-kickstart</a>
        </h1>
        <h2>version {version}</h2>
        <a href={homepage}>GitHub</a>
        <br />
        <a href="https://twitter.com/vesparny">@vesparny</a>
        <h3>Powered by:</h3>
        <div className="sm-col sm-col-6 px2">
          <h4> DEPENDENCIES:</h4>
          <ul className="list-reset">
              {deps}
          </ul>
        </div>
        <div className="sm-col sm-col-6 px2">
          <h4> DEV-DEPENDENCIES:</h4>
          <ul className="list-reset">
              {devDeps}
          </ul>
        </div>


      </div>
      </section>

    );
  }
}
