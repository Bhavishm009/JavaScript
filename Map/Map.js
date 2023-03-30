function Reverse(w){
    let s =''
    for(let i =w.length-1;i>=0;i--){
        s += w[i]
    }
    return s
}

console.log(Reverse('Hello.HELLO.BHavish.'))
// function ReverseWords(s){
//     let w = ''
//     let ans = ''
//     for(let i =0;i<s.length;i++){
//         if(s[i]=='.'){
//             w=Reverse(w)
//             ans += w
//             ans += '.'
//         }else{
//             w+=s[i]
//         }
//     }
//     if(w !=''){
//         Reverse(w)
//         ans += w
//     }
//     return ans
// }
// console.log(ReverseWords('Shalini.jhuth.nahi.bolo'))