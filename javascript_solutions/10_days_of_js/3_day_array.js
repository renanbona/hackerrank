function getSecondLargest(nums) {
    // Complete the function
  nums.sort(function (a, b) { return b - a });
  var largestNum = nums[0];
  for (var i = 0; i < nums.length; i++) {
    if (largestNum > nums[i]) {
      var secondlargestNum = nums[i];
      break;
    }
  }
  return secondlargestNum;
}
