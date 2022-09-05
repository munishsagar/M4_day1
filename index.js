//Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.

const sum = function (val1, val2) {
  let add = val1 + val2;
  console.log(add);
  if (val1 === val2) {
    return add * 3;
  } else {
    return add;
  }
};

const result = sum(3, 2);
const result1 = sum(3, 3);
console.log(result);
console.log(result1);

//Create a function to check two given integers. Return true if one of them is 50 or if their sum is 50.

const check = function (val1, val2) {
  const sum = val1 + val2;
  console.log(sum);

  if (sum === 50 || val1 === 50) {
    return true;
  } else {
    return false;
  }
};
const checkResult = check(50, 20);
const checkResult1 = check(20, 20);
console.log(checkResult);
console.log(checkResult1);

//Create a function to remove a character at a specified position from a given
//string: pass the position and the string as parameters, return the new string.

const removeCharacter = function (str, position) {
  const strChange = str.split(" ");

  const rem = strChange.splice(position, 1);
  return strChange.join(" ");
};
const newString = removeCharacter("Epicode is a good platform for coding", 3);
console.log(newString);

//Create a function to find and return the largest of three given integers.

const find = function (val1, val2, val3) {
  if (val1 > val2) {
    return val1;
  } else if (val2 > val3) {
    return val2;
  } else val3 > val1;
  return val3;
};

const findResult = find(10, 20, 50);
console.log(findResult);

//Create a function to check if two numbers are in the range 40-60 or 70-100. Return true if they do, return false if one (or both) don’t.

const range = function (num1) {
  if ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) {
    return true;
  } else {
    return false;
  }
};
const rangeResult = range(100);
console.log(rangeResult);

//Create a function to create a new string composed of a specified number of copies of a given string.
//Pass the string and the number of copies as parameters.

const copyString = function (str, n) {
  if (n < 0) {
    return false;
  } else {
    return str.repeat(n);
  }
};
const copyStringResult = copyString("epicode", 2);
console.log(copyStringResult);

//Create a function to display the city name if the string
//begins with “Los” or “New”. Pass the city name as a parameter. Return false if they start with a different string

const cityName = function (city1, city2) {
  if (city1.includes("Los") && city2.includes("new")) {
    return true;
  } else {
    return false;
  }
};
const cityNameResult = cityName("Losangles", "newYOrk");
console.log(cityNameResult);

//Create a function to calculate and return the sum of all elements from an array with 3 elements. Pass the array as a parameter.

const calculate = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum);
  }
  return sum;
};
const calculateResult = calculate([50, 20, 10, 20]);
console.log(calculateResult);

//Create a function to test if an array of length 2 contains 1 OR 3. Return true is it does, false if it doesn’t.

const testLength = function (arr) {
  if (arr.includes(2) || arr.includes(3)) {
    return true;
  } else {
    return false;
  }
};
const testLengthResult = testLength([2, 4]);
console.log(testLengthResult);

//Create a function to test if an array of length 2 DOES NOT contain 1 or 3. Return true if it doesn’t, false if it does.

const testLength1 = function (arr) {
  if (arr.includes(1) || arr.includes(3)) {
    return false;
  } else {
    return true;
  }
};
const testLengthResult1 = testLength1([1, 3]);
console.log(testLengthResult1);

//Create a function to find the longest string from a given array of strings. Pass the array as parameter and return the longest string.

const longString = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > str.length) {
      str = arr[i];
    }
  }

  return str;
};

const longStringResult = longString([
  "Epi",
  "munish sagar is good person",
  "learn",
  "programming",
]);
console.log(longStringResult);

//Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter

const greatestElement = function (arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const greatestElementResult = greatestElement([
  23, 10, 55, 14, 30, 100, 150, 120,
]);
console.log(greatestElementResult);

//Create a function to find and return the largest even number from an array of integers that is passed a parameter.

const evenNumber = function (even) {
  let maxEven = even[0];
  for (let i = 0; i < even.length; i++) {
    if (even[i] > maxEven) {
      maxEven = even[i];
    }
  }

  return maxEven;
};

const evenNumberResult = evenNumber([10, 20, 30, 54, 88, 100, 120]);
console.log(evenNumberResult);

//Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative.
//Return true if that’s the case, return false if it’s not.

const checkInteger = function (num1, num2) {
  if (num1 > 0 && num2 < 0) {
    return true;
  } else {
    return false;
  }
};

const checkIntegerResult = checkInteger(10, -2);
console.log(checkIntegerResult);

//Create a function to create and return a new string where the first 3 characters are in lower case and the others are in upper case.
//If the string’s length is less than 3,
//convert the whole string into uppercase. Pass the original string as a parameter.

const stringChange = function (str) {
  const part = str.slice(0, 3).toLowerCase();
  const upperStr = str.slice(3).toUpperCase();
  const joinStrings = part.concat(upperStr);
  return joinStrings;
};

const stringChangeResult = stringChange("Epicode school");
console.log(stringChangeResult);

//Create a function to calculate the sum of two integers (passed as parameters).
//If the sum is in the 50-80 range, return 65, otherwise, return 80.

const check1 = function (val1, val2) {
  const sum = val1 + val2;
  console.log(sum);

  if (sum >= 80 && sum <= 50) {
    return 65;
  } else {
    return 80;
  }
};
const checkResult2 = check(50, 20);
console.log(checkResult2);

// Advance java script

//Given a string (as a parameter), return the character that is most commonly used.

const commonCharacter = function (str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  // create character map
  for (let char of str) {
    if (charMap[char]) {
    } else {
      // Otherwise, the value of the character will be increamented by 1
      charMap[char] = 1;
    }
  }

  // find the most commonly used character
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};
const commonCharacterResult = commonCharacter(
  "aaa ssss aaa dddd aaaa ssss ggggg"
);
console.log(commonCharacterResult);

// Given a string (as a parameter), return the character that is most commonly used.

const getMax = function (str) {
  var max = 0,
    maxChar = "";
  str.split("").forEach(function (char) {
    if (str.split(char).length > max) {
      max = str.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
};
console.log(getMax("aabchddeeaaaahhhhhhhhh"));

// Check if two strings (passed as parameters) are anagrams of each other. Do not consider spaces or punctuation, make the whole word lower case.
//Return true if the words are anagram, return false if they aren’t.

function isAnagram(str1, str2) {
  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();

  if (!str1.length === str2.length) {
    return false;
  }

  let counter = {};
  for (let char of newStr1) {
    counter[char] = (counter[char] || 0) + 1;
  }
  for (let item of newStr2) {
    if (!counter[item]) {
      return false;
    }

    counter[item]--;
  }
  return true;
}

console.log(isAnagram("1245", "45211"));
console.log(isAnagram("NARAK", "karan"));
console.log(isAnagram("narak", "KARAN"));

function compare(str1, str2) {
  let a = str1.split("").sort().join("").toLowerCase();
  let b = str2.split("").sort().join("").toLowerCase();

  return `${str1} and ${str2} are ${a === b ? "Anagrams" : "not Anagrams"} `;
}

console.log(compare("abcd", "dcb"));

// check the passed strings are only digits

let input = "kk1235k";

let reg = /\w/g;

let res = input.match(reg);

console.log(res);

// Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams:
// Ex. “listen” is the word, [“enlist”, “google”, “inlets”] are the possibilities: the output should be [“enlist”, “inlets”]

function checkValue(word, array) {
  const found = [];

  array.forEach((item) => {
    const newItem = item.split("").sort().join("");
    const newWord = word.split("").sort().join("");

    if (newWord === newItem) {
      found.push(item);
    }
  });
  return found;
}

console.log(checkValue("listen", ["karan", "netsil", "google"]));

function anagram(word, arr) {
  const found = [];
  arr.forEach((item) => {
    const newItem = item.split("").sort().join("");
    const newWord = word.split("").sort().join("");
    if (newWord === newItem) {
      found.push(item);
    }
  });
  return found;
}
console.log(anagram("iceman", ["anime", "cinema", "google", "words"])); //should return [ "cinema" ]

// Given a string (as parameter), return true if the string is a palindrome or false if it is not. Include spaces and punctuation.
// Palindromes are strings that form the same word if it is reversed. Do include spaces and punctuation in determining if the string is a palindrome. Examples:

function checkPalindrome(str) {
  let newStr = str.toLowerCase();
  let reverse = str.split("").reverse().join("");

  return `${str} is ${newStr === reverse ? "palindrom" : "not a palindriome"}`;
}

console.log(checkPalindrome("karan"));

// case 2

function isPal(str) {
  let newStr = str.toLowerCase();

  let left = 0;
  let right = newStr.length - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) return false;

    left++;
    right--;
  }

  return true;
}

console.log(isPal("level"));

// Given an integer (as parameter), return an integer which digits are the same as the original number, but reversed. Ex: 189 ⇒ 981

function check(num) {
  let val = num.split("").reverse().join("");

  return Number(val);
}

console.log(check("154"));

// Write a function that takes a positive number X as a parameter.
// The function should output (as console.log) a step shaped string with X level using the # character. Make sure the steps are on the right hand side:

function createShape(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
}

console.log(createShape(3));

// Create a function that takes an array and a “chunk size” as parameters. Divide the array into subarrays with the “chunk size” as length: array: [1, 2, 3, 4],
//chunk size: 2 → [[ 1, 2], [3, 4]] array: [1, 2, 3, 4, 5], chunk size: 4 → [[ 1, 2, 3, 4], [5]]

/*function chunk(arr, size) {
  const chunked = [];
  const last = chunked[chunked.length - 1]
  arr.forEach(item => {
      if (!last || last.length === size) {
          chunked.push(item)
      } else {
          last.push(item)
      }
  })
  return chunked
}

console.log(chunk([1, 2, 3, 4, 5], 2))*/

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 8, "karan", 25, 45], 3));

/*function chunkArray(array, size) {
  let index = 0;
  const chunked = []

  while (index < array.length) {
      chunked.push(array.slice(index, index + size))
      index += size;
  }

  return chunked;
}

console.log(chunkArray([1, 5, 7, 8, 9, 5, 6, 23, 11, 47], 2)) */

// Write a function that accepts a positive number X as parameter. The function should console.log a pyramid shape with N levels built using the # character. Example with X as 3
//'  #  '
//' ### '
//'#####'
let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
