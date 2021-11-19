import isPrimeCheck from "./isPrimeCheck.js";
import sumTen from "./sumTen.js";
import endsInOneOrFive from "./endsInOneOrFive.js";
import multiplesFiveOrThree from "./multiplesFiveOrThree.js";

function isInteresting(n) {
  let count =
    isPrimeCheck(n) + sumTen(n) + endsInOneOrFive(n) + multiplesFiveOrThree(n);

  if (count > 1) {
    return `${n} is interesting`;
  } else if (count > 0) {
    return `${n} is okay`;
  } else {
    return `${n} is booooooring`;
  }
}

export default isInteresting;
