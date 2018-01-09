//Roman numerals   Problem 89
//Added to Github (https://github.com/mannava/Puzzles)

const Mocha = require('mocha');
const mocha = new Mocha();
var assert = require('assert');

mocha.suite.emit('pre-require', this, 'solution', mocha);

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
        request(url, function (error, response, body) {
            if (response.statusCode === 200) {
                resolve(response.body);
            } else {
                reject(error);
            }

        });
    });
}

//Extracting  roman number and passing for comparision
function getPromiseTotalChars() {
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

readRomanTxtFile().then(function (response) {
    var romansDataArr = response.split("\n"), len = 0;
    for (var i = 0; i < romansDataArr.length; i++) {
        len += savedChars(i, romansDataArr[i]);
    }

    console.log(" TOTAL NO OF CHARS SAVED : ", len);
    return len;
}, function (error) {
    console.error("Failed ", error);
});

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


describe('TotalCharsSaved', function () {
    it('should return total chars saved for the given file.', function () {
        //assert.deepEqual(getPromiseTotalChars(), '743');
    });
});
mocha.run();

