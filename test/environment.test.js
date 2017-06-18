/**
 * Module dependencies
 */
const { expect } = require('chai');
const { after, beforeEach, describe, it } = require('mocha');
const { stdout, stderr } = require('test-console');

const decache = require('decache');
let Logger = require('./../lib');

const realEnv = Object.assign({}, process.env);

/**
 * Tests
 */

describe('environments', () => {
  describe('not production', () => {
    beforeEach(() => {
      process.env.NODE_ENV = '';
      decache('./../lib');
      Logger = require('./../lib');
    });

    it('Level should be debug if env is not production', () => {
      const log = new Logger();
      expect(log.transports.console.level).to.equal('debug');
    });

    it('Should log verbose if env is not production', () => {
      const log = new Logger();
      const output = stdout.inspectSync(() => {
        log.verbose('Testing...');
      });
      expect(output[0]).contains('verbose: Testing... - [level:VERBOSE]');
    });
  });

  describe('production', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
      decache('./../lib');
      Logger = require('./../lib');
    });

    it('Level should be warn if env is production', () => {
      const log = new Logger();
      expect(log.transports.console.level).to.equal('warn');
    });

    it('Should not log verbose if env is production', () => {
      const log = new Logger();
      const output = stdout.inspectSync(() => {
        log.verbose('Testing...');
      });
      expect(output).to.be.empty;
    });

    it('Should log error if env is production', () => {
      const log = new Logger();
      const output = stderr.inspectSync(() => {
        log.error('Testing...');
      });
      expect(output[0]).contains('error: Testing... - [level:ERROR]');
    });
  });

  after(() => {
    process.env = realEnv;
  });
});
