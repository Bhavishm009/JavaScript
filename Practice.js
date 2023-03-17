const cardData = [
    { suit: "heart", value: 7 },
    { suit: "club", value: 8 },
    { suit: "club", value: 2 },
    { suit: "diamond", value: 2 },
    { suit: "diamond", value: 5 },
    { suit: "club",value:10},
  ];

  /** * 1. complete the above function,
//  * it should return true /false if card is present/absent
//  * example
//  * findCard(5, 'heart') should return false
//  * findCard(10, 'club') should return true
// */
//  function findCard(suit,value){
//     let result = cardData.filter((x)=>x.suit === suit && x.value === value) 
//     if(result.length == 1){
//         return true
//     }
//     return false
//  }
//   console.log(findCard('heart',5)) 


 /* 2. write a function which returns the list of available suits in the above data
//  * ans => ["heart", "club", "diamond"] */

// function lessThan100(a,b){
//  if (a+b < 100){
//   console.log('True') 
//  }else{
//   console.log('False')
//  }
// }
// lessThan100(99,1)


function Find(arr){
  let min = 0;
  let max = 0;
  for(let i = 0; i < arr.length;i++){
    if(arr[i] < arr[min]){
      min = i;
    }
    if(arr[i] > arr[max]){
      max = i;
    }
  }
  return [min,max];
}
console.log(Find([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]))