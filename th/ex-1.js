const moveZeroes = function (nums) {
  let notZeroNumber = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[notZeroNumber] = nums[i];
      notZeroNumber++;
    }
  }

  for (let i = notZeroNumber; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};


const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]

