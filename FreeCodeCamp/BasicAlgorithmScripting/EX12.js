function frankenSplice(arr1, arr2, n) {
    let a = [...arr2]
    a.splice(n,0, ...arr1);
    return a
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);