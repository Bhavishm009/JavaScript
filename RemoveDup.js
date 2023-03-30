function RemoveDup(arr){
    let unique = []
 for(let i =0;i<arr.length;i++){
    if(unique.indexOf(arr[i]) === -1){
        unique.push(arr[i])
    }
 }
 return unique

}
console.log(RemoveDup([1,1,2,2,2.3,4,5,5,6]))