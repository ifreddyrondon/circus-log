/**
 * Created by freddyrondon on 6/11/17.
 */

const { describe, it } = require('mocha');
const { expect } = require('chai');
const logger = require('./../lib');
const winston = require('winston');

describe('circus log', () => {
  it('Should have defined specific properties', () => {
    expect(logger).to.have.property('createInstance');
    expect(logger).to.have.property('getInstance');
  });

  describe('createInstance', () => {
    it('createInstance should return a winston client', () => {
      const result = logger.createInstance();
      expect(result).to.be.instanceOf(winston.Logger);
    });
  });

  describe('getInstance', () => {
    it('getInstance should return a winston client', () => {
      const result = logger.getInstance();
      expect(result).to.be.instanceOf(winston.Logger);
    });
  });
});
