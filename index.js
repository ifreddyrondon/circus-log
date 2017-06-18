/**
 * Module dependencies
 */
const Logger = require('./lib');

/**
 * Expose logger factory
 */
module.exports = (name, options = {}) => new Logger(name, options);
