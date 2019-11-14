const formatString = function(string) {
  const letters = string.length;
  let desiredStr = 40;

  if (letters <= desiredStr) {
    return string;
  } else {
    return string.substring(0, desiredStr) + "...";
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
