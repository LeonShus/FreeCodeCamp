
const {palindrome} = require('./EX01')

test('Is Palindrome', () => {
    expect(palindrome('eye')).toBe(true)
    expect(palindrome('_eye')).toBe(true)
    expect(palindrome("race car")).toBe(true)
    expect(palindrome("not a palindrome")).toBe(false)
    expect(palindrome("0_0 (: /-\ :) 0-0")).toBe(true)
})