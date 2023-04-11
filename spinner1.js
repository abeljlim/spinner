// Using recursion to recurrently call setTimeout to spin the spinner
const spinner180Degs = function (num180DegRotations) {
  // Base case
  if(num180DegRotations <= 0) {
    return;
  }
  
  // Recursive case
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, 700);

  setTimeout(() => {
    spinner180Degs(num180DegRotations-1)
  }, 800);
}

spinner180Degs(2);