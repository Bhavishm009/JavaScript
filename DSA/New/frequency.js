function Counter(str1, str2) {
   let a = str1.toLowerCase()
   let b = str2.toLowerCase()
    if(a.length !== b.length){
        return false
    }
  let count1 = {};
  let count2 = {};

  for (let val of a) {
    count1[val] = (count1[val] || 0) + 1;
  }
  for (let val of b) {
    count2[val] = (count2[val] || 0) + 1;
  }
  for(let key in count1){
    if(!key in count2){
        return false
    }
    if(count2[key] !== count1[key]){
        return false
    }
  }
  return true
}

console.log(Counter('BhavisH',''))