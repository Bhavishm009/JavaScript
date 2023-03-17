function SumZero(arr,k){
 let left = 0;
 let right = arr.length - 1

 while(left < right){
    let sum = arr[left] + arr[right]
    console.log(sum)
    if(sum === k){
      return [arr[left],arr[right]]
    }
    if(sum < 0){
      left++
    }else{
      right--
    }
 }

}
console.log(SumZero([3,1,2,3,4,5,3,5,6,78,9,4,5],81))