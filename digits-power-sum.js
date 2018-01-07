//Digit Power Sum - 119

//Iterating the sums and comparing with exponencial power of its sum.
//when it matches pushing to result object.
function digitsSum(){
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

}

// Returns all matched sums of the digits
function sumOfTheDigits(num){
  var sum = 0, num = num.toString();
  for(var i=0;i<num.length;i++){
    sum += parseInt(num[i]);
  }
  return sum;
}

console.time("TOTAL_TIME_TAKEN");
digitsSum();
console.timeEnd("TOTAL_TIME_TAKEN");
