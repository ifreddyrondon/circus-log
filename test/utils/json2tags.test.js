/**
 * Module dependencies
 */
const { describe, it } = require('mocha');
const { expect } = require('chai');
const json2tags = require('./../../lib/utils/json2tags');

/**
 * Tests
 */
describe('json2tags', () => {
  it('Should return an empty string', () => {
    const tags = json2tags();
    expect(tags).to.be.a('string');
    expect(tags).to.be.equal('');
  });

  it('Should convert a given json to tags', () => {
    const tags = json2tags({ test: true });
    expect(tags).to.be.a('string');
    expect(tags).to.be.equal('[test:true]');
  });

  it('Should concat all given tags', () => {
    const tags = json2tags({ test: true, tags: true });
    expect(tags).to.be.a('string');
    expect(tags).contains('[test:true] [tags:true]');
  });

  it('Should print composed objects given as values tags', () => {
    const tags = json2tags({ test: { foo: 'faa' } });
    expect(tags).to.be.a('string');
    expect(tags).contains('[test: [foo:faa]]');
  });

  it('Should print null when null is given as value', () => {
    const tags = json2tags({ test: null });
    expect(tags).to.be.a('string');
    expect(tags).contains('[test:null');
  });

  it('Should throw an error if a null is passed', () => {
    expect(() => json2tags(null)).to.throw;
  });
});