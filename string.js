function isIsogram(str) {
  if (!str) return false;
  const set = new Set(str);
  console.log(set, "set");
  return set.size === str.length;
}

// console.log(isIsogram("abc"));

function isPangram(str) {
  const len = str.length;
  if (len < 26) return false;

  const map = new Map();
  for (let i of str) {
    if (i.match(/[a-z]/i)) {
      map.set(i.toLowerCase(), true);
    }
  }
  console.log(map.size);
  return map.size === 26;
}
// console.log(
//   isPangram("The quick brown fox jumped over the lazy sleeping dog.")
// );
function areIsomorphic(s, t) {
  // strings with different lengths are not isomorphic
  if (s.length !== t.length) {
    return false;
  }

  // the conversion array
  const convert = [];
  for (let i = 0; i < s.length; i++) {
    console.log("si", s[i]);
    // if the conversion character exists
    if (convert[s[i]]) {
      // apply the conversion and compare
      console.log("if", t[i], convert[s[i]]);
      if (t[i] === convert[s[i]]) {
        // so far so good
        continue;
      }
      return false; // not isomorphic
    }

    // set the conversion character for future use
    console.log("setting", t[i]);
    convert[s[i]] = t[i];
    console.log(convert[s[i]], "converted");
  }

  // these two strings are isomorphic since there are no violations
  return true;
}
console.log(areIsomorphic("atlatl", "tartar"));
