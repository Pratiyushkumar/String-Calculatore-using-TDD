export function add(numbers) {
  if (numbers === '') return 0;

  const cleanedNumbers = numbers.replace(/[\n,]+/g, ',');

  const numberArray = cleanedNumbers.split(',').map((num) => {
    const parsed = parseInt(num.trim(), 10);
    return isNaN(parsed) ? 0 : parsed;
  });

  const negatives = numberArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }

  return numberArray.reduce(
    (sum, current) => sum + (isNaN(current) ? 0 : current),
    0
  );
}
