// function isAnagram (str1,str2){
//     if(str1.length !== str2.length){
//         return false
//     }
//     let count1 = {}
//     let count2 = {}
//     for(let i=0;i<str1.length;i++){ //n
//         count1[str1[i]] = count1[str1[i]] || 0 + 1
//     }
//    for( let i = 0;i<str2.length;i++){//n
//     count2[str2[i]] = count2[str2[i]] || 0 + 1
//    }
//     for(let key in count1){ //n
//         if(count1[key] != count2[key]){
//             return false
//         }
    
//     }
//     return true
// }

// console.log(isAnagram('dat','cat'))


// function RemoveDup(arr){
//     let i= 0;
//     let j = arr.length-1
    
//     for(let i = 0;i<arr.length;i++){
//         map[arr[i]] = map[arr[i]] ? map[arr[i]]+1 : 1
//     }
 

// }
// console.log(RemoveDup([10,15,20,20,20,23,40,40]))

// let Data = [4,71,4,9,2,4,1]
// let sum = Data.reduce((x,y)=>(x+y))
// console.log(sum)
// let unique = new Set(Data)
// console.log([...unique])