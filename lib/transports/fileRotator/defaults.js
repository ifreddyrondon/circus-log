/**
 * Implicit File rotator transport defaults.
 * (OPTIONS and OVERRIDES)
 *
 * @return {Object} defaults configuration
 */

module.exports = {
  datePattern: 'yyyy-MM-dd',
  filesName: '.logger.log',
  maxFiles: 10,
  maxsize: 5242880,
  prepend: true,
};
