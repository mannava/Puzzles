//Added to Github (https://github.com/mannava/Puzzles)
//Circular primes  Problem 35
//Finding circular prime numbers between 1 to 1000000

const Mocha = require('mocha');
const mocha = new Mocha();
var assert = require('assert');

mocha.suite.emit('pre-require', this, 'solution', mocha);


function FindCircularPrimes(userInput) {

    var cPrime = {}, result = [];
    if (isNaN(userInput) || userInput <= 1) {
        console.log("Invalid Input.");
    }

    for (var sequenceNum = 2; sequenceNum <= userInput; sequenceNum++) {
        //var sequenceNum = 23;
        if (isPrime(sequenceNum) && !cPrime[sequenceNum]) {
            rotateNumberAndChk(sequenceNum.toString());
        }
    }
    //console.log(Object.keys(cPrime))
    result = Object.keys(cPrime).filter(function (item, idx) {
        return cPrime[item] === 1;
    });

    return result;


    //Checking passed input is prime or not and returning the flag.
    function isPrime(curInput) {
        var sqrtNum = Math.floor(Math.sqrt(curInput))

        for (var sequenceNum = 2; sequenceNum <= sqrtNum; sequenceNum++) {
            if (curInput % sequenceNum === 0) {
                return false;
            }
        }

        return true;
    }

    //Rotating each digit until it matches back to the original string.
    //Each rotation checking whether its prime or not.
    //if all iterations satifies then setting cPrime flag true
    function rotateNumberAndChk(primeNum) {

        var primeNumTemp = primeNum,
            circularPrime,
            primeObj = {},
            flag = true;

        primeObj[primeNum] = primeNum;

        do {

            primeNum = primeNum.substr(1, primeNum.length - 1) + primeNum.charAt(0);
            circularPrime = parseInt(primeNum);
            if (!isPrime(circularPrime)) {
                flag = false; // circular prime failed flag
                cPrime[circularPrime] = 0; // failed while circulating.
            } else {
                primeObj[circularPrime] = 1;// all primes
            }

        } while (primeNumTemp != primeNum)


        if (flag) {
            for (var key in primeObj) {
                cPrime[key] = 1;
            }
        }
    }

}

console.log(FindCircularPrimes("100000"));
var results = ['2',
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
    '99371']
//}

describe('FindCircularPrimes', function () {
    it('should return circular primes for million', function () {
        assert.deepEqual(FindCircularPrimes(100000), results);
    });
});
mocha.run();
