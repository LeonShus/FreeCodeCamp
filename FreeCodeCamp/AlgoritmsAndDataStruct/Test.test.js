const {palindrome} = require("./EX01")
const {convertToRoman} = require("./EX02")
const {rot13} = require('./EX03')

test("Is Palindrome", () => {
    expect(palindrome("eye")).toBe(true)
    expect(palindrome("_eye")).toBe(true)
    expect(palindrome("race car")).toBe(true)
    expect(palindrome("not a palindrome")).toBe(false)
    expect(palindrome("0_0 (: /-\ :) 0-0")).toBe(true)
})


test("Convert to Roman", () => {
    expect(convertToRoman(2)).toBe("II")
    expect(convertToRoman(4)).toBe("IV")
    expect(convertToRoman(798)).toBe("DCCXCVIII")

})

test("Convert to ROT13", () => {
    expect(rot13('ABC Z')).toBe("NOP M")
})