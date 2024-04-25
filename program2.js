function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
  if (!nums.length) {
    return 1;
}

const numsSet = new Set(nums);

for (let i = 1; i <= nums.length + 1; i++) {
    if (!numsSet.has(i)) {
        return i;
    }
}

}

module.exports = smallestMissingPositiveInteger;

function smallest_missing_positive_integer(nums) {
  if (!nums.length) {
      return 1;
  }
  
  const numsSet = new Set(nums);
  
  for (let i = 1; i <= nums.length + 1; i++) {
      if (!numsSet.has(i)) {
          return i;
      }
  }
}