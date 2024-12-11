import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import StringCalculator from '../components/StringCalculator';

describe('StringCalculator Component', () => {
  test('should render the calculator', () => {
    render(<StringCalculator />);

    expect(screen.getByText('String Calculator')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter numbers (e.g., 1,2,3)')).toBeInTheDocument();
    expect(screen.getByText('Calculate')).toBeInTheDocument();
  });

  test('should calculate sum correctly', () => {
    render(<StringCalculator />);

    const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2,3)');
    const calculateButton = screen.getByText('Calculate');

    fireEvent.change(input, { target: { value: '1,5' } });
    fireEvent.click(calculateButton);

    expect(screen.getByText('Result: 6')).toBeInTheDocument();
  });

  test("handle empty input", () => {
    render(<StringCalculator />);

    const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2,3)');
    const calculateButton = screen.getByText('Calculate');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(calculateButton);

    expect(screen.getByText('Result: 0')).toBeInTheDocument();
  });

  test("should return same number on single number input", () => {
    render(<StringCalculator />);

    const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2,3)');
    const calculateButton = screen.getByText('Calculate');

    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.click(calculateButton);

    expect(screen.getByText('Result: 5')).toBeInTheDocument();
  });

  test("calculates sum of multiple numbers correctly", () => {
    render(<StringCalculator />);

    const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2,3)');
    const calculateButton = screen.getByText('Calculate');

    fireEvent.change(input, { target: { value: '1,2,3,4,5' } });
    fireEvent.click(calculateButton);

    expect(screen.getByText('Result: 15')).toBeInTheDocument();
  });

  test("should handle new lines between numbers", () => {
    render(<StringCalculator />);

    const input = screen.getByPlaceholderText('Enter numbers (e.g., 1,2,3)');
    const calculateButton = screen.getByText('Calculate');

    fireEvent.change(input, { target: { value: '1\n2,3' } });
    fireEvent.click(calculateButton);

    expect(screen.getByText('Result: 6')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '1,2\n3' } });
    fireEvent.click(calculateButton);

    expect(screen.getByText('Result: 6')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '1\n2,3\n4,7' } });
    fireEvent.click(calculateButton);

    expect(screen.getByText('Result: 17')).toBeInTheDocument();
  });
});
