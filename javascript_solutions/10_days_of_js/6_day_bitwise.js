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
function getMaxLessThanK(n, k) {
  var max = 0;
  //a's values
  for (var a = 1; a < n; a++){
    //b's values
    for (var b = a + 1; b <= n; b++) {
      var binary_a_b = a & b;
      if ((binary_a_b < k) && (binary_a_b > max)) {
        max = binary_a_b;
      }
    }
  }
  return max;
}

function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }
}
