//Roman numerals   Problem 
/*For a number written in Roman numerals to be considered valid there are basic rules which must be followed. Even though the rules allow some numbers to be expressed in more than one way there is always a "best" way of writing a particular number.
For example, it would appear that there are at least six ways of writing the number sixteen:
IIIIIIIIIIIIIIII
VIIIIIIIIIII
VVIIIIII
XIIIIII
VVVI
XVI
However, according to the rules only XIIIIII and XVI are valid, and the last example is considered to be the most efficient, as it uses the least number of numerals.
The 11K text file, roman.txt (right click and 'Save Link/Target As...'), contains one thousand numbers written in valid, but not necessarily minimal, Roman numerals; see About... Roman Numerals for the definitive rules for this problem.
Find the number of characters saved by writing each of these in their minimal form.
Note: You can assume that all the Roman numerals in the file contain no more than four consecutive identical units.
*/

'use strict';

var romanObj = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1
};

//Reading given roman numbers textfile.
function readRomanTxtFile() {
  var request = require('request');
  var url = "https://projecteuler.net/project/resources/p089_roman.txt";
  return new Promise(function (resolve, reject) {
    request.get(url, function (error, response, body) {
      if (response.statusCode === 200) {
        resolve(response.body);
      } else {
        reject(error);
      }

    });
  });
}

//Extracting  roman number and passing for comparision
function getPromiseTotalChars(){
    return readRomanTxtFile().then(function (response) {
      var romansDataArr = response.split("\n"), len = 0;
      for (var i = 0; i < romansDataArr.length; i++) {
        len += savedChars(i, romansDataArr[i]);
      }

      console.log(" TOTAL NO OF CHARS SAVED : ", len);
      return len;
    }, function (error) {
      console.error("Failed ", error);
    });
}


//Finding total charecters that saves.
function savedChars(cnt, romanStr) {
  var resultStr = '', len = 0;
  ;
  resultStr = Roman2Number(romanStr);
  len = romanStr.length - resultStr.length;
  
  //console.log(cnt , romanStr +" ", resultStr , " total chars saved :", len);
  return len;
}

//savedChars("MMMDLXVIIII");

//Converting passed Roman number to digital format.
function Roman2Number(romanChars) {
  var digit = 0, len = romanChars.length;
  for (var i = 0; i < romanChars.length; i++) {
    if (romanObj[romanChars[i]] < romanObj[romanChars[i + 1]]) {
      digit -= romanObj[romanChars[i]]
    } else {
      digit += romanObj[romanChars[i]]
    }
  }
  return digit2Roman(digit);
}

//Converting again back to passed digital number to Roman numeral.
function digit2Roman(digit) {
  var roman = '';
  for (var key in romanObj) {
    while (digit >= romanObj[key]) {
      roman += key;
      digit -= romanObj[key];
    }
  }
  return roman;
}

module.exports = getPromiseTotalChars;

