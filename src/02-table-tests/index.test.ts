import { simpleCalculator, Action } from './index';

const testCases = [
  // +
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: -3, b: 5, action: Action.Add, expected: 2 },
  { a: 0, b: 0, action: Action.Add, expected: 0 },

  // -
  { a: 5, b: 2, action: Action.Subtract, expected: 3 },
  { a: 10, b: -3, action: Action.Subtract, expected: 13 },
  { a: 0, b: 0, action: Action.Subtract, expected: 0 },

  // /
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: -12, b: 3, action: Action.Divide, expected: -4 },
  { a: 0, b: 5, action: Action.Divide, expected: 0 },

  // x
  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: -4, b: 5, action: Action.Multiply, expected: -20 },
  { a: 0, b: 10, action: Action.Multiply, expected: 0 },

  // ^
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 4, b: -2, action: Action.Exponentiate, expected: 0.0625 },
  { a: 0, b: 5, action: Action.Exponentiate, expected: 0 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should perform %p operation on %p and %p',
    ({ a, b, action, expected }) => {
      const input = {
        a,
        b,
        action,
      };

      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    },
  );
});
