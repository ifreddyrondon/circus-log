# circus-log
Lightweight logger with a simple pass-through configuration for use with winston logging library for Node.js applications

[![travis build](https://img.shields.io/travis/ifreddyrondon/circus-log.svg?style=flat-square)](https://travis-ci.org/ifreddyrondon/circus-log)
[![codecov coverage](https://img.shields.io/codecov/c/github/ifreddyrondon/circus-log.svg?style=flat-square)](https://codecov.io/gh/ifreddyrondon/circus-log)
[![version](https://img.shields.io/npm/v/circus-log.svg?style=flat-square)](https://www.npmjs.com/package/circus-log)
[![downloads](https://img.shields.io/npm/dm/circus-log.svg?style=flat-square)](https://npm-stat.com/charts.html?package=circus-log&from=2017-05-27)
[![MIT License](https://img.shields.io/npm/l/circus-log.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Installation

```
npm install circus-log
```

## Usage
```js
/**
 * Module dependencies
 */
const logger = require('circus-log');

/**
 * Create a new instance of logger with a nama
 */
const log = logger('myapp');

/**
 * Log some message.
 */
log.info('Log a custom message.');
// 1497824286227 - info: Log a custom message - [name:myapp] [level:INFO]

/**
 * Log some message with tags for Kibana.
 */
log.info('Log a custom message.', { foo: 'faa' });
// 1497824309882 - info: Log a custom message - [name:myapp] [foo:faa] [level:INFO]

/**
 * Log some error
 */
log.error(err, { foo: 'faa' });
// 1497824315738 - error: Error: Cannot find module 'foo' - [name:myapp] [foo:faa] [level:ERROR]
```

## API

### logger([name], [options])
- `name`: String - You can specify a name for your logger instance when creating it.
- `options`: Object - You can specify a override settings for the instance when creating it.

### logger#info(message[, tags])
### logger#warn(message[, tags])
### logger#error(message[, tags])
### logger#verbose(message[, tags])
### logger#debug(message[, tags])
### logger#silly(message[, tags])

- `message`: String | Error - A message or error to be logged.
- `tags`: Object - An optional object of tags for Kibana.


## Transport

Support for multiple transports. The Console Transport will be activated by default.

### Console Transport
Instance of winston.transports.Console [Options](https://github.com/winstonjs/winston/blob/master/docs/transports.md#console-transport)

### Daily rotate file
Disable by default, you must provide the `loggerFolderPath` option to activate. [Options](https://github.com/winstonjs/winston/blob/master/docs/transports.md#console-transport)