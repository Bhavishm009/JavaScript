function isAnagram(s1,s2){
    if(s1.length!== s2.length){
        return false;
    }
    let map = {};
    
    for(let i = 0; i < s1.length; i++){
        if(!map[s1[i]]){
            map[s1[i]] = 1;
        }else{
            map[s1[i]]++;
        }
        console.log(map);
    }
    console.log(map);
    for(let i = 0; i < s2.length; i++){
        if(!map[s2[i]]){
            return false;
        }else{
            map[s2[i]]--;
        }
        console.log(map);
    }
    console.log(map);
    return true;
}
console.log(isAnagram('ccaatt','aacctt')) 