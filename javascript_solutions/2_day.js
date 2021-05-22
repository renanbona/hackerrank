'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var consonantsArrayIndex = [];

  for (var letterIndex in s) {

    var isConsonant = true;

    for (var vowel of vowels) {
      if (s[letterIndex] === vowel) {
        console.log(s[letterIndex]);
        isConsonant = false;
      }
    };

    if (isConsonant) {
      consonantsArrayIndex.push(letterIndex);
    }
  };

  for (var consonantIndex of consonantsArrayIndex) {
    console.log(s[consonantIndex]);
  };
}

function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}
