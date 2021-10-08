function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < n; i++) {
        row.push(0)
    }
    for (let j = 0; j < m; j++){
        newArray.push(row)
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
