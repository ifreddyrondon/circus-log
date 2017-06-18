/**
 * Module dependencies
 */
const { expect } = require('chai');
const { describe, it } = require('mocha');
const winston = require('winston');
const Logger = require('./../lib');
const { stdout, stderr } = require('test-console');

/**
 * Tests
 */
describe('Logger', () => {
  it('Should have an winston client', () => {
    const instance = new Logger();
    expect(instance).to.be.instanceOf(winston.Logger);
  });

  it('Should have an "info" method', () => {
    const instance = new Logger();
    expect(instance).to.have.property('info');
  });

  it('Should have an "warn" method', () => {
    const instance = new Logger();
    expect(instance).to.have.property('warn');
  });

  it('Should have an "error" method', () => {
    const instance = new Logger();
    expect(instance).to.have.property('error');
  });

  it('Should have an "verbose" method', () => {
    const instance = new Logger();
    expect(instance).to.have.property('verbose');
  });

  it('Should have an "debug" method', () => {
    const instance = new Logger();
    expect(instance).to.have.property('debug');
  });

  it('Should have an "silly" method', () => {
    const instance = new Logger();
    expect(instance).to.have.property('silly');
  });

  it('Should log a message', () => {
    const log = new Logger();
    const output = stdout.inspectSync(() => {
      log.info('Testing...');
    });
    expect(output[0]).contains('info: Testing... - [level:INFO]');
  });

  it('Should log a message with name', () => {
    const log = new Logger('TEST');
    const output = stdout.inspectSync(() => {
      log.info('Testing with name...');
    });
    expect(output[0]).contains('info: Testing with name... - [name:TEST] [level:INFO]');
  });

  it('Should log a message with tags', () => {
    const log = new Logger();
    const output = stdout.inspectSync(() => {
      log.info('Testing with flags...', { test: true });
    });
    expect(output[0]).contains('info: Testing with flags... - [test:true] [level:INFO]');
  });

  it('Should log an error', () => {
    const log = new Logger();
    const output = stderr.inspectSync(() => {
      try {
        const foo = require('foo');
        foo();
      } catch (err) {
        log.error(err);
      }
    });
    expect(output[0]).contains('error:  - [message:Cannot find module \'foo\']');
  });
});
