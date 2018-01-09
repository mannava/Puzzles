<span><b><u>Circular primes  Problem Number 35 </u></b></span>
&nbsp;
&nbsp;&nbsp;(<a href="https://projecteuler.net/problem=35" target="_blank"><b>Circular primes</b></a>)<br>
<div>

<b>Sample Output :</b>
[ '2',
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
  '99371',
  '193939',
  '199933',
  '319993',
  '331999',
  '391939',
  '393919',
  '919393',
  '933199',
  '939193',
  '939391',
  '993319',
  '999331' ]
<br><br>
<b>Total_Time_Taken:</b> 1732.074ms
</div>
<div>
  <b>Reason for Selection :</b>
  Circular Prime problem is very interesting to attempt.
</div>
<br>
<div>
  <b>References Used :</b>
   For this perticular problem, clear understanding of the problem and white boarding,  Breaking the problem into smaller chunks, Getting algorithmic steps before starting the implemention is enough to solve.
   
   <ul>
  <li>Iterate the loop from 1 to 1000000</li>
  <li>While iterating check each number whether its prime or not</li>
  <li>if its prime pass on to rotateAncheckCircularPrime method</li>
  <li>At the rotateAndcheckCircularPrime method store passed primenumber into an object and circulate the primenumber in each iteration again checking whether circular number is prime or not</li>
  <li>if its not prime setting flag that number is not a circular prime</li>
  <li>if its primenumber store in object, which will help to maintain visited primes</li>
</ul>
</div>
<div>
  <b>Actual time spent :</b>
      It took more than hour to analyze/design steps and execute program.
</div>
==================================================================================
<br><br>
<span><b><u>Roman Numberals  Problem Number 89 </u></b></span>
&nbsp;
&nbsp;&nbsp;(<a href="https://projecteuler.net/problem=89" target="_blank"><b>Roman Numberals</b></a>)<br>
<div>
<br>
<b>Sample Output :</b>
<br>TOTAL NO.OF CHARS SAVED : 743
<br><br>
<b>Total_Time_Taken:</b> 14.449ms
</div><br>
<div>
  <b>Reason for Selection :</b>
  Roman Numberals, Worked on partial peice of this program earlier. Since already knew some of  of the logic. Felt its good to attempt.
</div>
<br>
<div>
  <b>References Used :</b>
   Understanding of the problem,  Breaking the problem into smaller chunks, Getting algorithmic steps before starting.
   Search on google for roman numbers & how to make http request on coderpad to read roman numbers file.Nothing specific.
   <ul>
  <li>Reading Roman numbers text file using http request</li>
  <li>Passing response to find savedCharacter for each roman number.</li>
  <li>Converting each romanNumeral to digits format at Roman2Number method</li>
  <li>Once converted digit passing to digit2Roman method to covert back to Roman</li>
  <li>Finally returning back to savedChars method and finding how many chars totally saved for the entire file</li>
</ul>
</div><br>


<div>
  <b>Actual time spent :</b>
      It took around 45 mins to an hour to execute the program.
</div>
<br><br>
==================================================================================
<br><br>
<span><b><u>Digit Power Sum  Problem Number 119 </u></b></span>&nbsp;
&nbsp;&nbsp;(<a href="https://projecteuler.net/problem=119" target="_blank"><b>Digit Power Sum</b></a>)<br><br><br>
<div>

<b>Sample Output :</b>
a1 =  81,
a2 =  512,
a3 =  2401,
a4 =  4913,
a5 =  5832,
a6 =  17576,
a7 =  19683,
a8 =  234256,
a9 =  390625,
a10 =  614656,
a11 =  1679616,
a12 =  17210368,
a13 =  34012224,
a14 =  52521875,
a15 =  60466176,
a16 =  205962976,
a17 =  612220032,
a18 =  8303765625,
a19 =  10460353203,
a20 =  24794911296,
a21 =  27512614111,
a22 =  52523350144,
a23 =  68719476736,
a24 =  271818611107,
a25 =  1174711139837,
a26 =  2207984167552,
a27 =  20047612231936,
a28 =  72301961339136,
a29 =  248155780267521,
a30 =  3904305912313344
<br><br>
<b>Total_Time_Taken:</b> 4.44ms
</div><br>
<div>
  <b>Reason for Selection :</b>
  After spending 1 hour analyzing the problem. Want to claim the time without giving up. 
</div>
<br>
<div>
  <b>References Used :</b>
   Spent time. Finally following reference gave hints. After going though couple of times
   same time doing white boarding helps to analyze the problem.
   <a href="https://stackoverflow.com/questions/10286999/number-equal-to-the-sum-of-powers-of-its-digits" target='_blank'>Stackoverflow Reference Link</a>
   <ul>
  <li>Iterate first 30 digits, Find each digit 0 to 9 power value </li>
  <li>Convert power to individual digits and calculate Sum using sumOfDigits method </li>
  <li>if sum of the digits matches to iterate value then storing into resultObj</li>
  <li>sorting the result object gives the accurate a30 value</li>
</ul>
</div><br>


<div>
  <b>Actual time spent :</b>
      It took more than hour to analyze/design steps 
      executing of program took only 30 mins.
</div>
