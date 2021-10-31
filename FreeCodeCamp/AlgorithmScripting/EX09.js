function fearNotLetter(str) {
    let alfa = 'abcdefghijklmnopqrstuvwxyz'
    let b = []
    for (let i = 0; i < str.length; i++) {
        b.push(alfa.split('').indexOf(str[i]))
    }
    let count = b[0]
    console.log(b)
    for (let i = 0; i < str.length; i++) {
        if(b[i] != count){
            return alfa[count]
        }
        count++
    }
    return undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))