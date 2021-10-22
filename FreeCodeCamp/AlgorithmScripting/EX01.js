function sumAll(arr) {
    let a = arr.sort((a,b) => a-b)
    let b = []
    for(let i = a[0]; i <= a[1]; i++){
        b.push(i)
    }
    return b.reduce((sum, el) => sum += el);
}
console.log(sumAll([5, 10]))