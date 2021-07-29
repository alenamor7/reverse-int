module.exports = function reverse (n) {
  const absN = Math.abs(n);
  const reversedN = Number(String(absN).split('').reverse().join(''));
  return reversedN;
}
