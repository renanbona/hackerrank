function reverseString(s) {
  try {
    s = s.split("");
    s = s.reverse();
    s = s.join("");
  }
  catch(err) {
    console.log(err.message);
  }
  finally {
    console.log(s);
  }
}
