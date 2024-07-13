

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const target = 10;

// const twoSum = ( numbersArray, target ) => {

//   for (let i = 0; i < numbersArray.length; i++) {
//     for (let v = i + 1; v < numbersArray.length; v++) {
//       const suma = numbersArray[i] + numbersArray[v];

//       if( suma === target ){
//         return [i, v];
//       }
//     }
//   }

//   return null
// }

function twoSum(nums, target) {
  var map = new Map();

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if(map.get(num) === undefined) map.set(target - num, i);
    else return [map.get(num), i];
  }
};

console.log(twoSum(array, target));
