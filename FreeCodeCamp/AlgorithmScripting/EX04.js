function whatIsInAName(collection, source) {
    let arrKey = Object.keys(source);

    return collection.filter( obj => {
        for (let i = 0; i < arrKey.length; i++) {
            if(!obj.hasOwnProperty(arrKey[i]) || obj[arrKey[i]] !== source[arrKey[i]]){
                return false
            }
        }
        return true
    })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }], {last: "Capulet"}))