function alphabeticalOrder(arr) {
    return arr.sort((a,b) => a == b ? 0 : a < b ? -1 : 1)
}