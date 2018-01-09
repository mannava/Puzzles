//Digit Power Sum - 119
//Added to Github (https://github.com/mannava/Puzzles)
//Iterating the sums and comparing with exponencial power of its sum.
//when it matches pushing to result object.
var Mocha = require('mocha');
var mocha = new Mocha();
var assert = require('assert');

mocha.suite.emit('pre-require', this, 'solution', mocha);

function digitsPowerSum() {
    var pow = 2, cnt = 1, resultObj = {};
    for (var i = 2; cnt <= 30; i++) {
        for (var j = 2; j <= 9; j++) {

            pow = Math.pow(i, j);
            if (i === sumOfTheDigits(pow)) {
                //console.log(cnt, " ",pow,"-------------------------",i ,"pow", j);
                resultObj[pow] = i + "^" + j;
                cnt++;
            }
        }
    }
    var result = Object.keys(resultObj).sort(function (a, b) {
        return a - b;
    })
    cnt = 1;
    for (var key in resultObj) {
        console.log("a" + cnt + " = ", result[cnt - 1]);
        cnt++
    }

    return result;

}

// Returns sums of the digits
function sumOfTheDigits(num) {
    var sum = 0, num = num.toString();
    for (var i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    return sum;
}

//console.time("TOTAL_TIME_TAKEN");
//digitsPowerSum();
runTest();

//console.timeEnd("TOTAL_TIME_TAKEN");

function runTest() {

//Unit test cases.
    var output = ['81',
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
        '3904305912313344'];


    describe('digitsPowerSum', function () {
        it('should match the output with results for respective digits sum', function () {
            assert.deepEqual(digitsPowerSum(), output);
        });
    });
    mocha.run();
}
