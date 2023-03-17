// function isAngram(str1,str2){
//  if(str1.length !== str2.length){
//     return 'Not Anagram'
//  }
//  let count1 = {}
//  let count2 = {}
//  for(let i =0;i<str1.length;i++){
//     count1[str1[i]]=count1[str1[i]]|| 0 + 1
//  }
//  for(let i =0;i<str2.length;i++){
//     count2[str2[i]]=count2[str2[i]]|| 0 + 1
//  }
//  for(let key in count1){
//     if(count1[key]!= count2[key]){
//         return 'Not Anagram'
//     }
//  }
//  return 'Anagram'
// }
// console.log(isAngram('bhavish','hsivahb'))














function isAngram(str1,str2){
        if(str1.length !== str2.length){
            return 'false'
        }
        let count1 ={}
        let count2 = {}
        for(let i =0;i<str1.length;i++){
            count1[str1[i]] = count1[str1[i]] || 0 +1
        }
        for(let i = 0;i<str2.length;i++){
            count2[str2[i]] = count2[str2[i]] || 0 + 1
        }
        for(let key in count1){
            if(count1[key] != count2[key]){
                return 'false'
            }
        }
        return 'true'
   }

   console.log(isAngram('cat','act'))