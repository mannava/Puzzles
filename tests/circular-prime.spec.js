'use strict';

const FindCircularPrimes = require('../src/circular-prime');
const assert = require('assert');

var results = [ '2',
  '3',
  '5',
  '7',
  '11',
  '13',
  '17',
  '31',
  '37',
  '71',
  '73',
  '79',
  '97',
  '113',
  '131',
  '197',
  '199',
  '311',
  '337',
  '373',
  '719',
  '733',
  '919',
  '971',
  '991',
  '1193',
  '1931',
  '3119',
  '3779',
  '7793',
  '7937',
  '9311',
  '9377',
  '11939',
  '19391',
  '19937',
  '37199',
  '39119',
  '71993',
  '91193',
  '93719',
  '93911',
  '99371' ]
//}

describe('FindCircularPrimes', function() {
    it('should return circular primes for million', function() {
      assert.deepEqual(FindCircularPrimes(100000), results);
    });

    it('should throw error on NaN or negative numbers', () => {
        assert(FindCircularPrimes(NaN), 'Invalid Input.');
        assert(FindCircularPrimes(-1), 'Invalid Input.');
    });
});