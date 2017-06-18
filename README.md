# circus-log
Lightweight logger with a simple pass-through configuration for use with winston logging library for Node.js applications

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
