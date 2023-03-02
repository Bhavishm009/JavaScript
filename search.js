let names = ['bhavish','harsh','shalini']


// nam = names.filter(search)
// function search (x){
//     return x === 'bhavish'
// }
// console.log(nam)
// if(nam.length > 0){
//     console.log('sucesss')
// }
let z = prompt()
nam2 = names.filter(Delete);
function Delete(b){
 return b !=  z
}
console.log(nam2)
let nam3 = nam2.map((x)=>x)
console.log(nam3,'hello')