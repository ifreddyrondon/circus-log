/**
 * Created by freddyrondon on 6/9/17.
 */

const DailyRotateFile = require('winston-daily-rotate-file');
const defaults = require('./defaults');
const path = require('path');

module.exports = (logPath, overrides) => {
  const filename = path.join(logPath, defaults.filesName);
  const config = Object.assign({}, defaults, overrides, { filename });

  return new DailyRotateFile(config);
};
