export function add(numbers) {
  // Handle empty string
  if (numbers === '') {
    return 0;
  }
  // Handle comma-separated numbers
  const numberArray = numbers.split(',').map((num) => parseInt(num.trim(), 10));

  // Sum the numbers
  return numberArray.reduce((sum, current) => sum + current, 0);
}
