function IsAlphanumeric(str) {
  return /^[a-z0-9]+$/gi.test(str);
}
function ReverseStr(str) {
  if (str.length <= 1) return str;
  else {
    return ReverseStr(str.slice(1)) + str[0];
  }
}
function ValidPalindrome(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (IsAlphanumeric(str[i])) {
      newStr += str[i];
    }
  }
  if (newStr === ReverseStr(newStr)) {
    return true;
  }
  return false;
}
console.log(ValidPalindrome("madambhavish"));
