function Power(n){
    if(n==0){
        return 1
    }
    else if(n<1 || n % 2 == 0){
        return false
    }
    else{
        return Power(n/2)
    }
}
console.log(Power(60))




// function pow(b,e){
//     if(e == 0 ){
//         return 1
//     }
//     return  b * pow(b,e-1)
// }
// console.log(pow(3,5))