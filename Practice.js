

// function lessThan100(a,b){
//  if (a+b < 100){
//   console.log('True') 
//  }else{
//   console.log('False')
//  }
// }
// lessThan100(919,2)


function Find(arr){
  let min = 0;
  let max = 0;
  for(let i = 0; i <arr.length;i++){
    if(arr[i] < arr[min]){
      min = i;
    }
    if(arr[i] > arr[max]){
      max = i;
    }
  }
  return [min,max];
}
console.log(Find([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,100]))

