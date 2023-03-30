function LargestTwo(arr){
    let max =0 ; let sMax = 0 ; let sum = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > max){
            sMax = max
           max = arr[i]
        }else if(arr[i] > sMax){
           sMax = arr[i]
       }
    }
    sum += max + sMax
    return sum
}
console.log(LargestTwo([101,210,1,2,3,4,88,99,1]))