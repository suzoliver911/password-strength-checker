import { PasswordChecker } from '../checker';

test('password is greater than 7', () => {
  const pc = new PasswordChecker('12345678');
  expect(pc.isLongEnough()).toBe(true);
});

test('contains at least one alphabetic char - lower case', () => {
  const pc = new PasswordChecker('1234a');
  expect(pc.containsAlpha()).toBe(true);
});

test('contains at least one alphabetic char - upper case', () => {
  const pc = new PasswordChecker('1234A');
  expect(pc.containsAlpha()).toBe(true);
});

test('contains at least one number - upper case', () => {
  const pc = new PasswordChecker('abc1');
  expect(pc.containsNumber()).toBe(true);
});
