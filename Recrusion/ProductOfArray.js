function Prod(arr){
    if(arr.length === 0){
        return 1
    }
    return arr[0] * Prod(arr.splice(1))
}
console.log(Prod([1,2,3,4,5,6]))