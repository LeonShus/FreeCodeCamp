function myReplace(str, before, after) {
    let a = after
    if(before[0] === before[0].toUpperCase()){
        a = a.replace(a[0], a[0].toUpperCase())
    } else {
        a = a.replace(a[0], a[0].toLowerCase())
    }
    return str.replace(before, a)
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"))