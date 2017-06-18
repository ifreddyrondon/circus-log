/**
 * Created by freddyrondon on 6/11/17.
 */

const { describe, it } = require('mocha');
const { expect } = require('chai');
const logger = require('./..');


describe('Module logger', () => {
  it('Should export a function.', () => {
    expect(logger).to.be.a('function');
  });

  it('Should throw an error if not transport defined', () => {
    const fcn = () => logger(null, { console: false });
    expect(fcn).to.throw(Error, 'Console or file transport must be activated');
  });
});
