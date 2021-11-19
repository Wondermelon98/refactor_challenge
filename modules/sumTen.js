// optimised function for sum ten
const sumTen = (n) => {
  let sum = 0;
  while (n > 0) {
    const r = n % 10;
    n = (n - r) / 10;

    sum += r;
  }
  return !(sum % 10);
};

export default sumTen;
