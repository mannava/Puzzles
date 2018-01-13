'use strict';

const assert = require('assert');
const request = require('request');
const getPromiseTotalChars = require('../src/roman-numerals');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('TotalCharsSaved', function() {
    it('should return total chars saved for the given file.', function() {
      return getPromiseTotalChars().then(result => {
        assert.deepEqual(result, '743');
      });
    });

    it('should reject the promise if there is an error', () => {
      sinon.stub(request, 'get').yields('sinon reject', { statusCode: 201 });
      return getPromiseTotalChars().then(result => {
        assert.deepEqual(result, '743');
      }).catch(err => assert(err, 'sinon reject'));
    });
});