function pairElement(str) {
    return str.split('').map(e => {
        switch (e) {
            case 'A':
                return [ e, 'T']
            case 'T':
                return [ e, 'A']
            case 'C':
                return [ e, 'G']
            case 'G':
                return [ e, 'C']
            default:
                return e
        }
    })
}


console.log(pairElement("GCG"))
console.log(pairElement("ATCGA"))