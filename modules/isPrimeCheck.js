// optimised function for prime check
const isPrimeCheck = (n) => {
  const MAX = Math.sqrt(n);
  for (let i = 2; i < MAX; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export default isPrimeCheck;
