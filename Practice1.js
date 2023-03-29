// function Pal(str){
//  if(str.length<= 1){
//     return true
//  }
//  if(str[0] === str.slice(-1)){
//     return Pal(str.slice(1,-1))
//  }
//  return false
// }
// console.log(Pal('madam'))


// function ReverseArr(arr){
//  let i = 0 ; let j = arr.length-1;
//  while(i<j){
//     arr[i] = arr[i] + arr[j]
//     arr[j] = arr[i] - arr[j]
//     arr[i] = arr[i] - arr[j]
//     i++
//     j--
//  }
//  return arr
// }
// console.log(ReverseArr([1,2,3,4,5]))

function RemoveDup(arr){
    let unique = []
 for(let i =0;i<arr.length;i++){
    if(unique.indexOf(arr[i])=== -1){
        unique.push(arr[i])
    }
 }
 return unique

}
console.log(RemoveDup([1,1,2,2,2.3,4,5,5,6]))