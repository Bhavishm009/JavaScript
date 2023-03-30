// let arr = [9,9,3,5,8,5,9,4]
let arr = 'Bhavish.Bhavish'

var mp = new Map()

for(let i = 0;i<arr.length;i++){
    let x = arr[i]
    if(mp.has(x)){
       mp.set(x,mp.get(x)+1)
    }else{
        mp.set(x,1)
    }
   console.log(mp) 
   mp.forEach((value,key)=>{
    console.log(key,value)
   })
}