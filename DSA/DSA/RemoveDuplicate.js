// let arr = [1,2,3,1,2,3,1,2,3];
// let len = arr.length;
// let b = [];

// for(let i = 0 ; i<len;i++){
//  if(b.indexOf(arr[i]) === -1){
//     b.push(arr[i]);
//  }

// }
// console.log(b)

// function RemoveDup(a){
//  let len = a.length;
//  let b = []
//  for(let i =0;i<len;i++){
//     if(b.indexOf(a[i])=== -1){
//         b.push(a[i])
//     }
//  }
//  return b
// }
// console.log(RemoveDup([4,4,5,5,1,2,3]))
//O(n^2) Time Complexity


// let a = [4,4,5,5,1,2,3]
// a.sort()
// let temp;
// let b = []
// for(let i = 0;i<a.length;i++){
//  if(a[i] !== temp){
//     b.push(a[i])
//     temp = a[i]
//  }

// }
// console.log(b)


// let a = [1,2,3,4,1,2,3,4]
// obj ={}
// for(let i of a){
//     obj[i] = true
// }
// let b = Object.keys(obj)
// console.log(b)

// function RemoveCopy (a){
//     obj ={}
//     for(let i of a){
//         obj[i] = true
//     }
//     let b = Object.keys(obj)
//     return b
// }
// console.log(RemoveCopy([1,2,3,4,1,2,3,4]))
//Time Complexity O(n)
