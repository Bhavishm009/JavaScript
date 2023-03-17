function ClosetSum(arr,k){
let result = []
let dis = Infinity
let i = 0;
let j =arr.length-1
while(i<j){
    if(Math.abs(arr[i]+arr[j]-k) < dis){
        result = [arr[i],arr[j]]
        console.log(i+1,j+1)
        dis = Math.abs(arr[i]+arr[j]-k)
        console.log(dis)
    }
    if((arr[i]+arr[j]-k)>0 ){
       j--
    }else{
        i++
    }
}
return result

}

console.log(ClosetSum([1,2,5,8,9,14],12))