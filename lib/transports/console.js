/**
 * Created by freddyrondon on 6/9/17.
 */

const defaults = require('./defaults');
const winston = require('winston');

module.exports = (level, overrides) => {
  const config = Object.assign({}, defaults, overrides, { level });

  return new winston.transports.Console(config);
};