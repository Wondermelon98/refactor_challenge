const multiplesFiveOrThree = (n) =>
  n
    .toString()
    .split("")
    .every((char) => +char % 3 === 0 || +char % 5 === 0);

export default multiplesFiveOrThree;
