function SumOfDigit(num) {
  if (num < 0) {
    num = -num;
  }
  if (num == 0) {
    return 0;
  } else {
    return (num % 10) + SumOfDigit(Math.floor(num / 10));
  }
}
console.log(SumOfDigit(-11));
