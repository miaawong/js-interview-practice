// reverse a string
// reverseString('hello') === 'olleh'

function reverseString(str) {
  // method 1
  //   let newStr = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     newStr = newStr + str[i];
  //   }
  //   return newStr;

  //method 2
  //   return str.split("").reverse().join("");

  // method 3: reduce ?
  // reduce((reversedString, currentChar) => addCharacter in front of prevChar, 'default value is an empty string')
  return str
    .split("")
    .reduce((reversedString, char) => char + reversedString, "");
}
//console.log(reverseString("hello"));

function isPalindrome(str) {
  // method js
  //   let reversed = str.split("").reverse().join("");
  //   return str === reversed;

  // method leetcode style
  // two pointers check and see if left and right matches
  let left = 0;
  for (let right = str.length - 1; right > left; right--) {
    if (str[left] === str[right]) {
      left++;
    } else {
      return false;
    }
  }
  return true;
}
// console.log(isPalindrome("hello"));

//reverseInt(125) === 521
function reverseInt(int) {
  let strInt = parseInt(int.toString().split("").reverse().join(""));
  return strInt;
}
// console.log(reverseInt(125));

function capLetters(str) {
  // split into arr
  //   let arr = str.split(" ");
  // cap each first char
  //   let newArr = [];
  //   for (let i of arr) {
  //     newArr.push(i.charAt(0).toUpperCase() + i.slice(1));
  //   }
  //   return newArr.join(" ");
  // how to not use extra mem ?
  //   return str
  //     .toLowerCase()
  //     .split(" ")
  //     .map(word => word[0].toUpperCase() + word.substring(1))
  //     .join(" ");
}
// console.log(capLetters("i love javascript"));

// reutrn the character that is most common in a string
function maxCharacter(str) {
  // use a map, find most common char
  let newMap = new Map();

  for (let i of str) {
    if (newMap.has(i)) {
      newMap.set(i, newMap.get(i) + 1);
    } else {
      newMap.set(i, 1);
    }
  }
  let mostCommon = 0;
  let mostCommonChar;
  for (const [key, val] of newMap) {
    if (val > mostCommon) {
      mostCommon = val;
      mostCommonChar = key;
    }
  }
  return mostCommonChar;
}
// console.log(maxCharacter("javascript"));

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "fizz";
    }
    if (i % 5 === 0) {
      output += "buzz";
    }
    console.log(output || i);
  }
}

console.log(fizzBuzz());
