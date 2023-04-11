// Using recursion to recurrently call setTimeout to spin the spinner
const spinner180Degs = function(num180DegRotations) {
  // Base case
  if (num180DegRotations <= 0) {
    return;
  }

  // Recursive case
  const spinDuration = 200;
  const spinChars = ['|', '/', '-', '\\'];
  
  // if done this way, then this makes i in the setTimeout callback function not evaluated immediately, but instead after the initial main thread execution
  let i;
  for (i = 0; i < spinChars.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${spinChars[i]}   `);
    }, 100 + i * spinDuration);
  }


  setTimeout(() => {
    spinner180Degs(num180DegRotations - 1);
  }, (100 + i * spinDuration) - 100);
};

spinner180Degs(2);