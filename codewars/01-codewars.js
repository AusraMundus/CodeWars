// Write a function "greet" that returns "hello world!"

function greet () {
    return 'hello world!'
}
console.log(greet());

console.log('--------------------------------')

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

function bmi (weight, height) {
    const bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return `Underweight`;
    } else if (bmi <= 25) {
            return `Normal`;
        } else if (bmi <= 30) {
                return `Overweight`;
            } else if (bmi > 30) {
                    return `Obese`;
    }
}

console.log(bmi(80, 1.80));

console.log('--------------------------------')

/*
Even or Odd
*/

function evenOrOdd(number) {
    if (number % 2 === 0 || number === 0 && number.isInteger) {
      return 'Even';
    } else {
      return 'Odd';
  }
    }
  console.log(evenOrOdd(0));
  console.log(evenOrOdd(20));
  console.log(evenOrOdd(5));

  // Ternary
  function evenOrOdd (number) {
    return number % 2 === 0 || number === 0 ? 'Even' : 'Odd';
  }
  console.log(evenOrOdd(0));
  console.log(evenOrOdd(100));
  console.log(evenOrOdd(19));

console.log('--------------------------------')

console.clear();

/*
Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.
*/

function reverseWords(str){
    return str.split(' ').reverse().join(' '); 
    // string.split - pavercia i array; array.reverse - apvercia array; array.join - sujungia array elementus ir pavercia i stringa
  }
console.log(reverseWords("hello world!"));
console.log(reverseWords("yoda doesn't speak like this"));


console.log('--------------------------------')

// su FOR
function reverseWords(str){
    let reverse = [];
    let words = str.split(" ");
    for(let i = words.length - 1; i >= 0; i--){
      reverse.push(words[i]); 
      
    }
    return reverse.join(" ")
  }
  console.log(reverseWords("hello world!"));

  // kitas budas
  function reverseWords(str){
    let splatArr = str.split(' ');
    let reverseArr = splatArr.reverse();
    let rejoinedArr = reverseArr.join(' ');
    return  rejoinedArr;
  }
  console.log(reverseWords("hello world!"));


  console.log('--------------------------------')

/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
Apsvarstykite avių masyvą / sąrašą, kurių vietoje gali trūkti kai kurių avių. Mums reikia funkcijos, kuri suskaičiuotų masyve esančių avių skaičių (tiesa reiškia, kad yra).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

const array1 = [true,  true, true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true, false, true ];

  function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) { // masyvo reiksmems prasukti
        if (arrayOfSheep[i] === true && arrayOfSheep[i] > 0) { // jei true ir daugiau uz 0, skaiciuok - count++
            count++;         
        }
    }
    return count; // grazink suskaiciuota
  }

 console.log(countSheeps(array1));

 // kitas budas

 function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }
  console.log(countSheeps(array1));

 console.log('--------------------------------')

/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

 function addLength(str) {
    let words = str.split(' '); // stringas i array
    let result = []; // sakom, kad reikes array
    for (let i = 0; i < words.length; i++) { //prasukam loopa, nes array
      let word = words[i]; // imam kiekviena zodi
      let len = word.length; // nustatom zodzio ilgi
      result.push(word + ' ' + len); // sudedam i array zodis + jo ilgis
    }
    return result; // grazinam rezultata
  }
  
  console.log(addLength('hello world how u doing'));

  console.log('--------------------------------')

  /*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
  */
  
function summation (num) {
    let total = 0;
      for(let i = 1; i <= num; i++) { 
        total = total + i; // total += i
      }
      return total;
  }
  console.log(summation(8));

  
console.log('--------------------------------')

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

function past(h, m, s) {
    const milisec = (h * 60 * 60 + m * 60 + s) * 1000; // 1s=1000ms
    return milisec;
} 
console.log(past(0,1,1));

// ARROW function
const past2 = (h, m, s) => (3600 * h + 60 * m + s) * 1000;

console.log(past2(1,1,1)); 


console.log('--------------------------------')

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { //prasukam array reiksmes
    if (arr[i] > 0) { // isrenkam didesnes uz nuli
      sum += arr[i]; // sum = sum + arr[i]
    }
  }
  return sum; // gauname teigiamu skaiciu suma
}
console.log(positiveSum([1, -4, 7, 12]));

console.log('--------------------------------')

/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	                  Output

"Jabroni"	              "Patron Tequila"
"School Counselor"	    "Anything with Alcohol"
"Programmer"	          "Hipster Craft Beer"
"Bike Gang Member"	    "Moonshine"
"Politician"	          "Your tax dollars"
"Rapper"	              "Cristal"
anything else	          "Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/


function getDrinkByProfession(param) {
  param = param.toLowerCase(); // suvienodinti visas stringo raides i mazasias

  switch (param) { // patikrinti visus variantus ir kai atranda tinkama, grazinti reikiama atsakyma
    case 'jabroni':
      return 'Patron Tequila';

    case 'school counselor':
      return 'Anything with Alcohol';

    case 'programmer':
      return 'Hipster Craft Beer';

    case 'bike gang member':
      return 'Moonshine';

    case 'politician':
      return 'Your tax dollars';

    case 'rapper':
      return 'Cristal';

    default: // jei nera ne vieno tinkamo, grazinti kita atsakyma
      return 'Beer';
  }
}


console.log(getDrinkByProfession('JabrOni'));           // OK
console.log(getDrinkByProfession('jabrOni'));           // OK
console.log(getDrinkByProfession('scHOOl counselor'));
console.log(getDrinkByProfession('prOgramMer'));        // OK
console.log(getDrinkByProfession('bike ganG member'));
console.log(getDrinkByProfession('poLiTiCian'));        // OK
console.log(getDrinkByProfession('rapper'));            // OK
console.log(getDrinkByProfession('pundit'));            // OK
console.log(getDrinkByProfession('Pug'));               // OK

console.log('--------------------------------')

/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {
  let oppositeNumber = -number;
  return oppositeNumber;
}

console.log(opposite(2));
console.log(opposite(-56.2));
console.log(opposite(0));

console.log('--------------------------------')

/*
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!
*/

function arrayMadness(a, b) {
  let reduceArrayA = a.reduce((t, n) => t + n**2, 0);
  let reduceArrayB = b.reduce((t, n) => t + n**3, 0);
  if (reduceArrayA > reduceArrayB) {
    return true;
    } else {
    return false;
    }
// return reduceArrayA > reduceArrayB;
}
console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]));

// su FOR

function arrayMadness(a, b) {
  let firstArray = 0;
  let secondArray = 0;
    for (let i = 0; i < a.length; i++) {
      firstArray+= a[i]**2;
    }
    for(let i = 0; i < b.length; i++) {
      secondArray += b[i]**3;
    }
    return firstArray > secondArray ? true : false; // ternary
  }
console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]));

console.log('--------------------------------')
/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/
function correctPolishLetters (string) {
  let stringFixed = string
    .replaceAll('ą', 'a')
    .replaceAll('ć', 'c')
    .replaceAll('ę', 'e')
    .replaceAll('ł', 'l')
    .replaceAll('ń', 'n')
    .replaceAll('ó', 'o')
    .replaceAll('ś', 's')
    .replaceAll('ź', 'z')
    .replaceAll('ż', 'z');
  return stringFixed;
}
console.log(correctPolishLetters('Jędrzej Błądziński'));
console.log(correctPolishLetters('Lech Wałęsa'));
console.log(correctPolishLetters('Maria Skłodowska-Curie'));
console.log(correctPolishLetters('Władysław Reymont'));

// su global

function correctPolishLetters (string) {
  return string
  .replace(/ł/g, 'l')
  .replace(/ą/g, 'a')
  .replace(/ć/g, 'c')
  .replace(/ę/g, 'e')
  .replace(/ń/g, 'n')
  .replace(/ó/g, 'o')
  .replace(/ś/g, 's')
  .replace(/ź/g, 'z')
  .replace(/ż/g, 'z')
}
console.log(correctPolishLetters('Władysław Reymont'));

//sudetingas su global

function correctPolishLetters(string) {
  const polishLetters = /[ąćęłńóśźż]/g; // G kodo pabaigoje rodo, kad ši reguliarioji išraiška yra visuotinė ir atitiks visus nurodytos eilutės raidžių atvejus.
  const replacements = {
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z'
  }
  return string.replace(polishLetters, match => replacements[match]);
}
console.log(correctPolishLetters('Maria Skłodowska-Curie'));
console.log(correctPolishLetters('Władysław Reymont'));

console.log('--------------------------------')

/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
*/


function otherAngle(a, b) {
  return 180 - a - b;
}
console.log(otherAngle(30, 60)); // 90

console.log('--------------------------------')


/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1

*/

function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {    // str prasukam ir patikrinam
    if (str[i] === letter) {      // jei randam letter
      count++;      // suskaiciuojam, kiek yra letter
    }
  }
  return count;      // grazinam letter skaiciu (jei nera tokios letter, grazinam 0)
}
console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('', 'z'));

// su .split
function strCount(str, letter) {
  return str.split(letter).length-1;
}
console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('', 'z'));

console.log('--------------------------------')

/*
Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/

function enough(cap, on, wait) {
  if (on + wait <= cap) {
    return 0;
    } else {
      return (on + wait) - cap;
    }
}
console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));

// ternary
function enough(cap, on, wait) {
  return (on + wait <= cap) ? 0 : on + wait - cap;
}

console.log('--------------------------------')

console.clear();

/*
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.
*/

function findDifference(a, b) {
    let volumeA = (a[0]*a[1]*a[2]);
    let volumeB = (b[0]*b[1]*b[2]);
    return Math.abs(volumeA - volumeB);
  
  // return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]); // Math.abs - The result is therefore always a positive number or 0.
}
console.log(findDifference([3, 2, 5], [1, 4, 4]));

console.log('--------------------------------')

/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
  return Math.ceil(year/100); // Math.ceil apvalina iki sveiko skaiciaus i didziaja puse
}

console.log(century(1900), 'Testing for year 1900');
console.log(century(1601), 'Testing for year 1601');
console.log(century(2000), 'Testing for year 2000');
console.log(century(89), 'Testing for year 89');
console.log(century(1705), 'Testing for year 1705');

console.log('--------------------------------')

/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/

const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l * w;
  } else if (l > w || l < w) {
    return l * 2 + w * 2;
  }
// return l == w ? l * w : 2 * (l + w) // ternary

};



console.log(areaOrPerimeter(3,  3)); // 9
console.log(areaOrPerimeter(6, 10)); // 32

console.log('--------------------------------')

/*
Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
  const newStr = str.split(''); // string to array
  newStr.shift(); // removes the first element from an array
  newStr.pop(); // removes the last element from an array
  return newStr.join(''); // array to string

  // return str.slice(1, -1);
};

console.log(removeChar('eloquent')); // 'loquen'

console.log('--------------------------------')