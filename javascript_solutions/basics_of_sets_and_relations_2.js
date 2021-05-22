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

// console.log(union(mySetA, mySetB).size);
console.log(intersection(mySetA, mySetB).size);
