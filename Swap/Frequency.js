function MaxFre(arr){
    let mp = new Map()
    let maxValue = 0;
    let maxKey = 0;
    for(let i =0;i<arr.length;i++){
        if(mp.has(arr[i])){
            let x = mp.get(arr[i])
            mp.set(arr[i],x + 1)
        }else{
            mp.set(arr[i],1)
        }
    }
    mp.forEach((value, key)=>{
        if(maxValue < value){
            maxValue = value
            maxKey = key
        }
    })

    return mp
}
console.log(MaxFre())