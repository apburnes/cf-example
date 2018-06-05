'use strict';

const chai = require('chai');
const expect = chai.expect;

describe('Example', function() {
  describe('Tests Set One', function() {
    it('should be true', function() {
      expect(true).to.be.true;
    });

    it('should be string', function() {
      expect('true').to.be.a('string');
    });
  });

  describe('Tests Set Two', function() {
    it('should be true', function() {
      expect(true).to.be.true;
    });

    it('should be string', function() {
      expect('true').to.be.a('string');
    });
  });
});
