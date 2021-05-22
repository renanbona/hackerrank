// <!DOCTYPE html>
// <html>
// <body>
//
// <p>Click the button to perfom a global, case-insensitive search for the letters "ain" in a string, and display the matches.</p>
//
// <button onclick="myFunction()">Try it</button>
//
// <p id="demo"></p>
// <p id="demo2"></p>
//
//
// <script>
// function myFunction() {
//     var str = "javascriptConsonant";
//     var res = str.match(/[aeiou]/g);
//     var res2 = str.match(/[^aeiou]/g);
//     document.getElementById("demo").innerHTML = res;
//     document.getElementById("demo2").innerHTML = res2;
// }
// </script>
//
// </body>
// </html>

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
  var vowels = s.match(/[aeiou]/g);
  var consonants = s.match(/[^aeiou]/g);
  var finalArray = vowels.concat(consonants);

  for (var letter of finalArray) {
    console.log(letter);
  }
}


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}
