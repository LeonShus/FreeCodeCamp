const squareList = arr => {
    return arr.filter(el => el > 0 && el === Math.floor(el)).map(el => el**2);
};