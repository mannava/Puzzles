'use strict';

const assert = require('assert');
const digitsPowerSum = require('../src/digits-sum');

var expectedOutput = [
  '81',
  '512',
  '2401',
  '4913',
  '5832',
  '17576',
  '19683',
  '234256',
  '390625',
  '614656',
  '1679616',
  '17210368',
  '34012224',
  '52521875',
  '60466176',
  '205962976',
  '612220032',
  '8303765625',
  '10460353203',
  '24794911296',
  '27512614111',
  '52523350144',
  '68719476736',
  '271818611107',
  '1174711139837',
  '2207984167552',
  '20047612231936',
  '72301961339136',
  '248155780267521',
  '3904305912313344'
];

describe('digitsPowerSum', () => {
    it('should match the output with results for respective digits sum', () => {
        assert.deepEqual(digitsPowerSum(), expectedOutput);
    });
});