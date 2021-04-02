function pipeFix(numbers) {
  let first = numbers[0];
  let last = numbers[numbers.length - 1];

  let result = [];
  for (let i = first; i <= last; i++) {
    result.push(i);
  }
  return result;
}

// Clever solution
let pipeFix = (nums) =>
  Array.from({ length: nums.pop() - nums[0] + 1 }, (_, i) => i + nums[0]);
