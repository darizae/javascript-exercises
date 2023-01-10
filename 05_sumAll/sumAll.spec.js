/*const isValidArg = require('./sumAll')

describe('isValidArg', () => {
  test('returns false for non-number parameters', () => {
    expect(isValidArg("90")).toEqual(false);
  });
  test('returns false for non-number parameters', () => {
    expect(isValidArg([90, 1])).toEqual(false);
  });
  test('returns false for negative numbers', () => {
    expect(isValidArg(-1)).toEqual(false);
  });
  test('returns true for a positive number', () => {
    expect(isValidArg(1)).toEqual(true);
  });
  test('returns false for decimal positive numbers', () => {
    expect(isValidArg(1.1)).toEqual(false);
  });
});
*/

const sumAll = require('./sumAll')

describe('sumAll', () => {
  test('sums numbers within the range', () => {
    expect(sumAll(1, 4)).toEqual(10);
  });
  test('works with large numbers', () => {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  test('works with larger number first', () => {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  test('returns ERROR with negative numbers', () => {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
  test('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
  test('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');
  });
});
