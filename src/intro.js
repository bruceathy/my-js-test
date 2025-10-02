//Lesson: Writing first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "fizzbuzz";
  else if (n % 3 === 0) return "fizz";
  else if (n % 5 === 0) return "buzz";
  else return n;
}
