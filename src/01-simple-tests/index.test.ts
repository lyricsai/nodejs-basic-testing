// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = {
      a: 2,
      b: 1,
      action: Action.Add,
    };

    const result = simpleCalculator(input);
    expect(result).toBe(3);
  });

  test('should subtract two numbers', () => {
    const input = {
      a: 2,
      b: 1,
      action: Action.Subtract,
    };

    const result = simpleCalculator(input);
    expect(result).toBe(1);
  });

  test('should multiply two numbers', () => {
    const input = {
      a: 2,
      b: 2,
      action: Action.Multiply,
    };

    const result = simpleCalculator(input);
    expect(result).toBe(4);
  });

  test('should divide two numbers', () => {
    const input = {
      a: 2,
      b: 2,
      action: Action.Divide,
    };

    const result = simpleCalculator(input);
    expect(result).toBe(1);
  });

  test('should exponentiate two numbers', () => {
    const input = {
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    };

    const result = simpleCalculator(input);
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const input = {
      a: 2,
      b: 3,
      action: 'InvalidAction',
    };

    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const input = {
      a: 'invalid',
      b: 3,
      action: Action.Add,
    };

    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });
});
