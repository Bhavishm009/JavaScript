function Palindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str.slice(-1)) {
    return Palindrome(str.slice(1, -1));
  }
  return false;
}

console.log(Palindrome("bhahb"));
