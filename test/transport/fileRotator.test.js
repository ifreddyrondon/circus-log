/**
 * Module dependencies
 */
const chai = require('chai');
chai.use(require('chai-fs'));

const expect = chai.expect;

const { afterEach, describe, it } = require('mocha');
const Logger = require('./../../lib');
const moment = require('moment');
const path = require('path');
const rimraf = require('rimraf');

const fixturesDir = path.join(__dirname, 'fixtures');

/**
 * Tests
 */
describe('file rotator transport', () => {
  afterEach(() => {
    rimraf.sync(fixturesDir);
  });

  it('Instances transport should have dailyRotateFile and dir loggerFolderPath exist', () => {
    const log = new Logger(null, { loggerFolderPath: fixturesDir, console: false });
    expect(log.transports).have.property('dailyRotateFile');
    expect(fixturesDir).to.be.a.directory();
  });

  it('Should log into a file with date as prefix name', () => {
    const fileName = `${moment().format('YYYY-MM-DD')}.logger.log`;
    const log = new Logger(null, { loggerFolderPath: fixturesDir, console: false });
    log.debug('Test...');

    log.on('logging', (transport) => {
      if (transport.name === 'dailyRotateFile') {
        expect(transport.filename).is.equal(fileName);
      }
    });
  });
});
