function smallestCommons(arr) {
    let sortArr = arr.sort((a, b) => a - b)
    let count = sortArr[0]

    for (let i = sortArr[0] - 1; i <= sortArr[1]; i++) {
        if(count % i){
            i = sortArr[0] - 1
            count++
        }
    }
    return count
}

console.log(smallestCommons([23,18]))