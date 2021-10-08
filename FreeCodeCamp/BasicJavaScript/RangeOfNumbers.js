let arr =[]
function rangeOfNumbers(startNum, endNum) {
    if(startNum === endNum + 1) return arr

    arr.push(startNum)
    return rangeOfNumbers(startNum + 1, endNum)
};
