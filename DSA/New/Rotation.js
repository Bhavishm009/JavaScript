function Rotate(arr,k){
 let i = 0;
  k = k%arr.length
 let j = arr.length-1
 while(i<j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
 }
 i = 0
 j= k-1
 while(i<j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
 }
 i = k
 j =arr.length-1
 while(i<j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
 }
 return arr
}
console.log(Rotate([1,3,5,6,7,8],3))