# react-kickstart
**just another react + webpack boilerplate**

[![Build Status](https://travis-ci.org/vesparny/react-kickstart.svg)](https://travis-ci.org/vesparny/react-kickstart)
[![Test Coverage](https://img.shields.io/codeclimate/coverage/github/vesparny/react-kickstart.svg)](https://codeclimate.com/github/vesparny/react-kickstart)
[![Dependency status](https://david-dm.org/vesparny/react-kickstart/status.svg)](https://david-dm.org/vesparny/react-kickstart "Dependency status")
[![Dev dependency status](https://david-dm.org/vesparny/react-kickstart/dev-status.svg)](https://david-dm.org/vesparny/react-kickstart#info=devDependencies "Dev dependency status")


## Minimal
It contains just the necessary to get started with React, I decided to not include flux libraries or other complicated stuff like server-rendering in here.

This projects aims to be a starting point for your React projects, and a way to learn it for newcomers.

See a [working demo](http://vesparny.github.io/react-kickstart/)

## Features
* webpack and webpack-dev-server setup for development (with hot-module-replacement), and for production (with sourcemaps generation for both css and js bundles)
* clear separation between [smart and dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* styles for dumb components directly loaded from inside the component file
* basic routing setup with react-router (you most likely need routing in your app)
* code written is ES6 syntax and transpiled with [babeljs](https://babeljs.io/)
* unit tests ([mocha](http://mochajs.org/) + [chai](http://chaijs.com/)) examples with both [shallow-rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) and [jsdom](https://github.com/tmpvar/jsdom)
* code coverage generation using [istanbul](https://gotwarlost.github.io/istanbul/)
* eslint and jscs configuration

## Usage

**Clone this repository**
```
git clone https://github.com/vesparny/react-kickstart.git
```

**Start the application in dev mode with hot-module-replacement**
```
npm start
```

**Run tests**
```
npm test
```

**Build for production (`/dist/` folder)**
```
npm run build
```

**Run jscs and eslint**
```
npm run jscs
npm run eslint
```

**Generate code coverage report (`/coverage/` folder)**
```
npm run test:cov
```

## Contributing

PR and issues reporting are always welcome :)

## License

See LICENSE file

## Changelog

See CHANGELOG.md file

## Inspiration

* [react-starterify](https://github.com/Granze/react-starterify) by [@granze](https://github.com/Granze)
* [smart  and dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) article by [@gaearon](https://github.com/gaearon)
