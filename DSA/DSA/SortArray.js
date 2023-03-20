let array = [1, 3, 4, 6, 11, 33, 488, 9, 0];
let temp;
for (let i = 0; i < array.length; i++) {
  console.log("i", array[i]);
  for (let j = i; j < array.length; j++) {
    console.log("j", array[j]);
    if (array[i] > array[j]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);
