/**
 * Setup Debug logger with winston.
 * Logger levels:
 *  error: 0
 *  warn: 1
 *  info: 2
 *  verbose: 3
 *  debug: 4
 *  silly: 5
 */

const consoleTransport = require('./transports/console');
const defaults = require('./defaults');
const fileRotateTransport = require('./transports/fileRotator');
const fs = require('fs-extra');

const winston = require('winston');


/**
 * Logger constructor
 */
function Logger(name, options) {
  const opts = Object.assign({ label: name }, defaults, options);
  const transports = [];

  if (opts.console) {
    transports.push(consoleTransport(opts));
  }

  if (opts.loggerFolderPath) {
    fs.ensureDirSync(opts.loggerFolderPath);
    transports.push(fileRotateTransport(opts.loggerFolderPath, opts));
  }

  if (transports.length < 1) {
    throw new Error('Console or file transport must be activated');
  }

  return new winston.Logger({
    exitOnError: opts.exitOnError,
    transports,
  });
}

/**
 * Expose Logger
 */
module.exports = Logger;
