import isPrimeCheck from "./modules/isPrimeCheck.js";
import sumTen from "./modules/sumTen.js";
import endsInOneOrFive from "./modules/endsInOneOrFive.js";

let button = document.querySelector("#submitButton");

// A number is interesting if it is has atleast 2 of the following:
function isInteresting(n) {
  // prime,
  isPrimeCheck(n);
  // sum of digits is a multiple of 10,
  sumTen(n);
  // ends in 1 or 5,
  endsInOneOrFive(n);
  // all digits are multiples of 3 or 5.
  let stringified = n.toString();
  let multiplesFiveOrThree = stringified
    .split("")
    .every((char) => +char % 3 === 0 || +char % 5 === 0);

  // find count
  let count =
    isPrimeCheck(n) + sumTen(n) + endsInOneOrFive(n) + multiplesFiveOrThree;

  if (count > 1) {
    return n + " is interesting";
  } else if (count > 0) {
    return n + " is okay";
  } else {
    return n + " is booooooring";
  }
}

button.addEventListener("click", () => {
  let input = document.querySelector("#numberInput");
  let value = parseInt(input.value);

  let interesting = isInteresting(value);

  let output = document.querySelector("#output");
  output.innerText = interesting;
});

document.querySelector("#primeButton").addEventListener("click", () => {
  let input = document.querySelector("#primeInput");
  let n = parseInt(input.value);

  isPrimeCheck(n);

  const output = document.querySelector("#primeOutput");
  if (isPrimeCheck(n)) {
    output.innerHTML = n + " is prime!";
  } else {
    output.innerHTML = n + " is not prime!";
  }
});
