/**
 * Created by freddyrondon on 6/9/17.
 */

const winston = require('winston');

module.exports = opts => new winston.transports.Console(opts);
