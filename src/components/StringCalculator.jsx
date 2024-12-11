import { useState } from 'react';
import { add } from '../../utils/handleNumbers';

const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const sum = add(input);
    console.log('sum calculation', sum);
    setResult(sum);
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>String Calculator</h2>

      <textarea
        type='text'
        placeholder='Enter numbers (e.g., 1,2,3)'
        className='w-full p-2 border rounded mb-4'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
        onClick={handleCalculate}
      >
        Calculate
      </button>

      <div className='mt-4 p-2 bg-green-100 text-green-800 rounded'>
        Result: {result}
      </div>
    </div>
  );
};

export default StringCalculator;
