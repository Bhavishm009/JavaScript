function flattenArr(arr) {
  let flat = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === false) {
      flat.push(arr[i]);
    } else {
      flat = flat.concat(flattenArr(arr[i]));
    }
  }
  return flat;
}
console.log(flattenArr([1, 2, 3, [4, 5, 6]]));
