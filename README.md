# echo-middleware
[![npm version](https://badge.fury.io/js/echo-middleware.svg)](https://www.npmjs.com/package/echo-middleware)
[![Node.js CI/Test](https://action-badges.now.sh/KcYoung1997/echo-middleware?workflow=Node.js-CI/Test)](https://github.com/KcYoung1997/echo-middleware/actions?query=workflow%3A%22Node.js+CI%2FTest%22)

Echos back the content recieved in a web request.

## Install

```bash
npm i echo-middleware
```

## Usage/Compatibility

The servers below have been tested for compatibility and have [examples](https://github.com/KcYoung1997/echo-middleware/tree/master/examples):

- [connect](https://www.npmjs.com/package/connect) ([example](https://github.com/KcYoung1997/echo-middleware/blob/master/examples/connect/index.js))
- [express](https://www.npmjs.com/package/express) ([example](https://github.com/KcYoung1997/echo-middleware/blob/master/examples/express/index.js))
- [koa](https://www.npmjs.com/package/koa) ([example](https://github.com/KcYoung1997/echo-middleware/blob/master/examples/koa/index.js))

## Example

Below example shows the request headers and response body from a request made to the [connect example](https://github.com/KcYoung1997/echo-middleware/blob/master/examples/connect/index.js) server, using [HTTPie](https://httpie.io/).

```bash
$ http -p Hb localhost:8080/echo
GET /echo HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:8080
User-Agent: HTTPie/2.3.0

GET /echo HTTP/1.1
host: localhost:8080
user-agent: HTTPie/2.3.0
accept-encoding: gzip, deflate
accept: */*
connection: keep-alive
```

## Tests

Run the test suite:

```bash
# Clean install dependencies
npm ci

# Run tests
npm test
```