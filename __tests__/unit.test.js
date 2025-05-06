// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('test phone number with dashes', () => {
   expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('test phone number no dashes', () => {
   expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('test phone number too short', () => {
   expect(isPhoneNumber('123456789')).toBe(false);
});

test('test phone number too long', () => {
   expect(isPhoneNumber('1234567890')).toBe(false);
});

test('valid email .com', () => {
   expect(isEmail('abc@gmail.com')).toBe(true);
});

test('valid email .org', () => {
   expect(isEmail('abc@gmail.org')).toBe(true);
});

test('invalid email', () => {
   expect(isEmail('abc')).toBe(false);
});

test('invalid email no domain', () => {
   expect(isEmail('abc@.org')).toBe(false);
});

test('valid strong password', () => {
   expect(isStrongPassword('Abc123')).toBe(true);
});

test('valid strong password', () => {
   expect(isStrongPassword('A898123')).toBe(true);
});

test('invalid password wrong starting char', () => {
   expect(isStrongPassword('0$@123')).toBe(false);
});

test('invalid password too long', () => {
   expect(isStrongPassword('AAAA123123AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')).toBe(false);
});

test('valid date', () => {
   expect(isDate("5/5/2024")).toBe(true);
});

test('valid date', () => {
   expect(isDate("05/05/2024")).toBe(true);
});

test('invalid date incorrect year format', () => {
   expect(isDate("05/05/24")).toBe(false);
});

test('invalid date incorrect month format', () => {
   expect(isDate("050/05/2024")).toBe(false);
});

test('valid hex color 3 char', () => {
   expect(isHexColor("#333")).toBe(true);
});

test('valid hex color 6 char', () => {
   expect(isHexColor("#333333")).toBe(true);
});

test('invalid hex color 4 char', () => {
   expect(isHexColor("#3333")).toBe(false);
});

test('invalid hex no #', () => {
   expect(isHexColor("3333")).toBe(false);
});
