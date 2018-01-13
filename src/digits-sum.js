'use strict';

const digitsPowerSum = () => {
    var pow = 2, cnt=1, resultObj={};
    for(var i=2;cnt<=30;i++){
        for(var j=2;j<=9;j++){
            
            pow = Math.pow(i,j);
            if(i === sumOfTheDigits(pow)){
                //console.log(cnt, " ",pow,"-------------------------",i ,"pow", j);
                resultObj[pow] =  i +"^"+j;
                cnt++;
            }
        }
    }
    var result = Object.keys(resultObj).sort(function(a,b){
        return a-b;
    })
    cnt=1;
    for(var key in resultObj){
        console.log("a"+cnt+" = ", result[cnt-1]);
        cnt++
    }
    
    return result;
};

// Returns sums of the digits
function sumOfTheDigits(num){
    var sum = 0, num = num.toString();
    for(var i=0;i<num.length;i++){
        sum += parseInt(num[i]);
    }
    return sum;
}

module.exports = digitsPowerSum;