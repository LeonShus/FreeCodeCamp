function dropElements(arr, func) {
    let count = arr
    while(arr.length > 0 && !func(count[0])){
        count.shift()
    }

    return count
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))