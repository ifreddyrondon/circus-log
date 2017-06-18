/**
 * Implicit defaults.
 * (OPTIONS and OVERRIDES)
 *
 * @type {Object}
 * @api private
 */

const env = require('is-prod');
const json2tags = require('./utils/json2tags');

/**
 * Custom Log Format
 */
function formatter(options) {
  const level = options.level;
  const message = options.message ? options.message : '';
  options.meta = options.meta || {};
  if (options.label) {
    options.meta.name = options.label;
  }
  options.meta.level = level.toUpperCase();

  return `${options.timestamp()} ${level}: ${message} - ${json2tags(options.meta)}`;
}

/**
 * Expose defaults
 */
module.exports = {
  colorize: true,
  console: true,
  exitOnError: !env.isProduction(),
  formatter,
  handleExceptions: true,
  humanReadableUnhandledException: true,
  level: env.isProduction() ? 'warn' : 'debug',
  loggerFolderPath: null,
  timestamp: () => Date.now(),
};
