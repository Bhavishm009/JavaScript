function CounterCheak(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let count1 = {}
    let count2 = {}
    
    for( let val of arr1){
        count1[val] = (count1[val] || 0) + 1
    }
    for (let val of arr2){
        count2[val] = (count2[val] || 0) + 1
    }
   
    for( let key in count1){
        if(!count2 [key ** 2] ){
            return false
        }
        if(count2[key ** 2] !== count1[key]){
            return false
        }
    }
    return true
}

console.log(CounterCheak([3,3,2,3,3,1,1],[9,1,4,9,9,9,1]))