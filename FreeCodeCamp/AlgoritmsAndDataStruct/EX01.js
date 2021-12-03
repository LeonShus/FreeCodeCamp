const palindrome = (str) => {
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '')
    return newStr === newStr.split('').reverse().join('')
}


module.exports = {palindrome}