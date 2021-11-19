import isPrimeCheck from "./isPrimeCheck.js";
import sumTen from "./sumTen.js";
import endsInOneOrFive from "./endsInOneOrFive.js";

function isInteresting(n) {
  let stringified = n.toString();
  let multiplesFiveOrThree = stringified
    .split("")
    .every((char) => +char % 3 === 0 || +char % 5 === 0);

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

export default isInteresting;
