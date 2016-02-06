# react-kickstart
**just another react + webpack boilerplate**

[![Build Status](https://travis-ci.org/vesparny/react-kickstart.svg)](https://travis-ci.org/vesparny/react-kickstart)
[![codecov.io](https://codecov.io/github/vesparny/react-kickstart/coverage.svg?branch=master)](https://codecov.io/github/vesparny/react-kickstart?branch=master)
[![Dependency status](https://david-dm.org/vesparny/react-kickstart/status.svg)](https://david-dm.org/vesparny/react-kickstart "Dependency status")
[![Dev dependency status](https://david-dm.org/vesparny/react-kickstart/dev-status.svg)](https://david-dm.org/vesparny/react-kickstart#info=devDependencies "Dev dependency status")

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Minimal
It contains just the necessary to get started with React, I decided not to include flux libraries or other complicated stuff like server-rendering in here.

This projects aims to be a starting point for your React projects, and a way to learn it for newcomers.

See a [working demo](http://vesparny.github.io/react-kickstart/)

## Features
* webpack + hot-module-replacement ([babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) + [react-transform-hmr](https://github.com/gaearon/react-transform-hmr))
* Stateless functional components
* [css-modules](https://github.com/css-modules/css-modules/) + [PostCSS](https://github.com/postcss/postcss)
* basic routing setup with react-router (you most likely need routing in your app)
* [babeljs](https://babeljs.io/)
* unit tests ([tape](https://github.com/substack/tape/) + [sinon](http://sinonjs.org/)) examples with both [shallow-rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) and [jsdom](https://github.com/tmpvar/jsdom)
* code coverage with [isparta](https://github.com/douglasduteil/isparta)
* development and production build

## Usage

**Clone this repository**
```
git clone https://github.com/vesparny/react-kickstart.git
```

**Install**
```
npm install
```

**Start the application in dev mode with hot-module-replacement**
```
npm start
```

**Run tests**
```
npm test
```

**Build for production**
```
npm run build
```

**Run production version**
```
npm run build:start
```

**Run code style check with standard**
```
npm run check-style
```

**Generate code coverage report**
```
npm run test:cov
```

## Contributing

PR and issues reporting are always welcome :)

## License

See LICENSE file

## Changelog

See CHANGELOG.md file
