//Circular primes  Problem 
//Finding circular prime numbers between 1 to 1000000
//The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are //themselves prime.
//There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
//How many circular primes are there below one million?
'use strict';

function FindCircularPrimes(userInput) {

  var cPrime = {},result=[]; 
  if (isNaN(userInput) || userInput <= 1) {
    return "Invalid Input.";
  }

  for (var sequenceNum = 2; sequenceNum <= userInput; sequenceNum++) {
    //var sequenceNum = 23;
    if (isPrime(sequenceNum) && !cPrime[sequenceNum]) {
      rotateNumberAndChk(sequenceNum.toString());
    }
  }
  //console.log(Object.keys(cPrime))
  result = Object.keys(cPrime).filter(function(item,idx){
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

module.exports = FindCircularPrimes;


