const data = {
  user: {
    isLoggedIn: true,
    username: "js1234",
    avatar: "puppy",
    favourites: ["python", "javascript", "java"],
  },
  topResults: {
    amount: 3,
    scores: [120, 100, 99],
  },
};
// changed  isLoggedIn Status
const d = {
    ...data,
    ['user']:{
        ...data['user'],
        isLoggedIn:false
    }
}
const f = {
    ...data,
    ['user']:{
        ...data['user'],
        avatar:'hello',
        username:'jshello',
        
    }
}
console.log(f)
// let chnage Avatar And isLoggedIn status.
const e ={
    ...data,
    ['user']:{
        ...data['user'],
        isLoggedIn:false,
        avatar:'kitty'
    }
}
// console.log(e)
// console.log(data)