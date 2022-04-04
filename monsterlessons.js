// create a function which stores inside a secret word which cannot be changed
// or accessed from outside

const someFn = () => {
  const secret = "shhh";

  return () => secret;
};

const getSecret = someFn();
// console.log(getSecret());

// how can i clone an object in js
let obj = { a: 1, b: 2 };
// let clone = {...obj}
let clone = Object.assign({}, obj);
// console.log(clone);
// prototypical

// count vowels
let vowels = ["a", "e", "i", "o", "u"];

const findVowels = str => {
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      // if (vowels.includes(char)) {
      //   acc++;
      // }
      // // you must return acc
      // return acc;
      return vowels.includes(char) ? (acc += 1) : acc;
      // or you don't even have to return
    }, 0);
  // let count = 0;
  // for (let char of str.toLowerCase()) {
  //   if (vowels.includes(char)) {
  //     count++;
  //   }
  // }
  // return count;
};
console.log(findVowels("addgregwo"), "findvowels");

// reverse each word
const str = "Welcome to this javascript guide";
const reverseString = str => str.split(" ").reverse().join(" ");

// console.log(reverseString(str));

// most common string
// takes an array of strings, returns the most commonly occurring string

let commonString = ["a", "a", "a", "b"];
const mostCommonString = arr => {
  // check if key already exists in map
  // if it does, add one
  let commonStringMap = new Map();

  arr.map(i => {
    // console.log(commonStringMap);
    if (commonStringMap.has(i)) {
      commonStringMap.set(i, commonStringMap.get(i) + 1);
    } else {
      commonStringMap.set(i, 1);
    }
  });

  let count = 0;
  let string = "";
  for (let [key, value] of commonStringMap) {
    console.log(value);
    if (value > count) {
      count = value;
      string = key;
    }
  }

  return string;
  // if it doesn't, add key and init value of 1

  // loop thru and compare if array
};
// mostCommonString(commonString);

const mostFrequent = arr => {
  const mapping = arr.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;

    return acc;
  }, {});
  return Object.entries(mapping).reduce(
    (acc, el) => {
      console.log(el, acc);
      return el[1] > acc[1] ? el : acc;
    },
    [null, 0]
  )[0];
};
console.log(mostFrequent(commonString));
