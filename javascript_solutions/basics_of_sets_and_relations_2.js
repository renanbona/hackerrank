const mySetA = new Set([1,2,3,4,5,6])
const mySetB = new Set([2,3,4,5,6,7,8])

function union(mySetA, mySetB) {
  let unionSet = new Set(mySetA);

  for (let number of mySetB) {
    unionSet.add(number)
  }

  return unionSet;
}

function intersection(mySetA, mySetB) {
  let intersectionSet = new Set();

  for (let number of mySetA) {
    if(mySetB.has(number)){
      intersectionSet.add(number)
    }
  }

  return intersectionSet;
}

function difference(mySetA, mySetB) {
  let differenceSet = new Set();

  for (let number of mySetA) {
    if(!mySetB.has(number)){
      differenceSet.add(number)
    }
  }

  return differenceSet;
}

// console.log(union(mySetA, mySetB).size);
// console.log(intersection(mySetA, mySetB).size);
console.log(difference(mySetA, mySetB).size); //https://www.hackerrank.com/challenges/basics-of-sets-and-relational-algebra-3/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
