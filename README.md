# react-kickstart

> just another react + webpack boilerplate



[![Build Status](https://travis-ci.org/vesparny/react-kickstart.svg)](https://travis-ci.org/vesparny/react-kickstart)
[![Dependency status](https://david-dm.org/vesparny/react-kickstart/status.svg)](https://david-dm.org/vesparny/react-kickstart "Dependency status")
[![Dev dependency status](https://david-dm.org/vesparny/react-kickstart/dev-status.svg)](https://david-dm.org/vesparny/react-kickstart#info=devDependencies "Dev dependency status")
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

See a [working demo](http://vesparny.github.io/react-kickstart/)

## Features
* webpack + vanilla hot-module-replacement
* styling with [glamorous](https://github.com/paypal/glamorous)
* prettier and standardjs
* basic routing setup with react-router (you most likely need routing in your app)
* unit tests ([jest](http://facebook.github.io/jest/) and [enzyme](http://airbnb.io/enzyme))
* development and production build

## Usage

**Clone this repository**
```
git clone https://github.com/vesparny/react-kickstart.git
```

**Install**
```
npm install (or yarn install)
```

**Start the application in dev mode with hot-module-replacement**
```
npm run dev
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
npm run start
```

**RUN in production as a docker container**

**Create docker image**

```bash
docker build -t react-kickstart .
```

**RUN using docker-compose.yml**

```bash
docker-compose up -d
```

**Lint with standard**
```
npm run lint
```

## Contributing

PR and issues reporting are always welcome :)

## License

See LICENSE file

## Changelog

See CHANGELOG.md file
