function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    let capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    return [capitalized, ...capitalizeFirst(arr.slice(1))];
  }
}

let arr = ["hello", "shalini", "hiii"];
let capitalizedArr = capitalizeFirst(arr);

console.log(capitalizedArr); // Output: ['Hello', 'Shalini', 'Hiii']
