let arr=[0, 2, 1 ,2 ,0]

function Sort(arr){
    let n = arr.length
    let left = 0
    let right = n-1

    let i=0 
     while(i<=right){
        if(arr[i]==2){
            let temp = arr[i]
            arr[i]= arr[right]
            arr[right]=temp
            right--
 }
 else if (arr[i]==0){
    let temp = arr[i]
    arr[i]= arr[left]
    arr[left]=temp
    left++
    i++
 }
 else i++
     }
     return arr
}

console.log(Sort(arr))