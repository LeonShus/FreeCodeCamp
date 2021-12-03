function rot13(str) {
    let newStr = str.split("")
        .map(el => {
                let code = el.charCodeAt()
                //65 = A, 90 = Z
                if (code >= 65 && code <= 90) {
                    if (code + 13 > 90) {
                        return String.fromCharCode(64 + ((code + 13) - 90))
                    }
                    return String.fromCharCode(code + 13)
                }
                return String.fromCharCode(code)
            }
        )
    return newStr.join('')
}

module.exports = {rot13}