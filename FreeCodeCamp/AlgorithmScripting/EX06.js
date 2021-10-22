function translatePigLatin(str) {
    let newStr = str
    let firstLater = /^[aeo]/
    let noLater = /[aeo]/

    if(!noLater.test(newStr)){
        return newStr + 'ay'
    }
    for (let i = 0; i < str.length; i++) {
        if(firstLater.test(newStr)){
            return i === 0 ? newStr + 'way' : newStr + 'ay'
        }
        newStr = newStr.slice(1) + newStr[0]
    }
    return newStr
}

console.log(translatePigLatin("consonant"))
console.log(translatePigLatin("glove"))
console.log(translatePigLatin("eight"))