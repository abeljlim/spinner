// Using recursion to recurrently call setTimeout to spin the spinner
const spinner180Degs = function(num180DegRotations) {
  // Base case
  if (num180DegRotations <= 0) {
    return;
  }

  // Recursive case
  const spinDuration = 200;
  const spinChars = ['|', '/', '-', '\\'];

  // keeping the variables inside the for loop to use only variables (namely i) inside the for loop so that they are evaluated immediately (rather than after the initial main thread execution)
  for (let i = 0; i < spinChars.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${spinChars[i]}   `);
    }, 100 + i * spinDuration);
  }


  setTimeout(() => {
    spinner180Degs(num180DegRotations - 1);
  }, (100 + spinChars.length * spinDuration) - 100);
};

spinner180Degs(2);