//Finding circular prime numbers between 1 to 1000000
function FindCircularPrimes(userInput) {

  var cPrime = {};

  if (isNaN(userInput) || userInput <= 1) {
    console.log("Invalid Input.");
  }

  for (var sequenceNum = 2; sequenceNum <= userInput; sequenceNum++) {
    //var sequenceNum = 993714;
    if (isPrime(sequenceNum) && !cPrime[sequenceNum]) {
      rotateNumberAndChk(sequenceNum.toString());
    }
  }

  console.log(Object.keys(cPrime));

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
        flag = false;
      } else {
        primeObj[circularPrime] = 1;
      }

    } while (primeNumTemp != primeNum)


    if (flag) {
      for (var key in primeObj) {
        cPrime[key] = 1;
      }
    }
  }

}

console.time("Tot_Time");
FindCircularPrimes("100000")
console.timeEnd("Tot_Time");
