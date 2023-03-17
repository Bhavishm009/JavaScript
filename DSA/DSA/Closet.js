function ClosesetSum(arr, k) {
  let i = 0;
  let j = arr.length - 1;
  let sum = 0;
  let a = 0;
  let b = 0;
  while (i < j) {
    if (arr[i] + arr[j] < k) {
      sum = arr[i] + arr[j];
      a = i;
      b = j;
    }
    if (arr[i] + arr[j] > k) {
      j--;
    } else {
      i++;
    }
  }
  return sum;
}
console.log(ClosesetSum([1, 2, 3, 4, 5, 6], 3));
