function getSum(arr1, arr2){
  let sum = 0;
  for (let i=0; i < arr1.length; i++){
  sum += arr1[i];
  }
  for (let i=0; i < arr2.length; i++){
  sum += arr2[i];
  }
  return sum;
  }
  
  console.log(getSum([1,2,3],[5,66,23]));

  // 1. inspect --> sources --> page --> 15.1.js
  // 2. red underline on arr1.length --> Uncaught TypeError cannot read properties of undefined 
  // 3. meanning using .length on undefined = problem with the array
  // 4. adding comma between the arrays that are passed as arguments to getSum()
  // 5. red underline on sum+= arr[i] --> Uncaught TypeError assignment to constant variable
  // 6. changing sum from const to let