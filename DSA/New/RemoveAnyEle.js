// Arr = arr;
// k = arr.location;
// l = add;

function RemoveEle(arr, k, l) {
  for (let i = 0; i < arr.length; i++) {
    if(i === k){
        arr[i] = l
    }
   
  }
  return arr
}
console.log(RemoveEle([1, 2, 3, 4, 5, 6], 5, 4));
