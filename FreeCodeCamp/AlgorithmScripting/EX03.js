function destroyer(arr) {
    let a = arr
    for (let i = 1; i <= arguments.length - 1; i++) {
       a = a.filter(el => el != arguments[i])
    }
    return a;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))