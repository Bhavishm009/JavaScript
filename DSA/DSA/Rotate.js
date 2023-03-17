let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;
let n = arr.length;
k = k % n;

let temp = 0;
let i = 0;
let j = n - 1;

while (i < j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
i = 0;
j = k - 1;
while (i < j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
i = k;
j = n - 1;
while (i < j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
console.log(arr);
