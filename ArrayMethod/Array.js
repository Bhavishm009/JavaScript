let arr = [1,2,3,4,5,6,7];
let sum = 1
// let prod = 1
// for(let i = 0 ; i< arr.length;i++){
//    sum = sum * arr[i]
//     console.log(arr[i],sum)
// }

function Sort(arr){
 for(var i = 0; i < arr.length; i++){
   for(var j = 0; j < ( arr.length - i -1 ); j++){
     if(arr[j] > arr[j+1]){
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
 return arr
}
console.log(Sort([111,999,2,3,4,5,77,88,99]))